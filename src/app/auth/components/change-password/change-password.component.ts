import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {EntityType} from '../../core/enums/entity-type';

@Component({
    selector: 'auth-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
    @Input() entityId!: string;
    @Input() entityType!: EntityType;

    form!: FormGroup;

    constructor() {
    }


    submit(): void {

    }
}
