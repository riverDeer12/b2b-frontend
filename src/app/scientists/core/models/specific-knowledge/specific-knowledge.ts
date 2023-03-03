import {Category} from '../../../../categories/core/models/category';

export class SpecificKnowledge {
  id!: string;
  image!: string;
  createdAt!: Date;
  updatedAt!: Date;
  description!: string;
  numberOfViews!: number;
  categories!: Category[];
  scientistId!: string;
  title!: string;
}
