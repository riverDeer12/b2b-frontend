import {Component, Input} from '@angular/core';
import {ActivityItem} from '../../core/models/activity-item';

@Component({
    selector: 'most-popular-entities',
    templateUrl: './most-popular-entities.component.html',
    styleUrls: ['./most-popular-entities.component.scss']
})
export class MostPopularEntitiesComponent {
    @Input() entities!: ActivityItem[];
    @Input() labelProperty!: string;

    basicData: any;

    basicOptions = {
        indexAxis: 'y',
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#000000'
                },
                grid: {
                    color: '#000000',
                    drawBorder: false
                }
            },
            x: {
                ticks: {
                    color: '#000000'
                },
                grid: {
                    color: '#000000',
                    drawBorder: false
                }
            }
        }
    };

    ngOnInit() {
        this.entities = this.entities.map((x: ActivityItem) =>
            Object.assign(new ActivityItem(), x)
        );

        this.basicData = {
            labels: this.entities.map(x => x.activityLabel),
            datasets: [
                {
                    data: this.entities.map(x => x.numberOfViews),
                    backgroundColor: ['rgba(13, 115, 140, 0.59)'],
                    borderColor: ['#0c748d'],
                    borderWidth: 3
                }
            ]
        };
    }
}
