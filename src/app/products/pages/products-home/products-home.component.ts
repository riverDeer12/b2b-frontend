import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../core/models/product';

@Component({
  selector: 'products-home',
  templateUrl: './products-home.component.html',
  styleUrls: ['./products-home.component.scss']
})
export class ProductsHomeComponent {
    products: Product[] = [];

    constructor(private activatedRoute: ActivatedRoute) {
        this.listenToResolver();
    }

    ngOnInit(): void {

    }

    private listenToResolver() {
        this.activatedRoute.data.subscribe((response) => {
            this.products = response['products'].map((x: Product) =>
                Object.assign(new Product(), x)
            );
        });
    }

}
