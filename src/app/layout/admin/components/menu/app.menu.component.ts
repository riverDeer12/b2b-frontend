import {OnInit} from '@angular/core';
import {Component} from '@angular/core';
import {LayoutService} from '../../core/services/app.layout.service';
import {MenuItem} from 'primeng/api';

@Component({
    selector: 'admin-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model!: MenuItem[];

    constructor(public layoutService: LayoutService) {
    }

    ngOnInit() {
        this.model = [
            {
                items: [
                    {
                        label: 'dashboard.default',
                        icon: 'pi pi-fw pi-chart-line',
                        expanded: true,
                        items:[
                            {
                                label: 'activities.last-activities',
                                icon: 'pi pi-fw pi-chart-line',
                                routerLinkActiveOptions: {exact: true},
                                routerLink: ['/admin/activities'],
                            },
                            {
                                label: 'activities.most-popular-entities',
                                icon: 'pi pi-fw pi-chart-line',
                                routerLinkActiveOptions: {exact: true},
                                routerLink: ['/admin/activities/most-popular'],
                            }
                        ]
                    },
                    {
                        label: 'news.default',
                        icon: 'pi pi-fw pi-megaphone',
                        routerLink: ['/admin/news']
                    },
                    {
                        label: 'categories.default',
                        icon: 'pi pi-fw pi-bookmark',
                        routerLink: ['/admin/categories']
                    },
                    {
                        label: 'companies.default',
                        icon: 'pi pi-fw pi-building',
                        routerLink: ['/admin/companies']
                    },
                    {
                        label: 'scientists.default',
                        icon: 'pi pi-fw pi-sun',
                        routerLink: ['/admin/scientists']
                    },
                    {
                        label: 'organizations.default',
                        icon: 'pi pi-fw pi-building',
                        routerLink: ['/admin/organizations']
                    },
                    {
                        label: 'clients.default',
                        icon: 'pi pi-fw pi-users',
                        routerLink: ['/admin/clients']
                    },
                    {
                        label: 'newsletters.default',
                        icon: 'pi pi-fw pi-sitemap',
                        expanded: true,
                        items:[
                            {
                                label: 'newsletters.general',
                                icon: 'pi pi-fw pi-sitemap',
                                routerLinkActiveOptions: {exact: true},
                                routerLink: ['/admin/newsletters'],
                            },
                            {
                                label: 'newsletters.free-form-newsletters',
                                icon: 'pi pi-fw pi-sitemap',
                                routerLinkActiveOptions: {exact: true},
                                routerLink: ['/admin/newsletters/free-form-newsletters'],
                            }
                        ]
                    }
                ]
            }
        ];
    }
}
