import {Component, Input} from '@angular/core';
import {FormType} from "../../../../shared/enums/form-type";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidationService} from "../../../../shared/services/validation.service";
import {Router} from "@angular/router";
import {LanguageService} from "../../../../shared/services/language.service";
import {NotificationService} from "../../../../shared/services/notification.service";
import {NotificationType} from "../../../../shared/enums/notification-type";
import {FreeFormNewsletter, Recipient, RecipientType} from "../../core/models/free-form-newsletter";
import {FreeFormNewsletterService} from "../../core/services/free-form-newsletter.service";
import {environment} from "../../../../../environments/environment";

@Component({
    selector: 'free-form-newsletter-form',
    templateUrl: './free-form-newsletter-form.component.html',
    styleUrls: ['./free-form-newsletter-form.component.scss']
})
export class FreeFormNewsletterFormComponent {
    @Input() newsletter!: FreeFormNewsletter;
    @Input() returnUrl!: string;
    @Input() scientists!: Recipient[];
    @Input() companies!: Recipient[];
    @Input() organizations!: Recipient[];

    isLoading: boolean = false;

    translateLoading: boolean = false;

    form!: FormGroup;

    finalRecipients = [];

    public get recipientType(): typeof RecipientType {
        return RecipientType;
    }

    public get formActionType(): typeof FormType {
        return FormType;
    }

    constructor(public validationService: ValidationService,
                private fb: FormBuilder,
                private router: Router,
                private languageService: LanguageService,
                private notificationService: NotificationService,
                private newsletterService: FreeFormNewsletterService) {
    }

    ngOnInit() {
        this.initCreateForm();
    }


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
            }),
            sendEmail: new FormControl(environment.production),
            sendToAllCompanies: new FormControl(false),
            sendToAllScientists: new FormControl(false),
            sendToAllPublicOrganizations: new FormControl(false),
            companies: new FormControl('',),
            organizations: new FormControl('',),
            scientists: new FormControl('',),
            recipients: new FormControl('')
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

        this.prepareRecipients();

        this.createNewsletter();
    }

    private prepareRecipients(): void {
        this.finalRecipients = [];

        const controls = ['organizations', 'companies', 'scientists'];

        for (const control of controls) {
            const values = this.form.controls[control].value;
            if (values.length) {
                this.finalRecipients = this.finalRecipients.concat(values);
            }
        }
    }

    /**
     * Connecting to category
     * service and sending form data to
     * create new category.
     */
    private createNewsletter(): void {

        this.form.controls['recipients'].setValue(this.finalRecipients);

        this.newsletterService.createFreeFormNewsletter(this.form.value).subscribe(() => {
                this.notificationService
                    .showNotification(NotificationType.Success,
                        'newsletters.free-form-newsletters.successfully-created');
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

    triggerEntitySelector(recipientType: string) {
        this.form.controls[recipientType].setValue([]);
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
    private translateContent(formControlName: string): void {
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
