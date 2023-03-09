import {Component, ElementRef} from '@angular/core';
import {LayoutService} from '../../core/services/app.layout.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './app.sidebar.component.html'
})
export class AppSidebarComponent {
    constructor(public layoutService: LayoutService, public el: ElementRef, private translateService: TranslateService) {

    }

    ngOnInit() {
    }
}

