import {Onboarding} from "./onboarding";

export class OnboardingBatch {
    id!: string;
    createdAt!: Date;
    type!: string;
    items!: Onboarding[];
}
