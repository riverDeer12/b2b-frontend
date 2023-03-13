import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute} from '@angular/router';
import {News} from '../../../news/core/models/news';
import {Category} from '../../core/models/category';

@Component({
  selector: 'categories-home',
  templateUrl: './categories-home.component.html',
  styleUrls: ['./categories-home.component.css']
})
export class CategoriesHomeComponent implements OnInit {
    categories: Category[] = [];

    constructor(private translateService: TranslateService, private activatedRoute: ActivatedRoute) {
        this.listenToResolver();
    }

    ngOnInit(): void {
        this.translateService.use('hr')
    }

    private listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {
            this.categories = response['categories'].map((x: News) =>
                Object.assign(new News(), x)
            );
        });
    }

}
