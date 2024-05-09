import {Routes} from "@angular/router";
import {OnboardingHomeComponent} from "./pages/onboarding-home/onboarding-home.component";
import {OnboardingResolver} from "./core/resolvers/onboarding.resolver";
import {OnboardingsResolver} from "./core/resolvers/onboardings.resolver";
import {OnboardingInfoComponent} from "./pages/onboarding-info/onboarding-info.component";

export const OnboardingRoutes: Routes = [
    {
        path: '',
        component: OnboardingHomeComponent,
        resolve: {
            onboardings: OnboardingsResolver
        }
    },
    {
        path: 'info/:batchId/items/:id',
        component: OnboardingInfoComponent,
        resolve: {
            onboarding: OnboardingResolver
        }
    }
]
