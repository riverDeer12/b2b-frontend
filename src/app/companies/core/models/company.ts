import {JobOffer} from '../../../job-offers/core/models/job-offer';
import {Category} from '../../../categories/core/models/category';
import {ResearchProblem} from '../../../research-problems/core/models/research-problem';
import {LocalizedProperty, TranslationsObject} from '../../../shared/models/localized-property';
import {Product} from '../../../products/core/models/product';
import {EntityDocument} from "../../../custom-controls/core/model/entity-document";

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
    products!: Product[];
    documents!: EntityDocument[];

    get imageUrl(): string {
        return this.image ??
            'assets/layout/images/image-default.png'
    }

    get localizedDescription(): string {
        return this.description.translations[localStorage.getItem('language') as keyof TranslationsObject];
    }
}
