import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {SpecialCategory} from "../../core/models/special-category";

@Component({
  selector: 'special-categories-selector',
  templateUrl: './special-categories-selector.component.html',
  styleUrls: ['./special-categories-selector.component.scss']
})
export class SpecialCategoriesSelectorComponent {
    @Input() form!: FormGroup;
    @Input() data!: SpecialCategory[];
    @Input() label!: string;
    @Input() controlName!: string;

    constructor() {
    }
}
