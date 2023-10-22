import {Category} from '../../../categories/core/models/category';
import {LocalizedProperty, TranslationsObject} from '../../../shared/models/localized-property';
import {Languages} from '../../../shared/constants/languages';

export class JobOffer {
    id!: string;
    image!: string;
    createdAt!: Date;
    updatedAt!: Date;
    name!: LocalizedProperty;
    description!: LocalizedProperty;
    location!: string;
    deadline!: Date;
    experience!: LocalizedProperty;
    education!: LocalizedProperty;
    specialConditions!: LocalizedProperty;
    duration!: string;
    applyMethod!: LocalizedProperty;
    additional!: LocalizedProperty;
    categories!: Category[];
    companyId!: string;
    numberOfViews!: number;
    isActive!: boolean;

    get currentLanguage(): string {
        const localStorageData = localStorage.getItem('lang') as string;

        if (!Object.values(Languages).includes(localStorageData)) {
            return 'HR';
        } else {
            return localStorageData;
        }
    }

    get localizedName(): string {
        return this.name.translations[this.currentLanguage as keyof TranslationsObject];
    }

    get localizedDescription(): string {
        return this.description.translations[this.currentLanguage as keyof TranslationsObject];
    }

    get localizedExperience(): string {
        return this.experience.translations[this.currentLanguage as keyof TranslationsObject];
    }

    get localizedEducation(): string {
        return this.education.translations[this.currentLanguage as keyof TranslationsObject];
    }

    get localizedSpecialConditions(): string {
        return this.specialConditions.translations[this.currentLanguage as keyof TranslationsObject];
    }

    get localizedApplyMethod(): string {
        return this.applyMethod.translations[this.currentLanguage as keyof TranslationsObject];
    }

    get localizedAdditional(): string {
        return this.additional.translations[this.currentLanguage as keyof TranslationsObject];
    }

    get parentId(): string {
        return this.companyId;
    }
}
