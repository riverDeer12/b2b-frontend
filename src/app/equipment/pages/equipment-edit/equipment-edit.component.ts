import { Component } from '@angular/core';
import {FormType} from '../../../shared/enums/form-type';
import {Category} from '../../core/models/category';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute} from '@angular/router';
import {Equipment} from "../../core/models/equipment";

@Component({
  selector: 'equipment-edit',
  templateUrl: './equipment-edit.component.html',
  styleUrls: ['./equipment-edit.component.scss']
})
export class EquipmentEditComponent {
    returnUrl = "/admin/equipment";

    formType = FormType.Edit;

    equipment!: Equipment;

    constructor(private translateService: TranslateService, private activatedRoute: ActivatedRoute) {
        this.listenToResolver();
    }

    ngOnInit(): void {
    }

    private listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {
            this.equipment = Object.assign(new Equipment(), response["equipment"]);
        });
    }
}
