import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddProductDialogComponent} from "./products/add-product-dialog/add-product-dialog.component";
import {Product} from "./products/core/interfaces/product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];

  constructor(
    private dialog: MatDialog,
  ) {}

  openDialog() {
    this.dialog.open(AddProductDialogComponent, {
      maxHeight: '90vh',
    })
  }
}
