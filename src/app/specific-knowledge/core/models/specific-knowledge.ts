import {Category} from '../../../categories/core/models/category';
import {LocalizedProperty, TranslationsObject} from '../../../shared/models/localized-property';
import {Languages} from '../../../shared/constants/languages';

export class SpecificKnowledge {
    id!: string;
    image!: string;
    createdAt!: Date;
    updatedAt!: Date;
    title!: LocalizedProperty;
    description!: LocalizedProperty;
    numberOfViews!: number;
    categories!: Category[];
    scientistId!: string;
    isActive!: boolean;

    get currentLanguage(): string {
        const localStorageData = localStorage.getItem('lang') as string;

        if (!Object.values(Languages).includes(localStorageData)) {
            return 'HR';
        } else {
            return localStorageData;
        }
    }

    get imageUrl(): string {
        return this.image ??
        'assets/layout/images/image-default.png'
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
