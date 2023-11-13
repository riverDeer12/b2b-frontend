import {LocalizedProperty, TranslationsObject} from '../../../shared/models/localized-property';

export class ActivityItem {
    id!: string;
    name!: string;
    numberOfViews!: number;
    title!: LocalizedProperty;

    get activityLabel(): string {
        if (!this.title) {
            return this.name;
        } else {
            return this.title.translations[localStorage.getItem('language') as keyof TranslationsObject];
        }
    }
}
