import {Component, Input} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormType} from '../../../shared/enums/form-type';
import {Router} from '@angular/router';
import {NotificationService} from '../../../shared/services/notification.service';
import {NotificationType} from '../../../shared/enums/notification-type';
import {JobOffer} from '../../core/models/job-offer';
import {JobOfferService} from '../../core/services/job-offer.service';
import {RedirectType} from '../../../shared/enums/redirect-type';
import {SharedService} from '../../../shared/services/shared.service';
import {Category} from '../../../categories/core/models/category';

/**
 * Component responsible for
 * managing job offer data. It
 * can be defined with different input
 * decorators.
 *
 * @param formType type of form action.
 * @param redirectType type of redirect action.
 * @param companyId id of parent entity.
 * @param jobOffer data for managing.
 * @param returnUrl url to redirect user after form submit.
 * @param dialogId parent dialog form identifier.
 *
 */
@Component({
    selector: 'job-offer-form',
    templateUrl: './job-offers-form.component.html',
    styleUrls: ['./job-offers-form.component.scss']
})
export class JobOffersFormComponent {
    @Input() formType!: FormType;
    @Input() redirectType!: RedirectType;
    @Input() companyId!: string;
    @Input() categories!: Category[];
    @Input() jobOffer!: JobOffer;
    @Input() returnUrl!: string;
    @Input() dialogId!: string;

    form!: FormGroup;

    constructor(private fb: FormBuilder,
                private router: Router,
                private sharedService: SharedService,
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
     * Initializes job offer form if
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
            categories: new FormControl('', Validators.required)
        })
    }

    /**
     * Initializes job offer form if
     * edit form action is triggered.
     */
    private initEditForm(): void {
        this.form = this.fb.group({
            name: new FormControl(this.jobOffer.name, Validators.required),
            description: new FormControl(this.jobOffer.description, Validators.required),
            location: new FormControl(this.jobOffer.location, Validators.required),
            deadline: new FormControl(new Date(this.jobOffer.deadline), Validators.required),
            experience: new FormControl(this.jobOffer.experience, Validators.required),
            education: new FormControl(this.jobOffer.education, Validators.required),
            specialConditions: new FormControl(this.jobOffer.specialConditions, Validators.required),
            duration: new FormControl(this.jobOffer.duration, Validators.required),
            applyMethod: new FormControl(this.jobOffer.applyMethod, Validators.required),
            additional: new FormControl(this.jobOffer.additional, Validators.required),
            categories: new FormControl(this.jobOffer.categories.map(x => x.id), Validators.required)
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
        this.jobOfferService.createJobOffer(this.companyId, this.form.value).subscribe((response: JobOffer) => {
                this.notificationService
                    .showNotification(NotificationType.Success,
                        'job-offer-successfully-created');

                this.sharedService.redirectUserAfterSubmit(this.redirectType, this.returnUrl, this.dialogId);

                this.jobOfferService.pingJobOffers(response);
            },
            () => {
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
        this.jobOfferService.editJobOffer(this.companyId, this.jobOffer.id, this.form.value)
            .subscribe((response: JobOffer) => {
                this.notificationService
                    .showNotification(NotificationType.Success,
                        'job-offer-successfully-updated');

                this.sharedService.redirectUserAfterSubmit(this.redirectType, this.returnUrl, this.dialogId);

                this.jobOfferService.pingJobOffers(response);
            },
            () => {
                this.notificationService
                    .showNotification(NotificationType.Error,
                        'correct-validation-errors');
            })
    }
}
