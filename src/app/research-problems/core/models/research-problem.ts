import {Category} from '../../../categories/core/models/category';
import {LocalizedProperty} from '../../../shared/models/localized-property';

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

    get parentId(): string {
        return this.companyId ?? this.publicOrganizationId;
    }

    get localizedTitle(): string {
        return this.title.translations.HR;
    }

    get localizedDescription(): string {
        return this.description.translations.HR;
    }

    get localizedAcademicCommunityContributionPossibility(): string {
        return this.academicCommunityContributionPossibility.translations.HR;
    }
}
