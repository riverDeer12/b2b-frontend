import {Category} from '../../../categories/core/models/category';

export class JobOffer {
    id!: string;
    image!: string;
    createdAt!: Date;
    updatedAt!: Date;
    name!: string;
    description!: string;
    location!: string;
    deadline!: Date;
    experience!: string;
    education!: string;
    specialConditions!: string;
    duration!: string;
    applyMethod!: string;
    additional!: string;
    categories!: Category[];
    companyId!: string;
    numberOfViews!: number;
}
