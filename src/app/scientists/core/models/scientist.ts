import {Equipment} from 'src/app/equipment/core/models/equipment';
import {SpecificKnowledge} from '../../../specific-knowledge/core/models/specific-knowledge';
import {Category} from '../../../categories/core/models/category';

export class Scientist {
  id!: string;
  isActive!: boolean;
  profilePicture!: string;
  username!: string;
  password!: string;
  title!: string;
  firstname!: string;
  lastname!: string;
  description!: string;
  email!: string;
  website!: string;
  employmentCollege!: string;
  functions!: string;
  projects!: string;
  googleScholarLink!: string;
  categoryTags!: string;
  numberOfViews!: number;
  createdAt!: Date;
  updatedAt!: Date;
  categories!: Category[];
  newsletterCategories!: Category[];
  equipment!: Equipment[];
  specificKnowledge!: SpecificKnowledge[];
}
