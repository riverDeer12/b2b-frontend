import {Component, Input} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {EntityType} from '../../core/enums/entity-type';
import {NotificationType} from '../../../shared/enums/notification-type';
import {NotificationService} from '../../../shared/services/notification.service';
import {RedirectType} from "../../../shared/enums/redirect-type";
import {CompanyService} from "../../../companies/core/services/company.service";
import {SharedService} from "../../../shared/services/shared.service";
import {ScientistService} from "../../../scientists/core/services/scientist.service";
import {OrganizationService} from "../../../organizations/core/services/organization.service";

@Component({
    selector: 'auth-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
    @Input() entity!: any;
    @Input() entityType!: EntityType;
    @Input() redirectType!: RedirectType;
    @Input() returnUrl!: string;
    @Input() dialogId!: string;

    form!: FormGroup;

    isLoading!: boolean;

    constructor(private fb: FormBuilder,
                private companyService: CompanyService,
                private scientistService: ScientistService,
                private organizationService: OrganizationService,
                private sharedService: SharedService,
                private notificationService: NotificationService) {
    }

    ngOnInit(): void {
        this.setFormGroup();
    }

    private setFormGroup(): void {
        this.form = this.fb.group({
            username: new FormControl({value: this.entity.username, disabled: true}, Validators.required),
            password: new FormControl('', Validators.required),
            confirmPassword: new FormControl('', Validators.required)
        })
    }

    submit(): void {

        this.isLoading = true;

        if (this.form.invalid) {
            this.form.markAllAsTouched();
            this.notificationService
                .showNotification(NotificationType.Warning,
                    'correct-validation-errors');
            this.isLoading = false;
            return;
        }

        this.makeChangePasswordCall();
    }

    private makeChangePasswordCall() {

        this.entity.username = this.form.get('username')?.value;
        this.entity.password = this.form.get('password')?.value;
        this.entity.confirmPassword = this.form.get('confirmPassword')?.value;
        this.entity.categories = this.entity.categories.map((x: { id: any; }) => x.id)
        this.entity.newsletterCategories = this.entity.newsletterCategories.map((x: { id: any; }) => x.id)
        this.entity.categoryTags = this.entity.categoryTags.split(";").slice(0,-1);

        if(this.entityType == EntityType.Company){
            this.companyService.editCompany(this.entity.id, this.entity).subscribe((response) => {
                this.notificationService
                    .showNotification(NotificationType.Success, "auth.password-changed-successfully");

                this.sharedService.redirectUserAfterSubmit(this.redirectType, this.returnUrl);

                this.isLoading = false;
            }, () => {
                this.notificationService
                    .showNotification(NotificationType.Error, "auth.error-changing-password");
                this.isLoading = false;
            })
        } else if (this.entityType === EntityType.Scientist){
            this.scientistService.editScientist(this.entity.id, this.entity).subscribe((response) => {
                this.notificationService
                    .showNotification(NotificationType.Success, "auth.password-changed-successfully");

                this.sharedService.redirectUserAfterSubmit(this.redirectType, this.returnUrl);

                this.isLoading = false;
            }, () => {
                this.notificationService
                    .showNotification(NotificationType.Error, "auth.error-changing-password");
                this.isLoading = false;
            })
        } else if (this.entityType === EntityType.PublicOrganization){
            this.organizationService.editOrganization(this.entity.id, this.entity).subscribe((response) => {
                this.notificationService
                    .showNotification(NotificationType.Success, "auth.password-changed-successfully");

                this.sharedService.redirectUserAfterSubmit(this.redirectType, this.returnUrl);

                this.isLoading = false;
            }, (error) => {
                this.notificationService
                    .showNotification(NotificationType.Error, "auth.error-changing-password");
                this.isLoading = false;
            })
        }
    }
}
