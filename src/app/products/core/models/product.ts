import {LocalizedProperty} from '../../../shared/models/localized-property';
import {Category} from '../../../categories/core/models/category';

export class Product {
    id!: string;
    title!: LocalizedProperty;
    description!: LocalizedProperty;
    categories!: Category[];
    companyId!: string;
    isActive!: boolean;
}
