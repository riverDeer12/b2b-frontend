import {Component, ElementRef, ViewChild} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {LayoutService} from '../../core/services/app.layout.service';
import {AuthService} from '../../../../auth/core/services/auth.service';

@Component({
    selector: 'admin-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService, private authService: AuthService) {
    }

    /**
     * Log out user from
     * application.
     */
    logout = () => this.authService.logOut('auth/admin-login');

}
