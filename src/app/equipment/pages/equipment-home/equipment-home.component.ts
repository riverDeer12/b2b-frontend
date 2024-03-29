import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute} from '@angular/router';
import {Equipment} from "../../core/models/equipment";

@Component({
    selector: 'equipment-home',
    templateUrl: './equipment-home.component.html',
    styleUrls: ['./equipment-home.component.css']
})
export class EquipmentHomeComponent implements OnInit {
    equipment: Equipment[] = [];

    constructor(private translateService: TranslateService, private activatedRoute: ActivatedRoute) {
        this.listenToResolver();
    }

    ngOnInit(): void {

    }

    private listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {
            this.equipment = response['equipment'].map((x: Equipment) =>
                Object.assign(new Equipment(), x)
            );
        });
    }

}
