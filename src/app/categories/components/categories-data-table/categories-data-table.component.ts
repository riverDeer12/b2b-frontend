import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Category} from '../../core/models/category';
import {Router} from '@angular/router';
import {ConfirmationService} from 'primeng/api';
import {Table} from 'primeng/table';
import {NotificationService} from '../../../shared/services/notification.service';
import {NotificationType} from '../../../shared/enums/notification-type';
import {CategoryService} from '../../core/services/category.service';
import {EntityType} from '../../../auth/core/enums/entity-type';
import {SharedService} from '../../../shared/services/shared.service';

@Component({
    selector: 'categories-data-table',
    templateUrl: './categories-data-table.component.html',
    styleUrls: ['./categories-data-table.component.scss']
})
export class CategoriesDataTableComponent {
    @Input() data: Category[] = [];

    @ViewChild('filter') filter!: ElementRef;

    constructor(private confirmationService: ConfirmationService,
                private categoryService: CategoryService,
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
    goToEditPage = (id: string) => this.router.navigateByUrl('/admin/categories/edit/' + id).then();

    /**
     * Redirect user to news
     * create page.
     *
     */
    goToCreatePage = () => this.router.navigateByUrl('/admin/categories/create').then();

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
                            .showNotification(NotificationType.Success, 'successfully-deleted');
                        this.data = this.data.filter((x => x.id !== categoryId));
                    },
                    (error: Object) => {
                        this.notificationService
                            .showNotification(NotificationType.Error, 'error-deleting');
                    })
            },
        });
    }

    openFlipActiveDialog(categoryId: string): void {
        this.confirmationService.confirm({
            accept: () => {
                this.sharedService.flipActive(EntityType.Category, categoryId).subscribe((response: any) => {
                        this.notificationService
                            .showNotification(NotificationType.Success, 'activity-change.successfully-changed');

                        let flippedEntity = this.data.find(x => x.id === response.id) as Category;

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

