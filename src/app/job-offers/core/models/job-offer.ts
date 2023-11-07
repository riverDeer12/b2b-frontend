import {Category} from '../../../categories/core/models/category';
import {LocalizedProperty, TranslationsObject} from '../../../shared/models/localized-property';

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

    get imageUrl(): string {
        return this.image ??
            'assets/layout/images/image-default.png'
    }

    get localizedName(): string {
        return this.name.translations[localStorage.getItem('language') as keyof TranslationsObject];
    }

    get localizedDescription(): string {
        return this.description.translations[localStorage.getItem('language') as keyof TranslationsObject];
    }

    get localizedExperience(): string {
        return this.experience.translations[localStorage.getItem('language') as keyof TranslationsObject];
    }

    get localizedEducation(): string {
        return this.education.translations[localStorage.getItem('language') as keyof TranslationsObject];
    }

    get localizedSpecialConditions(): string {
        return this.specialConditions.translations[localStorage.getItem('language') as keyof TranslationsObject];
    }

    get localizedApplyMethod(): string {
        return this.applyMethod.translations[localStorage.getItem('language') as keyof TranslationsObject];
    }

    get localizedAdditional(): string {
        return this.additional.translations[localStorage.getItem('language') as keyof TranslationsObject];
    }

    get parentId(): string {
        return this.companyId;
    }
}
