import {Component, Input} from '@angular/core';
import {EntityType} from '../../core/enums/entity-type';
import {ValidationService} from '../../../shared/services/validation.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CompanyService} from '../../../companies/core/services/company.service';
import {OrganizationService} from '../../../organizations/core/services/organization.service';
import {ScientistService} from '../../../scientists/core/services/scientist.service';
import {confirmedPasswordValidator} from '../../../shared/validators/confirmed-password-validator';
import {passwordValidator} from '../../../shared/validators/password-validator';

@Component({
    selector: 'credentials-form',
    templateUrl: './credentials-form.component.html',
    styleUrls: ['./credentials-form.component.scss']
})
export class CredentialsFormComponent {
    @Input() entityType!: EntityType;
    @Input() form!: FormGroup;

    usernameCheckLoading!: boolean;

    constructor(public validationService: ValidationService,
                private companyService: CompanyService,
                private organizationService: OrganizationService,
                private scientistService: ScientistService) {
        this.initForm();
    }

    initForm() {
        this.form.addControl('username', new FormControl('', [Validators.required, Validators.email]));
        this.form.addControl('password', new FormControl('', passwordValidator));
        this.form.addControl('confirmPassword', new FormControl('', confirmedPasswordValidator));
    }


    triggerUsernameCheck(): void {
        if (!this.form.get('username')?.valid) {
            return;
        }

        this.checkUsername();
    }

    checkUsername(): void {
        this.usernameCheckLoading = true;

        const username = this.form.get('username')?.value;

        switch (this.entityType) {
            case EntityType.Company:
                this.checkCompanyUsername(username);
                break;
            case EntityType.Scientist:
                this.checkScientistUsername(username);
                break;
            case EntityType.Organization:
                this.checkOrganizationUsername(username);
                break;
        }
    }

    checkScientistUsername(username: string): void {
        this.scientistService.checkScientistUsername(username).subscribe(
            (response: any) => {
                this.uniqueUsername = true;
                this.usernameCheckLoading = false;
            },
            (error) => {
                this.uniqueUsername = false;
                this.form.get('username')?.setErrors({unique: true});
                this.notificationService.errorMessage(
                    NotificationMessages.USERNAME_NOT_AVAILABLE
                );
                this.usernameCheckLoading = false;
            }
        );
    }

    checkOrganizationUsername(username: string): void {
        this.organizationService.checkOrganizationUsername(username).subscribe(
            (response: any) => {
                this.uniqueUsername = true;
            },
            (error) => {
                this.uniqueUsername = false;
                this.form.get('username')?.setErrors({unique: true});
                this.notificationService.errorMessage(
                    NotificationMessages.USERNAME_NOT_AVAILABLE
                );
            }
        );
    }

    checkCompanyUsername(username: string): void {
        this.companyService.checkCompanyUsername(username).subscribe(
            (response: any) => {
                this.uniqueUsername = true;
            },
            (error) => {
                this.uniqueUsername = false;
                this.form.get('username')?.setErrors({unique: true});
                this.notificationService.errorMessage(
                    NotificationMessages.USERNAME_NOT_AVAILABLE
                );
            }
        );
    }


}
