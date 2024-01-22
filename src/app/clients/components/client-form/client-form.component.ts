import { Component, Input } from '@angular/core';
import {FormType} from "../../../shared/enums/form-type";
import {RedirectType} from "../../../shared/enums/redirect-type";
import {Client} from "../../core/models/client";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidationService} from "../../../shared/services/validation.service";
import {Router} from "@angular/router";
import {NotificationService} from "../../../shared/services/notification.service";
import {NotificationType} from "../../../shared/enums/notification-type";
import {ClientService} from "../../core/services/client.service";
import {SharedService} from "../../../shared/services/shared.service";

@Component({
  selector: 'client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent {
    @Input() formType!: FormType;
    @Input() client!: Client;
    @Input() dialogId!: string;
    @Input() redirectType!: RedirectType;
    @Input() returnUrl!: string;

    form!: FormGroup;

    isLoading: boolean = false;

    constructor(
        public validationService: ValidationService,
        private fb: FormBuilder,
        private router: Router,
        private sharedService: SharedService,
        private notificationService: NotificationService,
        private clientService: ClientService) {
    }

    ngOnInit() {
        this.initFormGroup();
    }

    /**
     * Switch function depending on
     * form action type from input decorator.
     */
    initFormGroup = () => this.formType === FormType.Create ?
        this.initCreateForm() : this.initEditForm();


    /**
     * Initializes form if
     * create form action is triggered.
     */
    private initCreateForm(): void {
        this.form = this.fb.group({
            name: new FormControl('', Validators.required)
        })
    }

    /**
     * Initializes form if
     * edit form action is triggered.
     */
    private initEditForm(): void {
        this.form = this.fb.group({
            name: new FormControl(this.client.name, Validators.required)
        })
    }

    /**
     * Method that is triggered
     * by clicking submit button.
     */
    submit(): void {

        this.isLoading = true;

        if (this.form.invalid) {
            this.form.markAllAsTouched();
            this.notificationService
                .showNotification(NotificationType.Error,
                    'correct-validation-errors');
            this.isLoading = false;
            return;
        }

        this.formType === FormType.Create ?
            this.createClient() :
            this.editClient();
    }

    /**
     * Connecting to category
     * service and sending form data to
     * create new category.
     */
    private createClient(): void {
        this.clientService.createClient(this.form.value).subscribe(() => {
                this.notificationService
                    .showNotification(NotificationType.Success,
                        'clients.successfully-created');

                this.sharedService.redirectUserAfterSubmit(this.redirectType, this.returnUrl, this.dialogId);

                this.clientService.pingClients(this.form.value);

                this.isLoading = false;
            },
            (error) => {
                this.notificationService
                    .showNotification(NotificationType.Error,
                        'correct-validation-errors');
                this.isLoading = false;
            })
    }

    /**
     * Connecting to category
     * service and sending form data to
     * updated selected client.
     */
    private editClient(): void {
        this.clientService.editClient(this.client.id, this.form.value).subscribe((response: Object) => {

                this.notificationService
                    .showNotification(NotificationType.Success,
                        'clients.successfully-updated');

                this.router.navigateByUrl(this.returnUrl).then();

                this.sharedService.redirectUserAfterSubmit(this.redirectType, this.returnUrl, this.dialogId);

                this.clientService.pingClients(this.form.value);

                this.isLoading = false;
            },
            (error) => {
                console.log(error);
                this.notificationService
                    .showNotification(NotificationType.Error,
                        'correct-validation-errors');
                this.isLoading = false;
            })
    }
}
