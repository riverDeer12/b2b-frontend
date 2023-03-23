import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    constructor(private translateService: TranslateService) {
        this.translateService.use('hr');
    }

    ngOnInit(): void {
    }

}
