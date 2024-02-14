import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";

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
}
