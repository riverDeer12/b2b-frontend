import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {

    private croatian: string = 'HR';
    private english: string = 'EN';

    private languages: string [] = [this.croatian, this.english];

    constructor() {
    }

    public get currentLanguage(): string {
        const localStorageData = localStorage.getItem('lang') as string;

        if (!Object.values(this.languages).includes(localStorageData)) {
            return this.croatian;
        } else {
            return localStorageData;
        }
    }
}
