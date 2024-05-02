import {Component, Input} from '@angular/core';
import {FormType} from "../../../shared/enums/form-type";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidationService} from "../../../shared/services/validation.service";
import {Router} from "@angular/router";
import {NotificationService} from "../../../shared/services/notification.service";
import {NotificationType} from "../../../shared/enums/notification-type";
import {SpecialCategory} from "../../core/models/special-category";
import {SpecialCategoryService} from "../../core/services/special-category.service";
import {Company} from "../../../companies/core/models/company";
import {Scientist} from "../../../scientists/core/models/scientist";
import {Organization} from "../../../organizations/core/models/organization";

@Component({
    selector: 'special-category-form',
    templateUrl: './special-category-form.component.html',
    styleUrls: ['./special-category-form.component.scss']
})
export class SpecialCategoryFormComponent {
    @Input() formType!: FormType;
    @Input() category!: SpecialCategory
    @Input() returnUrl!: string;

    @Input() scientists!: Scientist[];
    @Input() companies!: Company[];
    @Input() organizations!: Organization[];

    form!: FormGroup;

    isLoading: boolean = false;

    public get type(): typeof FormType {
        return FormType;
    }

    constructor(
        public validationService: ValidationService,
        private fb: FormBuilder,
        private router: Router,
        private notificationService: NotificationService,
        private categoryService: SpecialCategoryService) {
    }

    ngOnInit() {
        this.initFormGroup();
    }

    /**
     * Switch function depending on
     * form action type from input decorator.
     */
    initFormGroup = () => this.formType === FormType.Create ?
        this.initCreateForm() : this.initEditForm();


    /**
     * Initializes form if
     * create form action is triggered.
     */
    private initCreateForm(): void {
        this.form = this.fb.group({
            name: new FormControl('', Validators.required)
        })
    }

    /**
     * Initializes form if
     * edit form action is triggered.
     */
    private initEditForm(): void {
        this.form = this.fb.group({
            name: new FormControl(this.category.name, Validators.required)
        })
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
            this.createCategory() :
            this.editCategory();
    }

    /**
     * Connecting to category
     * service and sending form data to
     * create new category.
     */
    private createCategory(): void {
        this.categoryService.createCategory(this.form.value).subscribe(() => {
                this.notificationService
                    .showNotification(NotificationType.Success,
                        'categories.successfully-created');

                this.router.navigateByUrl(this.returnUrl).then();
                this.isLoading = false;
            },
            (error) => {
                this.notificationService
                    .showNotification(NotificationType.Error,
                        'correct-validation-errors');
                this.isLoading = false;
            })
    }

    /**
     * Connecting to category
     * service and sending form data to
     * updated selected category.
     */
    private editCategory(): void {
        this.categoryService.editCategory(this.category.id, this.form.value)
            .subscribe((response: Object) => {

                    this.notificationService
                        .showNotification(NotificationType.Success,
                            'categories.successfully-updated');

                    this.router.navigateByUrl(this.returnUrl).then();

                    this.isLoading = false;
                },
                (error) => {
                    this.notificationService
                        .showNotification(NotificationType.Error,
                            'correct-validation-errors');
                    this.isLoading = false;
                })
    }
}
