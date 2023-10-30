import {Category} from '../../../categories/core/models/category';
import {LocalizedProperty, TranslationsObject} from '../../../shared/models/localized-property';
import {Languages} from '../../../shared/constants/languages';

export class Equipment {
    id!: string;
    createdAt!: Date;
    updatedAt!: Date;
    image!: string;
    title!: LocalizedProperty;
    description!: LocalizedProperty;
    numberOfViews!: number;
    categories!: Category[];
    scientistId!: string;
    isActive!: boolean;

    get imageUrl(): string {
        return this.image ??
            'assets/layout/images/image-default.png'
    }

    get parentId(): string {
        return this.scientistId;
    }

    get localizedTitle(): string {
        return this.title.translations[localStorage.getItem('language') as keyof TranslationsObject];
    }

    get localizedDescription(): string {
        return this.description.translations[localStorage.getItem('language') as keyof TranslationsObject];
    }
}
