import {Component} from '@angular/core';
import {FormType} from '../../../shared/enums/form-type';
import {Category} from '../../../categories/core/models/category';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute} from '@angular/router';
import {Scientist} from '../../core/models/scientist';

@Component({
    selector: 'scientist-edit',
    templateUrl: './scientist-edit.component.html',
    styleUrls: ['./scientist-edit.component.scss']
})
export class ScientistEditComponent {
    returnUrl = '/admin/scientist';

    formType = FormType.Edit;

    scientist!: Scientist;

    constructor(private translateService: TranslateService, private activatedRoute: ActivatedRoute) {
        this.listenToResolver();
    }

    ngOnInit(): void {
    }

    private listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {
            this.scientist = Object.assign(new Scientist(), response['scientist']);
        });
    }
}
