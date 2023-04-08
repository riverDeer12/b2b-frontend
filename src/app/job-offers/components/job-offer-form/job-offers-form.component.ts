import {Component, Input} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormType} from '../../../shared/enums/form-type';
import {Router} from '@angular/router';
import {NotificationService} from '../../../shared/services/notification.service';
import {NotificationType} from '../../../shared/enums/notification-type';
import {JobOffer} from "../../core/models/job-offer";
import {JobOfferService} from "../../core/services/job-offer.service";

@Component({
    selector: 'job-offer-form',
    templateUrl: './job-offers-form.component.html',
    styleUrls: ['./job-offers-form.component.scss']
})
export class JobOffersFormComponent {
    @Input() formType!: FormType;
    @Input() jobOffer!: JobOffer
    @Input() returnUrl!: string;

    form!: FormGroup;

    constructor(private fb: FormBuilder,
                private router: Router,
                private notificationService: NotificationService,
                private jobOfferService: JobOfferService) {
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
            name: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required),
            location: new FormControl('', Validators.required),
            deadline: new FormControl('', Validators.required),
            experience: new FormControl('', Validators.required),
            education: new FormControl('', Validators.required),
            specialConditions: new FormControl('', Validators.required),
            duration: new FormControl('', Validators.required),
            applyMethod: new FormControl('', Validators.required),
            additional: new FormControl('', Validators.required),
            categories: new FormControl('', Validators.required),
            companyId: new FormControl('', Validators.required),
        })
    }

    /**
     * Initializes form if
     * edit form action is triggered.
     */
    private initEditForm(): void {
        this.form = this.fb.group({
            name: new FormControl(this.jobOffer.name, Validators.required),
            description: new FormControl(this.jobOffer.description, Validators.required),
            location: new FormControl(this.jobOffer.location, Validators.required),
            deadline: new FormControl(this.jobOffer.deadline, Validators.required),
            experience: new FormControl(this.jobOffer.experience, Validators.required),
            education: new FormControl(this.jobOffer.education, Validators.required),
            specialConditions: new FormControl(this.jobOffer.specialConditions, Validators.required),
            duration: new FormControl(this.jobOffer.duration, Validators.required),
            applyMethod: new FormControl(this.jobOffer.applyMethod, Validators.required),
            additional: new FormControl(this.jobOffer.additional, Validators.required),
            categories: new FormControl(this.jobOffer.categories, Validators.required),
            companyId: new FormControl(this.jobOffer.categories, Validators.required)
        })
    }

    /**
     * Method that is triggered
     * by clicking submit button.
     */
    submit(): void {
        if (this.form.invalid) {
            this.notificationService
                .showNotification(NotificationType.Error,
                    'correct-validation-errors');
            return;
        }

        this.formType === FormType.Create ?
            this.createJobOffer() :
            this.editJobOffer();
    }

    /**
     * Connecting to job offer
     * service and sending form data to
     * create new job offer.
     */
    private createJobOffer(): void {

        const companyId = this.form.controls["companyId"].value;

        this.jobOfferService.createJobOffer(companyId, this.form.value).subscribe(() => {
                this.notificationService
                    .showNotification(NotificationType.Success,
                        'job-offer-successfully-created');

                this.router.navigateByUrl(this.returnUrl).then();
            },
            (error) => {
                this.notificationService
                    .showNotification(NotificationType.Error,
                        'correct-validation-errors');
            })
    }

    /**
     * Connecting to job offer
     * service and sending form data to
     * updated selected job offer.
     */
    private editJobOffer(): void {

        const companyId = this.form.controls["companyId"].value;

        this.jobOfferService.editJobOffer(companyId, this.jobOffer.id, this.form.value).subscribe(() => {
                this.notificationService
                    .showNotification(NotificationType.Success,
                        'job-offer-successfully-updated');

                this.router.navigateByUrl(this.returnUrl).then();
            },
            (error) => {
                this.notificationService
                    .showNotification(NotificationType.Error,
                        'correct-validation-errors');
            })
    }
}