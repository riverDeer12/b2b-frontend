import {Component} from '@angular/core';
import {FormType} from '../../../shared/enums/form-type';

@Component({
    selector: 'equipment-create',
    templateUrl: './equipment-create.component.html',
    styleUrls: ['./equipment-create.component.scss']
})
export class EquipmentCreateComponent {
    returnUrl = '/admin/equipment';

    formType = FormType.Create;
}
