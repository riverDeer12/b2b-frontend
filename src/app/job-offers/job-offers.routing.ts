import {Routes} from '@angular/router';
import {JobOfferEditComponent} from "./pages/job-offer-edit/job-offer-edit.component";
import {JobOfferResolver} from "./core/resolvers/job-offer.resolver";
import {JobOfferCreateComponent} from "./pages/job-offer-create/job-offer-create.component";
import {JobOffersResolver} from "./core/resolvers/job-offers.resolver";
import {JobOffersHomeComponent} from "./pages/job-offers-home/job-offers-home.component";

export const JobOffersRoutes: Routes = [
    {
        path: '',
        component: JobOffersHomeComponent,
        resolve: {
            jobOffers: JobOffersResolver
        }
    },
    {
        path: 'create',
        component: JobOfferCreateComponent
    },
    {
        path: 'edit/:company-id/:id',
        component: JobOfferEditComponent,
        resolve: {
            jobOffer: JobOfferResolver
        }
    }
]
