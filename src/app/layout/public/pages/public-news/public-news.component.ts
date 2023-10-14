import { Component } from '@angular/core';
import {EntityType} from '../../../../auth/core/enums/entity-type';
import {Category} from '../../../../categories/core/models/category';
import {ActivatedRoute} from '@angular/router';
import {News} from '../../../../news/core/models/news';

@Component({
  selector: 'public-news',
  templateUrl: './public-news.component.html',
  styleUrls: ['./public-news.component.scss']
})
export class PublicNewsComponent {
    entityType = EntityType.News;
    news!: News[];
    categories!: Category[];

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.listenToResolver();
    }

    listenToResolver(): void {
        this.activatedRoute.data.subscribe((response) => {

            this.news = response['entities'].map((x: any) =>
                Object.assign(new News(), x)
            );

            this.categories = response['categories'].map((x: Category) =>
                Object.assign(new Category(), x)
            );
        });
    }
}
