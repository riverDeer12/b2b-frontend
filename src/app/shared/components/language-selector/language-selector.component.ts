import {Component} from '@angular/core';
import {Languages} from '../../constants/languages';
import {TranslateService} from '@ngx-translate/core';

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
        const localStorageData = localStorage.getItem('language') as string;

        if (!Object.values(this.availableLanguages).includes(localStorageData)) {
            localStorage.setItem('language', 'HR');
            this.selectedLanguage = 'HR';
        } else {
            this.translateService.use(localStorageData);
            this.selectedLanguage = localStorageData;
        }
    }

    languageChanged(): void {
        localStorage.setItem('language', this.selectedLanguage);
        this.translateService.use(this.selectedLanguage);
    }
}
