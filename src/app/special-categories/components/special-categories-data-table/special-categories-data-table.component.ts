import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {SpecialCategory} from "../../core/models/special-category";
import {ConfirmationService} from "primeng/api";
import {SharedService} from "../../../shared/services/shared.service";
import {NotificationService} from "../../../shared/services/notification.service";
import {Router} from "@angular/router";
import {Table} from "primeng/table";
import {NotificationType} from "../../../shared/enums/notification-type";
import {EntityType} from "../../../auth/core/enums/entity-type";
import {SpecialCategoryService} from "../../core/services/special-category.service";

@Component({
    selector: 'special-categories-data-table',
    templateUrl: './special-categories-data-table.component.html',
    styleUrls: ['./special-categories-data-table.component.scss']
})
export class SpecialCategoriesDataTableComponent {
    @Input() data: SpecialCategory[] = [];

    @ViewChild('filter') filter!: ElementRef;

    constructor(private confirmationService: ConfirmationService,
                private categoryService: SpecialCategoryService,
                private sharedService: SharedService,
                private notificationService: NotificationService,
                private router: Router) {
    }

    ngOnInit() {

    }

    /**
     * Method for handling
     * global filter across data.
     *
     * @param table table identifier
     * @param event filter event type
     */
    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    /**
     * Method for clearing
     * global filter input data.
     *
     * @param table
     */
    clear(table: Table) {
        table.clear();
        this.filter.nativeElement.value = '';
    }

    /**
     * Redirect user to news
     * edit page.
     *
     * @param id id of selected news item.
     */
    goToEditPage = (id: string) => this.router.navigateByUrl('/admin/special-categories/edit/' + id).then();

    /**
     * Redirect user to news
     * create page.
     *
     */
    goToCreatePage = () => this.router.navigateByUrl('/admin/special-categories/create').then();

    /**
     * Trigger popup to
     * confirm deleting selected
     * news item from data table.
     */
    confirmDelete(categoryId: string): void {
        this.confirmationService.confirm({
            key: 'confirmDeleteDialog',
            accept: () => {
                this.categoryService.deleteCategory(categoryId).subscribe((response: Object) => {
                        this.notificationService
                            .showNotification(NotificationType.Success, 'categories.successfully-deleted');
                        this.data = this.data.filter((x => x.id !== categoryId));
                    },
                    (error: Object) => {
                        this.notificationService
                            .showNotification(NotificationType.Error, 'categories.error-deleting');
                    })
            },
        });
    }

    openFlipActiveDialog(categoryId: string): void {
        this.confirmationService.confirm({
            accept: () => {
                this.sharedService.flipActive(EntityType.SpecialCategory, categoryId).subscribe((response: any) => {
                        this.notificationService
                            .showNotification(NotificationType.Success, 'activity-change.successfully-changed');

                        let flippedEntity = this.data.find(x => x.id === response.id) as SpecialCategory;

                        flippedEntity.isActive = !flippedEntity.isActive;
                    },

                    (error: Object) => {
                        this.notificationService
                            .showNotification(NotificationType.Error, 'activity-change.error');
                    })
            },
        });
    }

}
