import { Component } from '@angular/core';
import {MostPopular} from "../../../../activities/core/models/most-popular";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'public-most-popular',
  templateUrl: './public-most-popular.component.html',
  styleUrls: ['./public-most-popular.component.scss']
})
export class PublicMostPopularComponent {
    mostPopular!: MostPopular;


    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(){
        this.listenToResolver();
    }

    private listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {
            this.mostPopular = Object.assign(response['mostPopular'], new MostPopular());
        });
    }
}
