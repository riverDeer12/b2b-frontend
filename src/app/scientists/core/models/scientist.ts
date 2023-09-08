import {Equipment} from 'src/app/equipment/core/models/equipment';
import {SpecificKnowledge} from '../../../specific-knowledge/core/models/specific-knowledge';
import {Category} from '../../../categories/core/models/category';
import {LocalizedProperty} from "../../../shared/models/localized-property";

export class Scientist {
  id!: string;
  isActive!: boolean;
  profilePicture!: string;
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
}
