import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {LayoutService} from 'src/app/layout/admin/core/services/app.layout.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html'
})
export class LandingComponent {

    constructor(private translateService: TranslateService,
                public layoutService: LayoutService,
                public router: Router) {
        this.translateService.use('hr');
    }
}
