import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Freshness, Product} from "../core/interfaces/product";
import {ProductService} from "../../core/api/product.service";
import {MAT_DIALOG_DATA} from '@angular/material/dialog'
import {Observer} from "rxjs";

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.css']
})
export class AddProductDialogComponent implements OnInit {
  productForm: FormGroup;

  freshnessList: Freshness[] = [
    'Brand new',
    'Second hand',
    'Refurbished'
  ]
  constructor(
    @Inject(MAT_DIALOG_DATA) public editData: Product,
    private fb: FormBuilder,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      date: ['', Validators.required],
      freshness: ['', Validators.required],
      price: ['', Validators.required],
      comment: [''],
    })

    if (this.editData) {
      Object.entries(this.editData).forEach(([key, value]) => {
        this.productForm.controls[key]?.setValue(value);
      })
    }
  }

  addProduct() {
    if (!this.productForm.valid) return;

    const subscriberObj: Partial<Observer<Product>> = {
      next: (res: Product) => {
        const message = this.editData
          ? `Product with name ${res.name} was updated`
          : `Product with name ${res.name} added`
        alert(message)
        this.productService.setRefresh(true);
        this.productForm.reset()
      },
      error: () => alert('Some error occurred'),
    }

    if (this.editData) {
      this.productService.updateProduct(this.productForm.value, this.editData.id)
        .subscribe(subscriberObj)
    } else {
      this.productService.addProduct(this.productForm.value)
        .subscribe(subscriberObj)
    }
  }
}
