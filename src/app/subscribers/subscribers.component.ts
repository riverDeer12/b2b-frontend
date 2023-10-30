import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'subscribers',
    templateUrl: './subscribers.component.html',
    styleUrls: ['./subscribers.component.css']
})
export class SubscribersComponent implements OnInit {

    constructor(private translateService: TranslateService) {
        ;
    }

    ngOnInit(): void {
    }

}
