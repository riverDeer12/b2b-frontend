import {Component} from '@angular/core';
import {FormType} from '../../../shared/enums/form-type';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute} from '@angular/router';
import {Organization} from '../../../organizations/core/models/organization';
import {Category} from '../../../categories/core/models/category';

@Component({
    selector: 'research-problem-create',
    templateUrl: './research-problem-create.component.html',
    styleUrls: ['./research-problem-create.component.scss']
})
export class ResearchProblemCreateComponent {
    returnUrl = '/admin/research-problems';
    formType = FormType.Create;
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
