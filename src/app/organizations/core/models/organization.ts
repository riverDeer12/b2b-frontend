import {Category} from '../../../categories/core/models/category';
import {ResearchProblem} from '../../../research-problems/core/models/research-problem';
import {LocalizedProperty, TranslationsObject} from '../../../shared/models/localized-property';

export class Organization {
    id!: string;
    isActive!: boolean;
    image!: string;
    username!: string;
    password!: string;
    name!: string;
    description!: LocalizedProperty;
    address!: string;
    website!: string;
    email!: string;
    categoryTags!: string;
    numberOfViews!: number;
    createdAt!: Date;
    updatedAt!: Date;
    categories!: Category[];
    newsletterCategories!: Category[];
    researchProblems!: ResearchProblem[];

    get localizedDescription(): string {
        return this.description.translations[localStorage.getItem('language') as keyof TranslationsObject];
    }

    get imageUrl(): string {
        return this.image ??
            'assets/layout/images/image-default.png'
    }
}
