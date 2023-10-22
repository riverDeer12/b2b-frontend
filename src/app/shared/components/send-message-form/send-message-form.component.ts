import { Component, Input } from '@angular/core';
import {FormType} from '../../enums/form-type';
import {RedirectType} from '../../enums/redirect-type';

@Component({
  selector: 'send-message-form',
  templateUrl: './send-message-form.component.html',
  styleUrls: ['./send-message-form.component.scss']
})
export class SendMessageFormComponent {
    @Input() formType!: FormType;
    @Input() dialogId!: string;
    @Input() redirectType!: RedirectType;
}
