import {LocalizedProperty, TranslationsObject} from '../../../shared/models/localized-property';
import {Languages} from '../../../shared/constants/languages';

export class Category {
    id!: string;
    name!: LocalizedProperty;
    description!: LocalizedProperty;
    isActive!: boolean;

    constructor() {

    }


    get localizedDescription(): string {
        return this.description.translations[localStorage.getItem('language') as keyof TranslationsObject];
    }

    get localizedName(): string {
        return this.name.translations[localStorage.getItem('language') as keyof TranslationsObject];
    }
}
