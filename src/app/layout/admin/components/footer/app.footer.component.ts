import { Component } from '@angular/core';
import { LayoutService } from "../../core/services/app.layout.service";

@Component({
    selector: 'admin-footer',
    templateUrl: './app.footer.component.html'
})
export class AppFooterComponent {
    constructor(public layoutService: LayoutService) { }
}
