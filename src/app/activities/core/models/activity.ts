import {Company} from '../../../companies/core/models/company';
import {Scientist} from '../../../scientists/core/models/scientist';
import {Organization} from '../../../organizations/core/models/organization';

export class Activity {
  createdCompanies!: Company[];
  createdPublicOrganizations!: Organization[];
  createdScientists!: Scientist[];
  companiesWithCreatedResearchProblems!: Company[];
  companiesWithCreatedJobOffers!: Company[];
  publicOrganizationsWithCreatedResearchProblems!: Organization[];
  scientistsWithCreatedEquipment!: Scientist[];
  scientistsWithCreatedSpecificKnowledge!: Scientist[];

  updatedCompanies!: Company[];
  updatedPublicOrganizations!: Organization[];
  updatedScientists!: Scientist[];
  companiesWithUpdatedResearchProblems!: Company[];
  companiesWithUpdatedJobOffers!: Company[];
  publicOrganizationsWithUpdatedResearchProblems!: Organization[];
  scientistsWithUpdatedEquipment!: Scientist[];
  scientistsWithUpdatedSpecificKnowledge!: Scientist[];
}

