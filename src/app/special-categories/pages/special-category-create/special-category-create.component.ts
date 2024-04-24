import { Component } from '@angular/core';
import {FormType} from "../../../shared/enums/form-type";

@Component({
  selector: 'special-category-create',
  templateUrl: './special-category-create.component.html',
  styleUrls: ['./special-category-create.component.scss']
})
export class SpecialCategoryCreateComponent {
    formType = FormType.Create;
}
