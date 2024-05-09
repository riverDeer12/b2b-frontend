import {OnInit} from '@angular/core';
import {Component} from '@angular/core';
import {LayoutService} from '../../core/services/app.layout.service';
import {MenuItem} from 'primeng/api';
import {AuthService} from "../../../../auth/core/services/auth.service";

@Component({
    selector: 'admin-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model!: MenuItem[];

    constructor(public layoutService: LayoutService,
                private authService: AuthService) {
    }

    ngOnInit() {
        this.model = [
            {
                items: [
                    {
                        label: 'dashboard.default',
                        icon: 'pi pi-fw pi-chart-line',
                        expanded: true,
                        visible: !this.authService.isEditorLogged(),
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
                        visible: !this.authService.isEditorLogged(),
                        routerLink: ['/admin/categories']
                    },
                    {
                        label: 'special-categories.default',
                        icon: 'pi pi-fw pi-star',
                        visible: !this.authService.isEditorLogged(),
                        routerLink: ['/admin/special-categories']
                    },
                    {
                        label: 'companies.default',
                        icon: 'pi pi-fw pi-building',
                        visible: !this.authService.isEditorLogged(),
                        routerLink: ['/admin/companies']
                    },
                    {
                        label: 'scientists.default',
                        icon: 'pi pi-fw pi-sun',
                        visible: !this.authService.isEditorLogged(),
                        routerLink: ['/admin/scientists']
                    },
                    {
                        label: 'organizations.default',
                        icon: 'pi pi-fw pi-building',
                        visible: !this.authService.isEditorLogged(),
                        routerLink: ['/admin/organizations']
                    },
                    {
                        label: 'clients.default',
                        icon: 'pi pi-fw pi-users',
                        visible: !this.authService.isEditorLogged(),
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
                                label: 'newsletters.free-form-newsletters.default',
                                icon: 'pi pi-fw pi-sitemap',
                                routerLinkActiveOptions: {exact: true},
                                routerLink: ['/admin/newsletters/free-form'],
                            }
                        ]
                    },
                    {
                        label: 'onboardings.default',
                        icon: 'pi pi-fw pi-inbox',
                        visible: !this.authService.isEditorLogged(),
                        routerLink: ['/admin/onboardings']
                    },
                ]
            }
        ];
    }
}
