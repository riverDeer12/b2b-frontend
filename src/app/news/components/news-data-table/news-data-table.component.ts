import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {News} from '../../core/models/news';
import {Table} from 'primeng/table';
import {ConfirmationService} from 'primeng/api';
import {Router} from '@angular/router';
import {NotificationType} from '../../../shared/enums/notification-type';
import {NewsService} from '../../core/services/news.service';
import {NotificationService} from '../../../shared/services/notification.service';
import {EntityType} from '../../../auth/core/enums/entity-type';
import {SharedService} from '../../../shared/services/shared.service';

@Component({
    selector: 'news-data-table',
    templateUrl: './news-data-table.component.html',
    styleUrls: ['./news-data-table.component.scss']
})
export class NewsDataTableComponent {

    @Input() data!: News[];

    @ViewChild('filter') filter!: ElementRef;

    constructor(private confirmationService: ConfirmationService,
                private notificationService: NotificationService,
                private sharedService: SharedService,
                private newsService: NewsService,
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
    goToEditPage = (id: string) => this.router.navigateByUrl('/admin/news/edit/' + id).then();

    /**
     * Redirect user to news
     * create page.
     */
    goToCreatePage = () => this.router.navigateByUrl('/admin/news/create').then();

    /**
     * Trigger popup to
     * confirm deleting selected
     * news item from data table.
     *
     * @param newsId - news identifier
     */
    confirmDelete(newsId: string): void {
        this.confirmationService.confirm({
            key: 'confirmDeleteDialog',
            accept: () => {
                this.newsService.deleteNews(newsId).subscribe((response: Object) => {
                        this.notificationService
                            .showNotification(NotificationType.Success, 'successfully-deleted');
                        this.data = this.data.filter((x => x.id !== newsId));
                    },
                    (error: Object) => {
                        this.notificationService
                            .showNotification(NotificationType.Error, 'error-deleting');
                    })
            },
        });
    }

    openFlipActiveDialog(newsId: string): void {
        this.confirmationService.confirm({
            accept: () => {
                this.sharedService.flipActive(EntityType.News, newsId).subscribe((response: Object) => {
                        this.notificationService
                            .showNotification(NotificationType.Success, 'activity.successfully-changed');
                    },
                    (error: Object) => {
                        this.notificationService
                            .showNotification(NotificationType.Error, 'activity.error');
                    })
            },
        });
    }
}
