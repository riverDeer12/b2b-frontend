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
    // {
    //     label: 'subentities',
    //     icon: 'pi pi-fw pi-sitemap',
    //     items: [
    //         {
    //             label: 'research-problems',
    //             icon: 'pi pi-fw pi-search',
    //             routerLink: ['/admin/research-problems']
    //         },
    //         {
    //             label: 'specific-knowledge',
    //             icon: 'pi pi-fw pi-bolt',
    //             routerLink: ['/admin/specific-knowledge']
    //         },
    //         {
    //             label: 'job-offers',
    //             icon: 'pi pi-fw pi-briefcase',
    //             routerLink: ['/admin/job-offers']
    //         },
    //         {
    //             label: 'equipment',
    //             icon: 'pi pi-fw pi-tablet',
    //             routerLink: ['/admin/equipment']
    //         },
    //     ]
    // },
    {
        label: 'subscribers', icon: 'pi pi-fw pi-users', routerLink: ['/admin/subscribers']
    }
]

