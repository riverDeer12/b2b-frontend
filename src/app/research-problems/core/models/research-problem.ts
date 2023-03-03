import {Category} from '../../../categories/core/models/category';

export class ResearchProblem {
  id!: string;
  image!: string;
  createdAt!: Date;
  updatedAt!: Date;
  title!: string;
  description!: string;
  numberOfViews!: number;
  academicCommunityContributionPossibility!: string;
  publicOrganizationId!: string;
  companyId!: string;
  categories!: Category[];
}
