import {Routes} from "@angular/router";
import {OnboardingHomeComponent} from "./pages/onboarding-home/onboarding-home.component";
import {OnboardingDetailsComponent} from "./components/onboarding-details/onboarding-details.component";
import {OnboardingResolver} from "./core/resolvers/onboarding.resolver";
import {OnboardingsResolver} from "./core/resolvers/onboardings.resolver";

export const OnboardingRoutes: Routes = [
    {
        path: '',
        component: OnboardingHomeComponent,
        resolve: {
            organizations: OnboardingsResolver
        }
    },
    {
        path: 'details/:id',
        component: OnboardingDetailsComponent,
        resolve: {
            onboarding: OnboardingResolver
        }
    }
]
