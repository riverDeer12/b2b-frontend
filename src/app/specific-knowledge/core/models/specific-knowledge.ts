import {Category} from '../../../categories/core/models/category';
import {LocalizedProperty} from "../../../shared/models/localized-property";

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
}
