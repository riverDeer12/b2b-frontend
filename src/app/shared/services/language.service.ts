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
}
