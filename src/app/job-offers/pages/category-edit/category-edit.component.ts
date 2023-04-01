import { Component } from '@angular/core';
import {FormType} from '../../../shared/enums/form-type';
import {Category} from '../../core/models/category';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'equipment-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent {
    returnUrl = "/admin/categories";

    formType = FormType.Edit;

    category!: Category;

    constructor(private translateService: TranslateService, private activatedRoute: ActivatedRoute) {
        this.listenToResolver();
    }

    ngOnInit(): void {
    }

    private listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {
            this.category = Object.assign(new Category(), response["category"]);
        });
    }
}
