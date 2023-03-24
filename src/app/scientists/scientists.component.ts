import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'scientists',
  templateUrl: './scientists.component.html',
  styleUrls: ['./scientists.component.scss']
})
export class ScientistsComponent {
    constructor(private translateService: TranslateService) {
        this.translateService.use('hr');
    }
}
