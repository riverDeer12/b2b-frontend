import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute} from '@angular/router';
import {Scientist} from '../../core/models/scientist';

@Component({
  selector: 'scientists-home',
  templateUrl: './scientists-home.component.html',
  styleUrls: ['./scientists-home.component.css']
})
export class ScientistsHomeComponent implements OnInit {

    scientists: Scientist[] = [];

    constructor(private translateService: TranslateService, private activatedRoute: ActivatedRoute) {
        this.listenToResolver();
    }

    ngOnInit(): void {
    }

    private listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {
            this.scientists = response['scientists'].map((x: Scientist) =>
                Object.assign(new Scientist(), x)
            );
        });
    }

}
