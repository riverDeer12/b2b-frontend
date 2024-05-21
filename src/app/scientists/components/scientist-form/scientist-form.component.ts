import {Component, Input} from '@angular/core';
import {FormType} from '../../../shared/enums/form-type';
import {Scientist} from '../../core/models/scientist';
import {EntityType} from "../../../auth/core/enums/entity-type";
import {SpecificKnowledge} from "../../../specific-knowledge/core/models/specific-knowledge";
import {Equipment} from "../../../equipment/core/models/equipment";
import {Category} from "../../../categories/core/models/category";
import {RedirectType} from "../../../shared/enums/redirect-type";

@Component({
    selector: 'scientist-form',
    templateUrl: './scientist-form.component.html',
    styleUrls: ['./scientist-form.component.scss']
})
export class ScientistFormComponent {
    @Input() formType!: FormType;
    @Input() scientist!: Scientist;
    @Input() specificKnowledge!: SpecificKnowledge[];
    @Input() equipment!: Equipment[];
    @Input() categories!: Category[];
    @Input() returnUrl!: string;

    entityType = EntityType.Scientist;

    public get redirectType(): typeof RedirectType {
        return RedirectType;
    }

    ngOnInit() {
        this.specificKnowledge = this.specificKnowledge.map((x: SpecificKnowledge) =>
            Object.assign(new SpecificKnowledge(), x)
        );
        this.equipment = this.equipment.map((x: Equipment) =>
            Object.assign(new Equipment(), x)
        );
        this.categories = this.categories.map((x: Category) =>
            Object.assign(new Category(), x)
        );
    }
}
