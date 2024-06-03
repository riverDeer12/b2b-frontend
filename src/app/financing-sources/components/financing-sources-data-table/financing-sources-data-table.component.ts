import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FinancingSource} from "../../core/models/financing-source";
import {Router} from "@angular/router";
import {Table} from "primeng/table";

@Component({
    selector: 'financing-sources-data-table',
    templateUrl: './financing-sources-data-table.component.html',
    styleUrls: ['./financing-sources-data-table.component.scss']
})
export class FinancingSourcesDataTableComponent implements OnInit {
    @Input() data!: FinancingSource[];

    @ViewChild('filter') filter!: ElementRef;

    constructor(private router: Router) {
    }

    ngOnInit() {

    }

    getActivityText = (financingSource: FinancingSource) =>
        financingSource.isCurrentlyActive ? 'active' : 'not-active';

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
     * @param id id of selected financing source item.
     */
    goToInfoPage = (id: string) =>
        this.router.navigateByUrl('/admin/financing-sources/info/' + id).then();
}
