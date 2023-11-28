import {Component} from '@angular/core';
import {Languages} from '../../constants/languages';
import {TranslateService} from '@ngx-translate/core';
import {Language} from '../../models/language';

@Component({
    selector: 'language-selector',
    templateUrl: './language-selector.component.html',
    styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent {
    languages = Languages;

    selectedLanguage!: string;

    availableLanguages: string[] = Languages.map(x => x.value);

    constructor(private translateService: TranslateService) {
        this.setDefaultLanguage();
    }

    setDefaultLanguage(): void {
        let localStorageData = localStorage.getItem('language') as string;

        if(!localStorageData){
            localStorage.setItem('language', 'HR');
            this.selectedLanguage = 'HR';
        }

        localStorageData = localStorageData.toUpperCase();

        if (!Object.values(this.availableLanguages).includes(localStorageData)) {
            localStorage.setItem('language', 'HR');
            this.selectedLanguage = 'HR';
        } else {
            this.translateService.use(localStorageData);
            this.selectedLanguage = localStorageData;
        }
    }

    languageChanged(languageValue: string): void {
        localStorage.setItem('language', languageValue);
        this.translateService.use(languageValue);
        window.location.reload();
    }

    getTextColor(language: Language): string {
        return language.value == localStorage.getItem('language') as string ?
            '#ffffff' : 'rgb(9, 88, 108)';
    }
}
