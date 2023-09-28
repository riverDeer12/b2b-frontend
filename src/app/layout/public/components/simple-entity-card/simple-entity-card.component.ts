import {Component, Input} from '@angular/core';

@Component({
  selector: 'simple-entity-card',
  templateUrl: './simple-entity-card.component.html',
  styleUrls: ['./simple-entity-card.component.scss']
})
export class SimpleEntityCardComponent {
    @Input() title!: string;
    @Input() imageLink!: string;
    @Input() detailsLink!: string;
}
