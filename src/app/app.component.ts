import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import {LanguageService} from './shared/services/language.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private primengConfig: PrimeNGConfig, private languageService: LanguageService) {
    }

    ngOnInit() {
        this.primengConfig.ripple = true;


        if(!localStorage.getItem('language')){
            localStorage.setItem('language', 'HR');
        }
    }
}
