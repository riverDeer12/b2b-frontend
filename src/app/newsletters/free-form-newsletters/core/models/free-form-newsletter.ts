import {environment} from "../../../../../environments/environment";
import {LocalizedProperty, TranslationsObject} from "../../../../shared/models/localized-property";


export class FreeFormNewsletter {
    id!: string;
    isActive!: boolean;
    title!: LocalizedProperty;
    content!: LocalizedProperty;
    sendEmails!: boolean;
    includeAdditionalContent!: boolean;
    sendToAllCompanies!: boolean;
    sendToAllScientists!: boolean;
    sendToAllPublicOrganizations!: boolean;
    recipients!: Recipient[];

    get localizedContent(): string {
        return this.content.translations[localStorage.getItem('language') as keyof TranslationsObject];
    }

    get localizedTitle(): string {
        return this.title.translations[localStorage.getItem('language') as keyof TranslationsObject];
    }

}

export class Recipient {
    userId!: string;
    userType!: number;
}
