import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'specific-knowledge',
  templateUrl: './specific-knowledge.component.html',
  styleUrls: ['./specific-knowledge.component.scss']
})
export class SpecificKnowledgeComponent {
    constructor(private translateService: TranslateService) {
        ;
    }
}
