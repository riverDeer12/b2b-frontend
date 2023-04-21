import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Category} from '../../core/models/category';

@Component({
    selector: 'categories-selector',
    templateUrl: './categories-selector.component.html',
    styleUrls: ['./categories-selector.component.scss']
})
export class CategoriesSelectorComponent {
    @Input() form!: FormGroup;
    @Input() controlName!: string;
    @Input() label!: string;
    @Input() data!: Category[];

    ngOnInit(){
    }
}
