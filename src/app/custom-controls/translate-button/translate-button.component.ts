import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {NotificationType} from "../../shared/enums/notification-type";
import {LanguageService} from "../../shared/services/language.service";
import {NotificationService} from "../../shared/services/notification.service";

@Component({
    selector: 'translate-button',
    templateUrl: './translate-button.component.html',
    styleUrls: ['./translate-button.component.scss']
})
export class TranslateButtonComponent {
    @Input() form!: FormGroup;
    @Input() sourceLanguage!: string;
    @Input() targetLanguage!: string;
    @Input() formControlNames!: string[];

    translateLoading: boolean = false;

    constructor(private languageService: LanguageService,
                private notificationService: NotificationService) {
    }

    translate(): void {

        this.translateLoading = true;

        this.formControlNames.forEach((control) => {
            this.translateContent(control);
        })
    }

    /**
     * Translate news content
     * from croatian to english.
     */
    translateContent(formControlName: string): void {
        const formGroup = this.form.controls[formControlName] as FormGroup;
        const translationFormGroup = formGroup.controls['translations'] as FormGroup;
        const croatianValue = translationFormGroup.controls[this.sourceLanguage].value;

        if (!croatianValue) {
            this.notificationService
                .showNotification(NotificationType.Warning,
                    'translate.required-fields');
            this.translateLoading = false;
            return;
        }

        this.languageService.translate(croatianValue, this.sourceLanguage, this.targetLanguage)
            .subscribe((response: any) => {
                    translationFormGroup.controls[this.targetLanguage].setValue(response.translatedText as string);
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
