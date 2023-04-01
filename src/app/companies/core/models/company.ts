import {JobOffer} from '../../../job-offers/core/models/job-offer';
import {Category} from '../../../categories/core/models/category';
import {ResearchProblem} from '../../../research-problems/core/models/research-problem';

export class Company {
  id!: string;
  isActive!: boolean;
  logo!: string;
  username!: string;
  password!: string;
  name!: string;
  description!: string;
  address!: string;
  email!: string;
  taxCode!: string;
  website!: string;
  projects!: string;
  categoryTags!: string;
  numberOfEmployees!: number;
  numberOfViews!: number;
  createdAt!: Date;
  updatedAt!: Date;
  categories!: Category[];
  newsletterCategories!: Category[];
  researchProblems!: ResearchProblem[];
  jobOffers!: JobOffer[];
}
