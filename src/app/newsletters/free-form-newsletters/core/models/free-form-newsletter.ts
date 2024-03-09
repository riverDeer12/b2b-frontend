export class FreeFormNewsletter {
    id!: string;
    isActive!: boolean;
    title!: {};
    content!: {};
    sendEmails!: boolean;
    includeAdditionalContent!: boolean;
    sendToAllCompanies!: boolean;
    sendToAllScientists!: boolean;
    sendToAllPublicOrganizations!: boolean;
    recipients!: Recipient[];
}

export class Recipient {
    userId!: string;
    userType!: number;
}
