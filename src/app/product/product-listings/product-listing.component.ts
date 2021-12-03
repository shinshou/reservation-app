import { Component, OnInit } from '@angular/core';
import { products } from '../../products';

@Component({
  selector: 'app-',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListComponent implements OnInit {

  products:any

  constructor() { }

  ngOnInit(): void {
    this.products = products
  }

}
