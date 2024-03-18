import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class LanguageService {

    private croatian: string = 'HR';
    private english: string = 'EN';

    private languages: string [] = [this.croatian, this.english];

    currentLanguage = new Subject<boolean>();

    constructor(private http: HttpClient) {
    }

    /**
     * Set value of
     * selected language.
     *
     */
    setLanguageChange(): void {
        this.currentLanguage.next(true);
    }

    /**
     * Language value
     * change listener.
     */
    getLanguageChange(): Subject<boolean> {
        return this.currentLanguage;
    }

    /**
     * Translate any input text
     * with Google Cloud service function.
     *
     * @param text text value
     * @param sourceLanguage language of text (hr - croatian).
     * @param targetLanguage target language of translation (en - english).
     */
    translate(text: string, sourceLanguage: string, targetLanguage: string) {
        const translateRequest = {
            text: text,
            sourceLanguage: sourceLanguage,
            targetLanguage: targetLanguage
        };

        return this.http.post(environment.apiUrl + '/translations/translate-text', translateRequest);
    }
}
