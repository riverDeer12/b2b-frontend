import {MenuItem} from 'primeng/api';
import jwtDecode from 'jwt-decode';
import {AuthToken} from '../../../../auth/core/models/auth-token';

export const PublicMenuItems: MenuItem[] = [
    {
        label: 'about-us',
        routerLink: '/about-us',
        routerLinkActiveOptions: {exact: true},
        expanded: false
    },
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
        items: [
            {
                label: 'organizations.view-all-organizations',
                routerLink: '/public-organizations',
                routerLinkActiveOptions: {exact: true},
                expanded: false
            },
            {
                label: 'organizations.research-problems',
                routerLink: '/public-organizations/research-problems',
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
    },
    {
        label: 'activities.default',
        routerLink: '/most-popular',
        routerLinkActiveOptions: {exact: true},
        expanded: false
    },
    {
        label: 'auth.login',
        routerLink: '/login',
        routerLinkActiveOptions: {exact: true},
        expanded: false,
        visible: !userLogged()

    },
    {
        label: 'auth.registration',
        routerLink: '/registration',
        routerLinkActiveOptions: {exact: true},
        expanded: false,
        visible: !userLogged()
    },
    {
        label: 'auth.my-profile',
        routerLink: '/my-profile',
        routerLinkActiveOptions: {exact: true},
        expanded: false,
        visible: userLogged()
    },
    {
        label: 'auth.logout',
        routerLink: '',
        routerLinkActiveOptions: {exact: true},
        expanded: false,
        visible: userLogged(),
        command: () => {
            logOut();
        }
    }
];

function userLogged() {

    const tokenStorageValue = localStorage.getItem('token');

    if (tokenStorageValue === null) {
        return false;
    }

    const decodedToken = jwtDecode(tokenStorageValue) as AuthToken;

    const now = Date.now().valueOf() / 1000

    if (decodedToken.exp < now) {
        return false;
    }

    return decodedToken.role === 'Scientist' ||
        decodedToken.role === 'PublicOrganization' ||
        decodedToken.role === 'Company';
}

function logOut() {
    localStorage.removeItem('token');
    window.location.href = '';
}

