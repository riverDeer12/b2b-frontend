import {Component} from '@angular/core';
import {FormType} from '../../../shared/enums/form-type';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute} from '@angular/router';
import {SpecificKnowledge} from "../../core/models/specific-knowledge";

@Component({
    selector: 'specific-knowledge-edit',
    templateUrl: './specific-knowledge-edit.component.html',
    styleUrls: ['./specific-knowledge-edit.component.scss']
})
export class SpecificKnowledgeEditComponent {
    returnUrl = "/admin/specific-knowledge";

    formType = FormType.Edit;

    specificKnowledge!: SpecificKnowledge;

    constructor(private translateService: TranslateService, private activatedRoute: ActivatedRoute) {
        this.listenToResolver();
    }

    ngOnInit(): void {
    }

    private listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {
            this.specificKnowledge = Object.assign(new SpecificKnowledge(), response["specific-knowledge"]);
        });
    }
}
