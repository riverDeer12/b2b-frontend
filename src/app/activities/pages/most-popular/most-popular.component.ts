import {Component} from '@angular/core';
import {MostPopular} from '../../core/models/most-popular';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'most-popular',
    templateUrl: './most-popular.component.html',
    styleUrls: ['./most-popular.component.scss']
})
export class MostPopularComponent {
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
