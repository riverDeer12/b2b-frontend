import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-users',
    templateUrl: './subscribers.component.html',
    styleUrls: ['./subscribers.component.css']
})
export class SubscribersComponent implements OnInit {

    constructor(private translateService: TranslateService) {
        this.translateService.use('hr');
    }

    ngOnInit(): void {
    }

}
