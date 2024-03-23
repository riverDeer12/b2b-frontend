import {MenuItem} from 'primeng/api';

export const SideMenuItems: MenuItem[] = [
    {
        label: 'home',
        icon: 'pi pi-fw pi-home',
        routerLink: ['/'], target: '_blank'
    },
    {
        label: 'activities',
        icon: 'pi pi-fw pi-chart-line',
        routerLink: ['/admin/activities']
    },
    {
        label: 'news',
        icon: 'pi pi-fw pi-megaphone',
        routerLink: ['/admin/news']
    },
    {
        label: 'categories',
        icon: 'pi pi-fw pi-bookmark',
        routerLink: ['/admin/categories']
    },
    {
        label: 'entities',
        icon: 'pi pi-fw pi-sitemap',
        items: [
            {
                label: 'companies',
                icon: 'pi pi-fw pi-building',
                routerLink: ['/admin/companies']
            },
            {
                label: 'scientists',
                icon: 'pi pi-fw pi-sun',
                routerLink: ['/admin/scientists']
            },
            {
                label: 'organizations',
                icon: 'pi pi-fw pi-building',
                routerLink: ['/admin/organizations']
            },
        ]
    },
    {
        label: 'subscribers', icon: 'pi pi-fw pi-users', routerLink: ['/admin/subscribers']
    }
]

