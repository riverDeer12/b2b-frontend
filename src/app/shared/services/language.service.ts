import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {

    private croatian: string = 'HR';
    private english: string = 'EN';

    private languages: string [] = [this.croatian, this.english];

    currentLanguage = new Subject<boolean>();

    constructor() {
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
