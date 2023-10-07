import {Category} from '../../../categories/core/models/category';
import {LocalizedProperty} from "../../../shared/models/localized-property";

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

    getName(): string{
        return this.name.translations.HR;
    }
}
