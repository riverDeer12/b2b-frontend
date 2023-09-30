import {Component, OnInit} from '@angular/core';
import {LayoutService} from "../admin/core/services/app.layout.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-public-layout',
    templateUrl: './public-layout.component.html',
    styleUrls: ['./public-layout.component.css']
})
export class PublicLayoutComponent implements OnInit {

    constructor(public layoutService: LayoutService,
                public router: Router) {
    }

    ngOnInit(): void {
    }

}
