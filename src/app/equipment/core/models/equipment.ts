import {Category} from '../../../categories/core/models/category';

export class Equipment {
  id!: string;
  createdAt!: Date;
  updatedAt!: Date;
  image!: string;
  title!: string;
  description!: string;
  numberOfViews!: number;
  categories!: Category[];
  scientistId!: string;
}
