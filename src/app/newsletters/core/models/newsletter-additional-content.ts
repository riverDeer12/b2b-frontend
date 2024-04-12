import {LocalizedProperty, TranslationsObject} from '../../../shared/models/localized-property';

export class NewsletterAdditionalContent {
    id!: string;
    name!: string;
    content!: LocalizedProperty;
    createdAt!: Date;
    updatedAt!: Date;
    image!: string;
    isActive!: boolean;
    visibleFrom!: Date;
    visibleUntil!: Date;
    attachedTo!: NewsletterType;

    get localizedContent(): string {
        return this.content.translations[localStorage.getItem('language') as keyof TranslationsObject];
    }

    get imageUrl(): string {
        return this.image ??
            'assets/layout/images/image-default.png'
    }
}

export enum NewsletterType {
    FreeForm,
    PlatformNews,
    Matchmaking
}

