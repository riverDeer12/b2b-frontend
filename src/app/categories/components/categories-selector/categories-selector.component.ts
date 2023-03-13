import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {CategoryService} from '../../core/services/category.service';
import {Category} from '../../core/models/category';

@Component({
    selector: 'categories-selector',
    templateUrl: './categories-selector.component.html',
    styleUrls: ['./categories-selector.component.scss']
})
export class CategoriesSelectorComponent {
    @Input() formName!: FormGroup;
    @Input() controlName!: string;
    @Input() label!: string;

    data: Category[] = [];

    constructor(private categoryService: CategoryService) {
    }

    ngOnInit(): void {
        this.loadCategories();
    }

    loadCategories(): void {
        this.categoryService.getCategories().subscribe((response: Category[]) => {
            this.data = response.map((x: Category) =>
                Object.assign(new Category(), x)
            );
        })
    }
}
