import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'research-problems',
    templateUrl: './research-problems.component.html',
    styleUrls: ['./research-problems.component.scss']
})
export class ResearchProblemsComponent {
    constructor(private translateService: TranslateService) {
        this.translateService.use('hr');
    }

    ngOnInit() {
    }
}
