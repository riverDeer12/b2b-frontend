import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {News} from '../../core/models/news';
import {Table} from 'primeng/table';

@Component({
  selector: 'app-news-data-table',
  templateUrl: './news-data-table.component.html',
  styleUrls: ['./news-data-table.component.scss']
})
export class NewsDataTableComponent {

    @Input() data!: News[];

    @ViewChild('filter') filter!: ElementRef;

    constructor() { }

    ngOnInit() {

    }

    /**
     * External method for handling
     * global filter across data.
     *
     * @param table
     * @param event
     */
    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    clear(table: Table) {
        table.clear();
        this.filter.nativeElement.value = '';
    }
}
