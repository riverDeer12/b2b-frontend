import {Equipment} from 'src/app/equipment/core/models/equipment';
import {SpecificKnowledge} from '../../../specific-knowledge/core/models/specific-knowledge';
import {Category} from '../../../categories/core/models/category';
import {LocalizedProperty, TranslationsObject} from '../../../shared/models/localized-property';
import {Languages} from '../../../shared/constants/languages';

export class Scientist {
    id!: string;
    isActive!: boolean;
    image!: string;
    username!: string;
    password!: string;
    title!: LocalizedProperty;
    firstname!: string;
    lastname!: string;
    description!: LocalizedProperty;
    email!: string;
    website!: string;
    employmentCollege!: LocalizedProperty;
    functions!: LocalizedProperty;
    projects!: LocalizedProperty;
    googleScholarLink!: string;
    categoryTags!: string;
    numberOfViews!: number;
    createdAt!: Date;
    updatedAt!: Date;
    categories!: Category[];
    newsletterCategories!: Category[];
    equipment!: Equipment[];
    specificKnowledge!: SpecificKnowledge[];

    get currentLanguage(): string {
        const localStorageData = localStorage.getItem('lang') as string;

        if (!Object.values(Languages).includes(localStorageData)) {
            return 'HR';
        } else {
            return localStorageData;
        }
    }

    get localizedEducationTitle(): string {
        return this.title.translations[this.currentLanguage as keyof TranslationsObject];
    }

    get localizedDescription(): string {
        return this.description.translations[this.currentLanguage as keyof TranslationsObject];
    }

    get localizedEmploymentCollege(): string {
        return this.employmentCollege.translations[this.currentLanguage as keyof TranslationsObject];
    }

    get localizedFunctions(): string {
        return this.functions.translations[this.currentLanguage as keyof TranslationsObject];
    }

    get localizedProjects(): string {
        return this.projects.translations[this.currentLanguage as keyof TranslationsObject];
    }

    get fullName(): string {
        return this.firstname + ' ' + this.lastname;
    }

    get imageUrl(): string {
        return this.image ??
            'assets/layout/images/image-default.png'
    }
}
