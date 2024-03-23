import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FreeFormNewsletter} from "../../core/models/free-form-newsletter";

@Component({
    selector: 'free-form-newsletters-home',
    templateUrl: './free-form-newsletters-home.component.html',
    styleUrls: ['./free-form-newsletters-home.component.scss']
})
export class FreeFormNewslettersHomeComponent {
    newsletters!: FreeFormNewsletter[];

    constructor(private activatedRoute: ActivatedRoute) {
        this.listenToResolver();
    }

    ngOnInit(): void {
    }

    private listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {
            this.newsletters = response['newsletters'].map((x: FreeFormNewsletter) =>
                Object.assign(new FreeFormNewsletter(), x)
            );
        });
    }
}
