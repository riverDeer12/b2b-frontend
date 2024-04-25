import { Component } from '@angular/core';
import {SpecialCategory} from "../../core/models/special-category";
import {ActivatedRoute} from "@angular/router";
import {FormType} from "../../../shared/enums/form-type";

@Component({
  selector: 'special-category-edit',
  templateUrl: './special-category-edit.component.html',
  styleUrls: ['./special-category-edit.component.scss']
})
export class SpecialCategoryEditComponent {
    specialCategory!: SpecialCategory;
    formType = FormType.Edit;
    returnUrl = '/admin/special-categories'

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.listenToResolver();
    }

    private listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {
            this.specialCategory = Object.assign(response['specialCategory'], new SpecialCategory());
        });
    }
}
