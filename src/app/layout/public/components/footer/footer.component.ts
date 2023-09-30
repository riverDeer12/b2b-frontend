import {Component} from '@angular/core';
import {LayoutService} from "../../../admin/core/services/app.layout.service";
import {Router} from "@angular/router";

@Component({
    selector: 'footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

    constructor(public layoutService: LayoutService,
                public router: Router,) {
    }
}
