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

    constructor(private translateService: TranslateService) {
        this.selectedLanguage = 'HR';
        this.translateService.use('hr');
    }

    languageChanged(): void {
        this.translateService.use(this.selectedLanguage.toLowerCase());
    }
}
