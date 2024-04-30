import {Component, Input} from '@angular/core';
import {Scientist} from "../../../scientists/core/models/scientist";
import {Company} from "../../../companies/core/models/company";
import {Organization} from "../../../organizations/core/models/organization";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {NotificationType} from "../../../shared/enums/notification-type";
import {SpecialCategory} from "../../core/models/special-category";
import {NotificationService} from "../../../shared/services/notification.service";
import {SpecialCategoryService} from "../../core/services/special-category.service";

@Component({
    selector: 'special-category-assign-form',
    templateUrl: './special-category-assign-form.component.html',
    styleUrls: ['./special-category-assign-form.component.scss']
})
export class SpecialCategoryAssignFormComponent {
    @Input() category!: SpecialCategory;
    @Input() scientists!: Scientist[];
    @Input() companies!: Company[];
    @Input() organizations!: Organization[];

    form!: FormGroup;

    isLoading!: boolean;

    constructor(
        private categoryService: SpecialCategoryService,
        private notificationService: NotificationService,
        private fb: FormBuilder) {
    }

    ngOnInit() {
        this.initForm();
    }

    /**
     * Initializes form if
     * edit form action is triggered.
     */
    private initForm(): void {
        this.form = this.fb.group({
            companyIds: new FormControl(this.category.assignedCompanies.map(x => x.id) ?? []),
            publicOrganizationIds: new FormControl(this.category.assignedPublicOrganizations.map(x => x.id) ?? []),
            scientistIds: new FormControl(this.category.assignedScientists.map(x => x.id) ?? []),
            userTagId: new FormControl(this.category.id)
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
                .showNotification(NotificationType.Warning,
                    'correct-validation-errors');
            this.isLoading = false;
            return;
        }

        this.assignCategory();
    }

    /**
     * Connecting to category
     * service and sending form data to
     * updated selected category.
     */
    private assignCategory(): void {
        this.categoryService.assignCategory(this.form.value).subscribe((response: Object) => {

                this.notificationService
                    .showNotification(NotificationType.Success,
                        'categories.successfully-updated');

                this.isLoading = false;
            },
            (error) => {
                this.notificationService
                    .showNotification(NotificationType.Error,
                        'correct-validation-errors');
                this.isLoading = false;
            })
    }
}
