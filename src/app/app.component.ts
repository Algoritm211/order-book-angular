import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddProductDialogComponent} from "./products/add-product-dialog/add-product-dialog.component";
import {Product} from "./products/core/interfaces/product";
import {ProductService} from "./core/api/product.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'admin-angular';

  products: Product[];

  constructor(
    private dialog: MatDialog,
    private productService: ProductService,
  ) {}

  openDialog() {
    this.dialog.open(AddProductDialogComponent, {
      maxHeight: '90vh',
    })
  }

  ngOnInit() {
    this.getProducts()
  }

  getProducts() {
    this.productService.getProducts()
      .subscribe(val => this.products = val)
  }
}
