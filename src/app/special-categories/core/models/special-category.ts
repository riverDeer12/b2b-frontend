
export class SpecialCategory {
    id!: string;
    isActive!: boolean;
    name!: string;
    assignedCompanies!: AssignedEntity[];
    assignedScientists!: AssignedEntity[];
    assignedPublicOrganizations!: AssignedEntity[];
}

export class AssignedEntity {
    id!: string;
    name!:string;
}
