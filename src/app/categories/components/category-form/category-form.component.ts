import {Component, Input} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../core/models/category';
import {FormType} from '../../../shared/enums/form-type';
import {CategoryService} from '../../core/services/category.service';
import {Router} from '@angular/router';
import {NotificationService} from '../../../shared/services/notification.service';
import {NotificationType} from '../../../shared/enums/notification-type';
import {ValidationService} from '../../../shared/services/validation.service';

@Component({
    selector: 'category-form',
    templateUrl: './category-form.component.html',
    styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent {
    @Input() formType!: FormType;
    @Input() category!: Category
    @Input() returnUrl!: string;

    form!: FormGroup;

    constructor(
        public validationService: ValidationService,
        private fb: FormBuilder,
        private router: Router,
        private notificationService: NotificationService,
        private categoryService: CategoryService) {
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
            name: this.fb.group({
                translations: this.fb.group({
                    en: new FormControl('', Validators.required),
                    hr: new FormControl('', Validators.required)
                })
            })
        })
    }

    /**
     * Initializes form if
     * edit form action is triggered.
     */
    private initEditForm(): void {
        this.form = this.fb.group({
            name: this.fb.group({
                translations: this.fb.group({
                    en: new FormControl(this.category.name.translations.en, Validators.required),
                    hr: new FormControl(this.category.name.translations.hr, Validators.required)
                })
            })
        })
    }

    /**
     * Method that is triggered
     * by clicking submit button.
     */
    submit(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            this.notificationService
                .showNotification(NotificationType.Error,
                    'correct-validation-errors');
            return;
        }

        /*        this.formType === FormType.Create ?
                    this.createCategory() :
                    this.editCategory();*/
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
                        'category-successfully-created');

                this.router.navigateByUrl(this.returnUrl).then();
            },
            (error) => {
                this.notificationService
                    .showNotification(NotificationType.Error,
                        'correct-validation-errors');
            })
    }

    /**
     * Connecting to category
     * service and sending form data to
     * updated selected category.
     */
    private editCategory(): void {
        this.categoryService.editCategory(this.category.id, this.form.value).subscribe(() => {
                this.notificationService
                    .showNotification(NotificationType.Success,
                        'category-successfully-updated');

                this.router.navigateByUrl(this.returnUrl).then();
            },
            (error) => {
                this.notificationService
                    .showNotification(NotificationType.Error,
                        'correct-validation-errors');
            })
    }
}
