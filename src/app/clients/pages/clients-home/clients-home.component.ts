import { Component } from '@angular/core';
import {Client} from "../../core/models/client";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'clients-home',
  templateUrl: './clients-home.component.html',
  styleUrls: ['./clients-home.component.scss']
})
export class ClientsHomeComponent {
    clients: Client[] = [];

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.listenToResolver();
    }

    private listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {
            this.clients = response['clients'].map((x: Client) =>
                Object.assign(new Client(), x)
            );
        });
    }

}
