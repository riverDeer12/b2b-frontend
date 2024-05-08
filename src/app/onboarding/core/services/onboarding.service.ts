import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Onboarding} from "../models/onboarding";

@Injectable({
    providedIn: 'root'
})
export class OnboardingService {
    endpointUrl = environment.apiUrl + '/onboarding-batches/';

    constructor(private http: HttpClient) {
    }

    getOnboardingBatches = () => this.http.get<Onboarding[]>(this.endpointUrl);

    getOnboardingBatchDetails = (id: string) => this.http.get<Onboarding>(this.endpointUrl + id);
}
