import {LocalizedProperty, TranslationsObject} from '../../../shared/models/localized-property';
import {Category} from '../../../categories/core/models/category';

export class Product {
    id!: string;
    image!: string;
    title!: LocalizedProperty;
    description!: LocalizedProperty;
    categories!: Category[];
    companyId!: string;
    isActive!: boolean;

    get localizedTitle(): string {
        return this.title.translations[localStorage.getItem('language') as keyof TranslationsObject];
    }

    get localizedDescription(): string {
        return this.description.translations[localStorage.getItem('language') as keyof TranslationsObject];
    }

    get imageUrl(): string {
        return this.image ??
            'assets/layout/images/image-default.png'
    }

    get parentId(): string {
        return this.companyId;
    }
}
