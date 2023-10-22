import {Category} from '../../../categories/core/models/category';
import {ResearchProblem} from '../../../research-problems/core/models/research-problem';
import {LocalizedProperty} from '../../../shared/models/localized-property';

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
}
