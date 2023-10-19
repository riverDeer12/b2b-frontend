import {LocalizedProperty, TranslationsObject} from '../../../shared/models/localized-property';
import {Languages} from '../../../shared/constants/languages';

export class Category {
    id!: string;
    name!: LocalizedProperty;
    description!: LocalizedProperty;

    constructor() {

    }

    get currentLanguage(): string {
        const localStorageData = localStorage.getItem('lang') as string;

        if (!Object.values(Languages).includes(localStorageData)) {
            return 'HR';
        } else {
            return localStorageData;
        }
    }

    get localizedDescription(): string {
        return this.description.translations[this.currentLanguage as keyof TranslationsObject];
    }

    get localizedName(): string {
        return this.name.translations[this.currentLanguage as keyof TranslationsObject];
    }
}
