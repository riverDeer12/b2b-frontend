import {Component} from '@angular/core';
import {FormType} from '../../../shared/enums/form-type';
import {Category} from '../../../categories/core/models/category';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'company-create',
    templateUrl: './company-create.component.html',
    styleUrls: ['./company-create.component.scss']
})
export class CompanyCreateComponent {

    formType = FormType.Create;

    returnUrl = '/admin/companies';

    categories!: Category[];

    constructor(private activatedRoute: ActivatedRoute) {
        this.listenToResolver();
    }

    ngOnInit(): void {
    }

    private listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {
            this.categories = response['categories'].map((x: Category) =>
                Object.assign(new Category(), x)
            );
        });
    }


}
