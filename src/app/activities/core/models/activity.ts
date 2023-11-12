import {ActivityItem} from './activity-item';

export class Activity {
  createdCompanies!: ActivityItem[];
  createdPublicOrganizations!: ActivityItem[];
  createdScientists!: ActivityItem[];
  companiesWithCreatedResearchProblems!: ActivityItem[];
  companiesWithCreatedJobOffers!: ActivityItem[];
  publicOrganizationsWithCreatedResearchProblems!: ActivityItem[];
  scientistsWithCreatedEquipment!: ActivityItem[];
  scientistsWithCreatedSpecificKnowledge!: ActivityItem[];

  updatedCompanies!: ActivityItem[];
  updatedPublicOrganizations!: ActivityItem[];
  updatedScientists!: ActivityItem[];
  companiesWithUpdatedResearchProblems!: ActivityItem[];
  companiesWithUpdatedJobOffers!: ActivityItem[];
  publicOrganizationsWithUpdatedResearchProblems!: ActivityItem[];
  scientistsWithUpdatedEquipment!: ActivityItem[];
  scientistsWithUpdatedSpecificKnowledge!: ActivityItem[];
}

