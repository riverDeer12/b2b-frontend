import {Component, Input} from '@angular/core';
import {FormType} from '../../../shared/enums/form-type';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NotificationService} from '../../../shared/services/notification.service';
import {NotificationType} from '../../../shared/enums/notification-type';
import {News} from '../../core/models/news';
import {NewsService} from '../../core/services/news.service';
import {ValidationService} from '../../../shared/services/validation.service';

@Component({
    selector: 'news-form',
    templateUrl: './news-form.component.html',
    styleUrls: ['./news-form.component.scss']
})
export class NewsFormComponent {
    @Input() formType!: FormType;
    @Input() news!: News
    @Input() returnUrl!: string;

    form!: FormGroup;

    constructor(public validationService: ValidationService,
                private fb: FormBuilder,
                private router: Router,
                private notificationService: NotificationService,
                private newsService: NewsService) {
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
            title: this.fb.group({
                translations: this.fb.group({
                    HR: new FormControl('', Validators.required),
                    EN: new FormControl('', Validators.required)
                })
            }),
            content: this.fb.group({
                translations: this.fb.group({
                    HR: new FormControl('', Validators.required),
                    EN: new FormControl('', Validators.required)
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
            title: this.fb.group({
                translations: this.fb.group({
                    HR: new FormControl(this.news.title.translations.HR, Validators.required),
                    EN: new FormControl(this.news.title.translations.en, Validators.required)
                })
            }),
            content: this.fb.group({
                translations: this.fb.group({
                    EN: new FormControl(this.news.content.translations.HR, Validators.required),
                    HR: new FormControl(this.news.content.translations.en, Validators.required)
                })
            })
        })
    }

    /**
     * Method that is triggered
     * by clicking submit button.
     */
    submit(): void {

        console.log(this.form.value);

        if (this.form.invalid) {
            this.form.markAllAsTouched();
            this.notificationService
                .showNotification(NotificationType.Error,
                    'correct-validation-errors');
            return;
        }

        this.formType === FormType.Create ?
            this.createNews() :
            this.editNews();
    }

    /**
     * Connecting to category
     * service and sending form data to
     * create new category.
     */
    private createNews(): void {
        this.newsService.createNews(this.form.value).subscribe(() => {
                this.notificationService
                    .showNotification(NotificationType.Success,
                        'category-successfully-created');

                this.router.navigateByUrl(this.returnUrl).then();
            },
            () => {
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
    private editNews(): void {
        this.newsService.editNews(this.news.id, this.form.value).subscribe(() => {
                this.notificationService
                    .showNotification(NotificationType.Success,
                        'category-successfully-updated');

                this.router.navigateByUrl(this.returnUrl).then();
            },
            () => {
                this.notificationService
                    .showNotification(NotificationType.Error,
                        'correct-validation-errors');
            })
    }
}
