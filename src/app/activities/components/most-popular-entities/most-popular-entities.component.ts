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
        responsive: true,
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
            labels: this.entities.map(x => this.formatLabel(x.activityLabel, 30)),
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

    /**
     * Helper for formating chart.js
     * long labels
     * @param labelValue label text.
     * @param maxLabelSize number that presents chars size
     * for each part for label.
     */
    formatLabel(labelValue: string, maxLabelSize: number){
        let sections: (string | any[])[] = [];
        let words = labelValue.split(" ");
        let temp: string | any[] = "";

        words.forEach(function(item: string | any[], index: number){
            if(temp.length > 0)
            {
                let concat = temp + ' ' + item;

                if(concat.length > maxLabelSize){
                    sections.push(temp);
                    temp = "";
                }
                else{
                    if(index == (words.length-1)) {
                        sections.push(concat);
                        return;
                    }
                    else {
                        temp = concat;
                        return;
                    }
                }
            }

            if(index == (words.length-1)) {
                sections.push(item);
                return;
            }

            if(item.length < maxLabelSize) {
                temp = item;
            }
            else {
                sections.push(item);
            }

        });

        return sections;
    }
}
