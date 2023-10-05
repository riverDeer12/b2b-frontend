import { Component, Input } from '@angular/core';
import {Category} from '../../../../../../categories/core/models/category';

@Component({
  selector: 'scientist-registration-form',
  templateUrl: './scientist-registration-form.component.html',
  styleUrls: ['./scientist-registration-form.component.scss']
})
export class ScientistRegistrationFormComponent {
    @Input() categories!: Category[];

}
