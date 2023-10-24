import {Component, OnInit} from '@angular/core';
import {LayoutService} from '../admin/core/services/app.layout.service';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import {TranslateService} from '@ngx-translate/core';
import {PublicMenuItems} from './core/constants/public-menu-items';

@Component({
    selector: 'app-public-layout',
    templateUrl: './public-layout.component.html',
    styleUrls: ['./public-layout.component.css']
})
export class PublicLayoutComponent {
    title!: string;

    menuItems: MenuItem[] = PublicMenuItems;


    constructor(public layoutService: LayoutService,
                private translateService: TranslateService,
                public router: Router) {
        this.initMenuItems();
    }

    initMenuItems(): void {
        this.menuItems.forEach((menuItem: MenuItem) => {
            this.translateService.get(menuItem.label as string).subscribe((resource: string) => {
                    menuItem.label = resource;


                    if (!menuItem.items?.length) {
                        return;
                    }

                    menuItem.items.forEach((childMenuItem: MenuItem) => {
                        this.translateService.get(childMenuItem.label as string).subscribe((resource: string) => {
                            childMenuItem.label = resource;
                        });
                    });
                }
            );
        });
    }
}
