import {LocalizedProperty} from "../../../shared/models/localized-property";

export class News {
    id!: string;
    title!: LocalizedProperty;
    content!: LocalizedProperty;
    createdAt!: Date;
    updatedAt!: Date;
    numberOfViews!: number;
    featuredImage!: string;
    isActive!: boolean;

    getTitle(): string {
        return this.title.translations.HR;
    }

    get localizedTitle(): string {
        return this.title.translations.HR;
    }
}
