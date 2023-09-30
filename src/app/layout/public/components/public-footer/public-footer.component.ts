import {Component} from '@angular/core';
import {LayoutService} from "../../../admin/core/services/app.layout.service";
import {Router} from "@angular/router";

@Component({
    selector: 'public-footer',
    templateUrl: './public-footer.component.html',
    styleUrls: ['./public-footer.component.scss']
})
export class PublicFooterComponent {
    currentYear = (new Date()).getFullYear();

    constructor(public layoutService: LayoutService,
                public router: Router,) {
    }
}
