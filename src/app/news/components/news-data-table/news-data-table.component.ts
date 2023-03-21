import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {News} from '../../core/models/news';
import {Table} from 'primeng/table';
import {ConfirmationService} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
    selector: 'news-data-table',
    templateUrl: './news-data-table.component.html',
    styleUrls: ['./news-data-table.component.scss']
})
export class NewsDataTableComponent {

    @Input() data!: News[];

    @ViewChild('filter') filter!: ElementRef;

    constructor(private confirmationService: ConfirmationService,
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
     */
    confirmDelete(): void {
        this.confirmationService.confirm({
            key: 'confirmDeleteDialog'
        });
    }
}
