import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Onboarding} from "../models/onboarding";
import {OnboardingBatch} from "../models/onboarding-batch";

@Injectable({
    providedIn: 'root'
})
export class OnboardingService {

    endpointUrl = environment.apiUrl + '/onboarding-batches/';

    constructor(private http: HttpClient) {
    }

    getOnboardingBatches = () => this.http.get<OnboardingBatch[]>(this.endpointUrl);

    getOnboardingBatchDetails = (batchId: string, id: string) =>
        this.http.get<OnboardingBatch>(this.endpointUrl + batchId + '/items/' + id);

    deleteOnboarding = (id: string) => this.http.delete(this.endpointUrl + id);
}
