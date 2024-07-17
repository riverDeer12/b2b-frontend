import {Component} from '@angular/core';
import {LayoutService} from '../admin/core/services/app.layout.service';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import {TranslateService} from '@ngx-translate/core';
import {PublicMenuItems} from './core/constants/public-menu-items';
import {Languages} from '../../shared/constants/languages';

@Component({
    selector: 'app-public-layout',
    templateUrl: './public-layout.component.html',
    styleUrls: ['./public-layout.component.css']
})
export class PublicLayoutComponent {

    title!: string;

    menuItems!: MenuItem[];

    availableLanguages = Languages;

    selectedLanguage!: string;

    constructor(public layoutService: LayoutService,
                private translateService: TranslateService,
                public router: Router) {
        this.translateService.onLangChange.subscribe((response) => {
            this.menuItems = [];
            this.initMenuItems();
        })
    }

    ngOnInit(): void {
    }

    initMenuItems(): void {
        PublicMenuItems.forEach((publicMenuItem: MenuItem) => {

            this.translateService.get(publicMenuItem.label as string).subscribe((resource: string) => {

                    publicMenuItem.label = resource;

                    if (!publicMenuItem.items?.length) {
                        this.menuItems.push(publicMenuItem);
                        return;
                    }

                    publicMenuItem.items.forEach((childMenuItem: MenuItem) => {
                        this.translateService.get(childMenuItem.label as string).subscribe((resource: string) => {
                            childMenuItem.label = resource;
                        });
                    });

                    this.menuItems.push(publicMenuItem);
                }
            );
        });
    }
}
