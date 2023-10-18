import {LocalizedProperty} from "../../../shared/models/localized-property";

export class Category {
    id!: string;
    name!: LocalizedProperty;
    description!: LocalizedProperty;

    get localizedName(): string {
        return this.name.translations.HR;
    }
}
