import {JobOffer} from '../../../job-offers/core/models/job-offer';
import {Category} from '../../../categories/core/models/category';
import {ResearchProblem} from '../../../research-problems/core/models/research-problem';
import {LocalizedProperty} from '../../../shared/models/localized-property';

export class Company {
    id!: string;
    isActive!: boolean;
    image!: string;
    username!: string;
    password!: string;
    name!: string;
    description!: LocalizedProperty;
    address!: string;
    email!: string;
    taxCode!: string;
    website!: string;
    projects!: LocalizedProperty;
    categoryTags!: string;
    numberOfEmployees!: number;
    numberOfViews!: number;
    createdAt!: Date;
    updatedAt!: Date;
    categories!: Category[];
    newsletterCategories!: Category[];
    researchProblems!: ResearchProblem[];
    jobOffers!: JobOffer[];

    get imageUrl(): string {
        return this.image ??
            'assets/layout/images/image-default.png'
    }

    getDescription(): string {
        return this.description.translations.HR;
    }
}
