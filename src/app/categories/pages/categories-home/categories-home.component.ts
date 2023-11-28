import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Category} from '../../core/models/category';

@Component({
  selector: 'categories-home',
  templateUrl: './categories-home.component.html',
  styleUrls: ['./categories-home.component.css']
})
export class CategoriesHomeComponent implements OnInit {
    categories: Category[] = [];

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.listenToResolver();
    }

    private listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {
            this.categories = response['categories'].map((x: Category) =>
                Object.assign(new Category(), x)
            );
        });
    }

}
