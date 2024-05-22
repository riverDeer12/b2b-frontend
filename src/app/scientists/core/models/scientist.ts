import {Equipment} from 'src/app/equipment/core/models/equipment';
import {SpecificKnowledge} from '../../../specific-knowledge/core/models/specific-knowledge';
import {Category} from '../../../categories/core/models/category';
import {LocalizedProperty, TranslationsObject} from '../../../shared/models/localized-property';

export class Scientist {
    id!: string;
    isActive!: boolean;
    image!: string;
    password!: string;
    username!: string;
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

    get imageUrl(): string {
        return this.image ??
            'assets/layout/images/image-default.png'
    }

    get localizedEducationTitle(): string {
        return this.title.translations[localStorage.getItem('language') as keyof TranslationsObject];
    }

    get localizedDescription(): string {
        return this.description.translations[localStorage.getItem('language') as keyof TranslationsObject];
    }

    get localizedEmploymentCollege(): string {
        return this.employmentCollege.translations[localStorage.getItem('language') as keyof TranslationsObject];
    }

    get localizedFunctions(): string {
        return this.functions.translations[localStorage.getItem('language') as keyof TranslationsObject];
    }

    get localizedProjects(): string {
        return this.projects.translations[localStorage.getItem('language') as keyof TranslationsObject];
    }

    get fullName(): string {
        return this.firstname + ' ' + this.lastname;
    }
}
