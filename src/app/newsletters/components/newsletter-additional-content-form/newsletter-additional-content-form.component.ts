import {Component, Input} from '@angular/core';
import {FormType} from '../../../shared/enums/form-type';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NotificationService} from '../../../shared/services/notification.service';
import {NotificationType} from '../../../shared/enums/notification-type';
import {NewsletterAdditionalContent, NewsletterType} from '../../core/models/newsletter-additional-content';
import {NewsletterAdditionalContentService} from '../../core/services/newsletter-additional-content.service';
import {ValidationService} from '../../../shared/services/validation.service';
import {EntityType} from '../../../auth/core/enums/entity-type';
import {LanguageService} from "../../../shared/services/language.service";
import {EditorConfig} from "../../../shared/constants/editor-config";
import {SharedService} from "../../../shared/services/shared.service";

@Component({
    selector: 'newsletter-additional-content-form',
    templateUrl: './newsletter-additional-content-form.component.html',
    styleUrls: ['./newsletter-additional-content-form.component.scss']
})
export class NewsletterAdditionalContentFormComponent {
    @Input() formType!: FormType;
    @Input() newsletter!: NewsletterAdditionalContent;
    @Input() returnUrl!: string;

    entityType = EntityType.Newsletter;

    isLoading: boolean = false;

    translateLoading: boolean = false;

    form!: FormGroup;

    editorModules = EditorConfig.getNewsletterEditorConfig(this.sharedService);

    public get formActionType(): typeof FormType {
        return FormType;
    }

    newsletterTypes = [
        {label: 'Free Form', value: NewsletterType.FreeForm},
        {label: 'Platform News', value: NewsletterType.PlatformNews},
        {label: 'Matchmaking', value: NewsletterType.Matchmaking}
    ];

    constructor(public validationService: ValidationService,
                private fb: FormBuilder,
                private router: Router,
                private sharedService: SharedService,
                private languageService: LanguageService,
                private notificationService: NotificationService,
                private newsletterService: NewsletterAdditionalContentService) {
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
            name: new FormControl('', Validators.required),
            content: this.fb.group({
                translations: this.fb.group({
                    HR: new FormControl('', Validators.required),
                    EN: new FormControl('', Validators.required)
                })
            }),
            visibleFrom: new FormControl('', Validators.required),
            visibleUntil: new FormControl('', Validators.required),
            attachedTo: new FormControl('', Validators.required)
        })
    }

    /**
     * Initializes form if
     * edit form action is triggered.
     */
    private initEditForm(): void {
        this.form = this.fb.group({
            name: new FormControl(this.newsletter.name, Validators.required),
            content: this.fb.group({
                translations: this.fb.group({
                    HR: new FormControl(this.newsletter.content.translations.HR, Validators.required),
                    EN: new FormControl(this.newsletter.content.translations.EN, Validators.required)
                })
            }),
            visibleFrom: new FormControl(new Date(this.newsletter.visibleFrom), Validators.required),
            visibleUntil: new FormControl(new Date(this.newsletter.visibleUntil), Validators.required),
            attachedTo: new FormControl(this.newsletter.attachedTo, Validators.required)
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
                    'correct-validation-errors-with-translations');
            this.isLoading = false;
            return;
        }

        this.formType === FormType.Create ?
            this.createNewsletter() :
            this.editNewsletter();
    }

    /**
     * Connecting to category
     * service and sending form data to
     * create new category.
     */
    private createNewsletter(): void {

        this.newsletterService.createNewsletterAdditionalContent(this.form.value).subscribe(() => {
                this.notificationService
                    .showNotification(NotificationType.Success,
                        'newsletters.successfully-created');
                this.router.navigateByUrl(this.returnUrl).then();
                this.isLoading = false;
            },
            () => {
                this.notificationService
                    .showNotification(NotificationType.Error,
                        'correct-validation-errors-with-translations');
                this.isLoading = false;
            })
    }

    /**
     * Connecting to category
     * service and sending form data to
     * updated selected category.
     */
    private editNewsletter(): void {

        this.newsletterService.editNewsletterAdditionalContent(this.newsletter.id, this.form.value).subscribe(() => {
                this.notificationService
                    .showNotification(NotificationType.Success,
                        'newsletters.successfully-updated');
                this.router.navigateByUrl(this.returnUrl).then();
                this.isLoading = false;
            },
            () => {
                this.notificationService
                    .showNotification(NotificationType.Error,
                        'correct-validation-errors-with-translations');
                this.isLoading = false;
            })
    }

    translateNewsToEnglish(): void {
        this.translateLoading = true;
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

        if (!croatianValue) {
            this.translateLoading = false;
            return;
        }

        this.languageService.translate(croatianValue, "hr", "en")
            .subscribe((response: any) => {
                    translationFormGroup.controls['EN'].setValue(response.translatedText as string);
                    this.notificationService
                        .showNotification(NotificationType.Success,
                            'translate.successfully-translated');
                    this.translateLoading = false;
                },
                error => {
                    this.notificationService
                        .showNotification(NotificationType.Warning,
                            'translate.translate-error');
                    this.translateLoading = false;
                })
    }
}
