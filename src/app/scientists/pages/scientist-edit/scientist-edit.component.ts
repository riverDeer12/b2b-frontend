import {Component} from '@angular/core';
import {FormType} from '../../../shared/enums/form-type';
import {Category} from '../../../categories/core/models/category';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute} from '@angular/router';
import {Scientist} from '../../core/models/scientist';
import {SpecificKnowledge} from "../../../specific-knowledge/core/models/specific-knowledge";
import {Equipment} from "../../../equipment/core/models/equipment";

@Component({
    selector: 'scientist-edit',
    templateUrl: './scientist-edit.component.html',
    styleUrls: ['./scientist-edit.component.scss']
})
export class ScientistEditComponent {
    returnUrl = '/admin/scientists';
    formType = FormType.Edit;

    scientist!: Scientist;
    categories!: Category[];
    specificKnowledge!: SpecificKnowledge[];
    equipment!: Equipment[];

    constructor(private translateService: TranslateService, private activatedRoute: ActivatedRoute) {
        this.listenToResolver();
    }

    ngOnInit(): void {
    }

    private listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {
            this.scientist = Object.assign(new Scientist(), response['scientist']);
            this.specificKnowledge = response["specificKnowledge"].map((x: SpecificKnowledge) =>
                Object.assign(new SpecificKnowledge(), x)
            );
            this.equipment = response["equipment"].map((x: Equipment) =>
                Object.assign(new Equipment(), x)
            );
            this.categories = response["categories"].map((x: Category) =>
                Object.assign(new Category(), x)
            );
        });
    }
}
