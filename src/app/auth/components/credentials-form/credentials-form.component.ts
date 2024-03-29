import {Component, Input, OnInit} from '@angular/core';
import {EntityType} from '../../core/enums/entity-type';
import {ValidationService} from '../../../shared/services/validation.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CompanyService} from '../../../companies/core/services/company.service';
import {OrganizationService} from '../../../organizations/core/services/organization.service';
import {ScientistService} from '../../../scientists/core/services/scientist.service';
import {passwordValidator} from '../../../shared/validators/password-validator';

@Component({
    selector: 'credentials-form',
    templateUrl: './credentials-form.component.html',
    styleUrls: ['./credentials-form.component.scss']
})
export class CredentialsFormComponent implements OnInit{
    @Input() entityType!: EntityType;
    @Input() form!: FormGroup;

    usernameCheckLoading!: boolean;

    constructor(public validationService: ValidationService,
                private companyService: CompanyService,
                private organizationService: OrganizationService,
                private scientistService: ScientistService) {
    }

    ngOnInit(): void {
        this.initForm();
    }

    initForm(): void {
        this.form.addControl('username', new FormControl('', [Validators.required, Validators.email]));
        this.form.addControl('password', new FormControl('', passwordValidator));
        this.form.addControl('confirmPassword', new FormControl('', [Validators.required]));
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
            case EntityType.PublicOrganization:
                this.checkOrganizationUsername(username);
                break;
        }
    }

    checkScientistUsername(username: string): void {
        this.scientistService.checkScientistUsername(username).subscribe(
            (response: any) => {
                this.form.get('username')?.setErrors({unique: null});
                this.form.updateValueAndValidity();
                this.usernameCheckLoading = false;
            },
            (error) => {
                this.form.get('username')?.setErrors({unique: true});
                this.form.updateValueAndValidity();
                this.usernameCheckLoading = false;
            }
        );
    }

    checkOrganizationUsername(username: string): void {
        this.organizationService.checkOrganizationUsername(username).subscribe(
            (response: any) => {
                this.form.get('username')?.setErrors(null);
                this.form.updateValueAndValidity();
                this.usernameCheckLoading = false;
            },
            (error) => {
                this.form.get('username')?.setErrors({unique: true});
                this.form.updateValueAndValidity();
                this.usernameCheckLoading = false;
            }
        );
    }

    checkCompanyUsername(username: string): void {
        this.companyService.checkCompanyUsername(username).subscribe(
            (response: any) => {
                this.form.get('username')?.setErrors(null);
                this.form.updateValueAndValidity();
                this.usernameCheckLoading = false;
            },
            (error) => {
                this.form.get('username')?.setErrors({unique: true});
                this.form.updateValueAndValidity();
                this.usernameCheckLoading = false;
            }
        );
    }


}
