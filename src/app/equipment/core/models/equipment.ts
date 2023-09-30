import {Category} from '../../../categories/core/models/category';
import {LocalizedProperty} from "../../../shared/models/localized-property";

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

    getTitle(): string {
        return this.title.translations.HR;
    }
}
