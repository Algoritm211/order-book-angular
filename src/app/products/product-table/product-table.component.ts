import { Component, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Product} from "../core/interfaces/product";
import {ProductService} from "../../core/api/product.service";
import {AddProductDialogComponent} from "../add-product-dialog/add-product-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements AfterViewInit {

  displayedColumns: Array<keyof Product | string> = ['name', 'category', 'date', 'freshness', 'price', 'action'];
  dataSource: MatTableDataSource<Product> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialog: MatDialog,
    private productService: ProductService
  ) { }

  ngAfterViewInit(): void {
    this.getProducts();
    this.productService.getRefresh().subscribe((value: boolean) => {
      console.log(value);
      if (value) {
        this.getProducts()
      }
    })
  }

  getProducts() {
    this.productService.getProducts()
      .subscribe(val => {
        this.dataSource.data = val;
      })
  }

  editProduct(rowValue: Product) {
    this.dialog.open(AddProductDialogComponent, {
      maxHeight: '90vh',
      data: rowValue
    })
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id)
      .subscribe({
        next: (val) => {
          alert(`Product was deleted`)
          this.productService.setRefresh(true);
        },
        error: () => alert(`Some error was occurred`)
      })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
