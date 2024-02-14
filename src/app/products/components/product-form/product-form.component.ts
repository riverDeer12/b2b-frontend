import {Component, Input} from '@angular/core';
import {FormType} from '../../../shared/enums/form-type';
import {EntityType} from '../../../auth/core/enums/entity-type';
import {RedirectType} from '../../../shared/enums/redirect-type';
import {Category} from '../../../categories/core/models/category';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidationService} from '../../../shared/services/validation.service';
import {SharedService} from '../../../shared/services/shared.service';
import {NotificationService} from '../../../shared/services/notification.service';
import {NotificationType} from '../../../shared/enums/notification-type';
import {Product} from '../../core/models/product';
import {ProductService} from '../../core/services/product.service';

@Component({
    selector: 'product-form',
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
    @Input() formType!: FormType;
    @Input() redirectType!: RedirectType;
    @Input() parentEntityId!: string;
    @Input() parentEntityType!: EntityType;
    @Input() product!: Product;
    @Input() returnUrl!: string;
    @Input() dialogId!: string;
    @Input() categories!: Category[];

    entityType: EntityType = EntityType.Product;

    isLoading: boolean = false;

    form!: FormGroup;

    public get formActionType(): typeof FormType {
        return FormType;
    }

    constructor(
        public validationService: ValidationService,
        private fb: FormBuilder,
        private sharedService: SharedService,
        private notificationService: NotificationService,
        private productService: ProductService) {
    }

    ngOnInit() {
        this.initFormGroup();
    }

    /**
     * Switch function depending on
     * form action type from input decorator.
     */
    private initFormGroup = () => this.formType === FormType.Create ?
        this.initCreateForm() : this.initEditForm();


    /**
     * Initializes form if
     * create form action is triggered.
     */
    private initCreateForm(): void {
        this.form = this.fb.group({
            title: this.fb.group({
                translations: this.fb.group({
                    HR: new FormControl('', Validators.required),
                    EN: new FormControl('', Validators.required)
                })
            }),
            description: this.fb.group({
                translations: this.fb.group({
                    HR: new FormControl('', Validators.required),
                    EN: new FormControl('', Validators.required)
                })
            }),
            categories: new FormControl('', Validators.required)
        });
    }

    /**
     * Initializes form if
     * edit form action is triggered.
     */
    private initEditForm(): void {
        this.form = this.fb.group({
            title: this.fb.group({
                translations: this.fb.group({
                    HR: new FormControl(this.product.title.translations.HR, Validators.required),
                    EN: new FormControl(this.product.title.translations.EN, Validators.required)
                })
            }),
            description: this.fb.group({
                translations: this.fb.group({
                    HR: new FormControl(this.product.description.translations.HR, Validators.required),
                    EN: new FormControl(this.product.description.translations.EN, Validators.required)
                })
            }),
            categories: new FormControl(this.product.categories.map(x => x.id), Validators.required)
        });
    }

    /**
     * Method that is triggered
     * by clicking submit button.
     */
    submit(): void {

        this.isLoading = true;

        if (this.form.invalid) {
            this.form.markAllAsTouched();
            this.notificationService
                .showNotification(NotificationType.Warning,
                    'correct-validation-errors');
            this.isLoading = false;
            return;
        }

        this.formType === FormType.Create ?
            this.createProduct() :
            this.editProduct();
    }

    /**
     * Connecting to product
     * service and sending form data to
     * create product.
     */
    private createProduct() {
        this.productService
            .createProduct(this.parentEntityId, this.form.value)
            .subscribe((response: Product) => {
                    this.notificationService
                        .showNotification(NotificationType.Success,
                            'products.successfully-created');

                    this.sharedService.redirectUserAfterSubmit(this.redirectType, this.returnUrl, this.dialogId);

                    this.productService.pingProduct(this.form.value);

                    this.isLoading = false;
                },
                () => {
                    this.notificationService
                        .showNotification(NotificationType.Error,
                            'correct-validation-errors');

                    this.isLoading = false;
                })
    }

    /**
     * Connecting to product
     * service and sending form data to
     * updated selected product.
     */
    private editProduct(): void {
        this.productService
            .editProduct(this.parentEntityId, this.product.id, this.form.value)
            .subscribe((response: Product) => {
                    this.notificationService
                        .showNotification(NotificationType.Success,
                            'products.successfully-updated');

                    this.sharedService.redirectUserAfterSubmit(this.redirectType, this.returnUrl, this.dialogId);

                    this.productService.pingProduct(response);

                    this.isLoading = false;
                },
                () => {
                    this.notificationService
                        .showNotification(NotificationType.Error,
                            'correct-validation-errors');

                    this.isLoading = false;
                })
    }
}
