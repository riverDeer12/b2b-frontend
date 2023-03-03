import {Category} from '../../../categories/core/models/category';
import {ResearchProblem} from '../../../research-problems/core/models/research-problem';

export class Organization {
  id!: string;
  isActive!: boolean;
  logo!: string;
  username!: string;
  password!: string;
  name!: string;
  description!: string;
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
