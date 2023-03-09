import {OnInit} from '@angular/core';
import {Component} from '@angular/core';
import {LayoutService} from '../../core/services/app.layout.service';
import {MenuItem} from 'primeng/api';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: MenuItem[] = [];

    constructor(public layoutService: LayoutService) {
    }

    ngOnInit() {
        this.model = [
            {
                items: [
                    {label: 'home', icon: 'pi pi-fw pi-home', routerLink: ['/'], target: '_blank'},
                    {label: 'activities', icon: 'pi pi-fw pi-chart-line', routerLink: ['/admin/activities']},
                    {label: 'news', icon: 'pi pi-fw pi-megaphone', routerLink: ['/admin/news']},
                    {label: 'categories', icon: 'pi pi-fw pi-bookmark', routerLink: ['/admin/categories']},
                    {label: 'companies', icon: 'pi pi-fw pi-building', routerLink: ['/admin/companies']},
                    {label: 'scientists', icon: 'pi pi-fw pi-sun', routerLink: ['/admin/scientists']},
                    {label: 'users', icon: 'pi pi-fw pi-users', routerLink: ['/admin/users']},
                    {label: 'organizations', icon: 'pi pi-fw pi-building', routerLink: ['/admin/organizations']}
                ]
            }
        ];
    }
}
