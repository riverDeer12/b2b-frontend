import {OnInit} from '@angular/core';
import {Component} from '@angular/core';
import {LayoutService} from '../../core/services/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) {
    }

    ngOnInit() {
        this.model = [
            {
                items: [
                    {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/'], target: '_blank'},
                    {label: 'Activities', icon: 'pi pi-fw pi-chart-line', routerLink: ['/admin/activities']},
                    {label: 'News', icon: 'pi pi-fw pi-megaphone', routerLink: ['/admin/news']},
                    {label: 'Categories', icon: 'pi pi-fw pi-bookmark', routerLink: ['/admin/categories']},
                    {label: 'Companies', icon: 'pi pi-fw pi-building', routerLink: ['/admin/companies']},
                    {label: 'Scientists', icon: 'pi pi-fw pi-sun', routerLink: ['/admin/scientists']},
                    {label: 'Users', icon: 'pi pi-fw pi-users', routerLink: ['/admin/users']},
                    {label: 'Organizations', icon: 'pi pi-fw pi-building', routerLink: ['/admin/organizations']}
                ]
            }
        ];
    }
}
