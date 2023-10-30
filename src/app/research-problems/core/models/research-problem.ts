import {Category} from '../../../categories/core/models/category';
import {LocalizedProperty, TranslationsObject} from '../../../shared/models/localized-property';
import {Languages} from '../../../shared/constants/languages';

export class ResearchProblem {
    id!: string;
    image!: string;
    createdAt!: Date;
    updatedAt!: Date;
    title!: LocalizedProperty;
    description!: LocalizedProperty;
    numberOfViews!: number;
    academicCommunityContributionPossibility!: LocalizedProperty;
    publicOrganizationId!: string;
    companyId!: string;
    categories!: Category[];
    isActive!: boolean;

    get parentId(): string {
        return this.companyId ?? this.publicOrganizationId;
    }

    get localizedDescription(): string {
        return this.description.translations[localStorage.getItem('language') as keyof TranslationsObject];
    }

    get localizedTitle(): string {
        return this.title.translations[localStorage.getItem('language') as keyof TranslationsObject];
    }

    get localizedAcademicCommunityContributionPossibility(): string {
        return this.academicCommunityContributionPossibility.translations[localStorage.getItem('language') as keyof TranslationsObject];
    }
}
