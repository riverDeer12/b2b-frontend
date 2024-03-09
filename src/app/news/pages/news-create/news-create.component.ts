import { Component } from '@angular/core';
import {FormType} from "../../../shared/enums/form-type";

@Component({
  selector: 'news-create',
  templateUrl: './news-create.component.html',
  styleUrls: ['./news-create.component.scss']
})
export class NewsCreateComponent {
    returnUrl = '/admin/news';

    formType = FormType.Create;
}
