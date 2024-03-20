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

export enum RecipientType {
    SuperAdmin,
    Company,
    Scientist,
    PublicOrganization
}

export class Recipient {
    userId!: string;
    userType!: RecipientType;
    firstname!: string;
    lastname!: string;
    email!: string;
    defaultLanguage!: number;

    get fullName(): string {
        return this.firstname + ' ' + this.lastname;
    }
}
