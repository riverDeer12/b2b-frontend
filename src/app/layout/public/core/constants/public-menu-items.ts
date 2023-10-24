import {MenuItem} from 'primeng/api';

export const PublicMenuItems: MenuItem[] = [
    {
        label: 'news.default',
        routerLink: '/news',
        routerLinkActiveOptions: {exact: true},
        expanded: false
    },
    {
        label: 'main-search',
        routerLink: '/main-search',
        routerLinkActiveOptions: {exact: true},
        expanded: false
    },

    {
        label: 'companies.default',
        routerLinkActiveOptions: {exact: true},
        expanded: true,
        items: [
            {
                label: 'companies.view-all-companies',
                routerLink: '/companies',
                routerLinkActiveOptions: {exact: true},
                expanded: false
            },
            {
                label: 'job-offers.default',
                routerLink: '/companies/job-offers',
                routerLinkActiveOptions: {exact: true},
                expanded: false
            },
            {
                label: 'companies.research-problems',
                routerLink: '/companies/research-problems',
                routerLinkActiveOptions: {exact: true},
                expanded: false
            }
        ]
    },
    {
        label: 'organizations.default',
        routerLinkActiveOptions: {exact: true},
        expanded: false,
        items:[
            {
                label: 'organizations.view-all-organizations',
                routerLink: '/organizations',
                routerLinkActiveOptions: {exact: true},
                expanded: false
            }          ,
            {
                label: 'organizations.research-problems',
                routerLink: '/organizations/research-problems',
                routerLinkActiveOptions: {exact: true},
                expanded: false
            }
        ]
    },
    {
        label: 'scientists.default',
        routerLinkActiveOptions: {exact: true},
        expanded: false,
        items: [
            {
                label: 'scientists.view-all-scientists',
                routerLink: '/scientists',
                routerLinkActiveOptions: {exact: true},
                expanded: false
            },
            {
                label: 'equipment.default',
                routerLink: '/scientists/equipment',
                routerLinkActiveOptions: {exact: true},
                expanded: false
            },
            {
                label: 'specific-knowledge.default',
                routerLink: '/scientists/specific-knowledge',
                routerLinkActiveOptions: {exact: true},
                expanded: false
            }
        ]
    }
];
