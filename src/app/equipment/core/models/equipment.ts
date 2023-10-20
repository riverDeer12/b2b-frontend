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

    get currentLanguage(): string {
        const localStorageData = localStorage.getItem('lang') as string;

        if (!Object.values(Languages).includes(localStorageData)) {
            return 'HR';
        } else {
            return localStorageData;
        }
    }

    get parentId(): string {
        return this.scientistId;
    }

    get localizedTitle(): string {
        return this.title.translations[this.currentLanguage as keyof TranslationsObject];
    }

    get localizedDescription(): string {
        return this.description.translations[this.currentLanguage as keyof TranslationsObject];
    }
}
