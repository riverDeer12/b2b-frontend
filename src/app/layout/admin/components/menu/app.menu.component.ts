import {OnInit} from '@angular/core';
import {Component} from '@angular/core';
import {LayoutService} from '../../core/services/app.layout.service';
import {MenuItem} from 'primeng/api';
import {SideMenuItems} from '../../core/constants/side-menu-items';

@Component({
    selector: 'admin-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model!: MenuItem[];

    isMenuLoading!: boolean;

    constructor(public layoutService: LayoutService) {
        this.isMenuLoading = true;
    }

    ngOnInit() {
        this.model = [
            {
                items: SideMenuItems
            }
        ];
    }
}
