import {Category} from '../../../categories/core/models/category';
import {EntityType} from "../../../auth/core/enums/entity-type";
import {LocalizedProperty} from "../../../shared/models/localized-property";

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
    parentEntityType!: EntityType;
    parentEntityId!: string;

    getTitle(): string {
        return this.title.translations.HR;
    }
}
