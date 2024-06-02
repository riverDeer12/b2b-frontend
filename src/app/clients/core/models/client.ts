export class Client {
    id!: string;
    name!: string;
    apiKey!: string;
    numberOfUsages!: number;
    createdAt!: Date;
    isActive!: boolean;
    canFetchEntities!: boolean;
    canCreateAndUpdateNews!: boolean;
    canUpdateCategoryTags!: boolean;
}
