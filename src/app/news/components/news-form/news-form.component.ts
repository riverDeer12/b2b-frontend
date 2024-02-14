import {Component, Input} from '@angular/core';
import {FormType} from '../../../shared/enums/form-type';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NotificationService} from '../../../shared/services/notification.service';
import {NotificationType} from '../../../shared/enums/notification-type';
import {News} from '../../core/models/news';
import {NewsService} from '../../core/services/news.service';
import {ValidationService} from '../../../shared/services/validation.service';
import {EntityType} from '../../../auth/core/enums/entity-type';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {LanguageService} from "../../../shared/services/language.service";

@Component({
    selector: 'news-form',
    templateUrl: './news-form.component.html',
    styleUrls: ['./news-form.component.scss']
})
export class NewsFormComponent {
    @Input() formType!: FormType;
    @Input() news!: News
    @Input() returnUrl!: string;

    entityType = EntityType.News;

    isLoading: boolean = false;

    translateLoading: boolean = false;

    form!: FormGroup;

    public get formActionType(): typeof FormType {
        return FormType;
    }

    constructor(public validationService: ValidationService,
                private fb: FormBuilder,
                private router: Router,
                private languageService: LanguageService,
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
                    EN: new FormControl(this.news.title.translations.EN, Validators.required)
                })
            }),
            content: this.fb.group({
                translations: this.fb.group({
                    HR: new FormControl(this.news.content.translations.HR, Validators.required),
                    EN: new FormControl(this.news.content.translations.EN, Validators.required)
                })
            })
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
                .showNotification(NotificationType.Error,
                    'correct-validation-errors');
            this.isLoading = false;
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
                        'news.successfully-created');
                this.router.navigateByUrl(this.returnUrl).then();
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
     * Connecting to category
     * service and sending form data to
     * updated selected category.
     */
    private editNews(): void {

        this.newsService.editNews(this.news.id, this.form.value).subscribe(() => {
                this.notificationService
                    .showNotification(NotificationType.Success,
                        'news.successfully-updated');
                this.router.navigateByUrl(this.returnUrl).then();
                this.isLoading = false;
            },
            () => {
                this.notificationService
                    .showNotification(NotificationType.Error,
                        'correct-validation-errors');
                this.isLoading = false;
            })
    }

    translateNewsToEnglish(): void {
        this.translateLoading = true;
        this.translateContent('title');
        this.translateContent('content');
    }

    /**
     * Translate news content
     * from croatian to english.
     */
    translateContent(formControlName: string): void {
        const formGroup = this.form.controls[formControlName] as FormGroup;
        const translationFormGroup = formGroup.controls['translations'] as FormGroup;
        const croatianValue = translationFormGroup.controls['HR'].value;

        this.newsService.translate(croatianValue, "hr", "en")
            .subscribe((response: any) => {
                    translationFormGroup.controls['EN'].setValue(response.translatedText as string);
                    this.notificationService
                        .showNotification(NotificationType.Success,
                            'translate.successfully-translated');
                    this.translateLoading = false;
                },
                error => {
                    this.notificationService
                        .showNotification(NotificationType.Error,
                            'translate.translate-error');
                    this.translateLoading = false;
                })
    }
}
