import {Component, Input} from '@angular/core';
import {FormType} from '../../../shared/enums/form-type';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NotificationService} from '../../../shared/services/notification.service';
import {NotificationType} from '../../../shared/enums/notification-type';
import {Scientist} from '../../core/models/scientist';
import {ScientistService} from '../../core/services/scientist.service';
import {Company} from "../../../companies/core/models/company";
import {ResearchProblem} from "../../../research-problems/core/models/research-problem";
import {EntityType} from "../../../auth/core/enums/entity-type";
import {SpecificKnowledge} from "../../../specific-knowledge/core/models/specific-knowledge";
import {Equipment} from "../../../equipment/core/models/equipment";
import {Category} from "../../../categories/core/models/category";

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
}
