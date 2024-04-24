import {Component} from '@angular/core';
import {SpecialCategory} from "../../core/models/special-category";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'special-categories-home',
    templateUrl: './special-categories-home.component.html',
    styleUrls: ['./special-categories-home.component.scss']
})
export class SpecialCategoriesHomeComponent {
    specialCategories!: SpecialCategory[];

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.listenToResolver();
    }

    private listenToResolver(): void {
        this.activatedRoute.data.subscribe((response) => {
            this.specialCategories = response['specialCategories'].map((x: SpecialCategory) =>
                Object.assign(new SpecialCategory(), x)
            );
        });
    }
}
