import {LocalizedProperty, TranslationsObject} from '../../../shared/models/localized-property';

export class Newsletter {
    id!: string;
    content!: LocalizedProperty;
    createdAt!: Date;
    updatedAt!: Date;
    numberOfViews!: number;
    image!: string;
    isActive!: boolean;

    get localizedContent(): string {
        return this.content.translations[localStorage.getItem('language') as keyof TranslationsObject];
    }

    get imageUrl(): string {
        return this.image ??
            'assets/layout/images/image-default.png'
    }
}
