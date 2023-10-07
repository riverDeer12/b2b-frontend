import {LocalizedProperty} from "../../../shared/models/localized-property";

export class Category {
    id!: string;
    name!: LocalizedProperty;
    description!: LocalizedProperty;

    getName(): string {
        return this.description.translations.HR;
    }
}
