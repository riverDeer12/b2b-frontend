import {Organization} from '../../../organizations/core/models/organization';
import {Scientist} from '../../../scientists/core/models/scientist';
import {Company} from '../../../companies/core/models/company';

export class ActiveEntities {
    scientists!: Scientist[];
    companies!: Company[];
    organizations!: Organization[];
}
