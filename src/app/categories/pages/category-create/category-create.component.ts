import {Component} from '@angular/core';
import {FormType} from '../../../shared/enums/form-type';

@Component({
    selector: 'category-create',
    templateUrl: './category-create.component.html',
    styleUrls: ['./category-create.component.scss']
})
export class CategoryCreateComponent {
    returnUrl = "/admin/categories";

    public get formType(): typeof FormType {
        return FormType;
    }
}
