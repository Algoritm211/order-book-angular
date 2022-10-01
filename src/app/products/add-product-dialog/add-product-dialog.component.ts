import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Freshness} from "../core/interfaces/product";
import {ProductService} from "../../core/api/product.service";

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
  }

  addProduct() {
    if (this.productForm.valid) {
      this.productService.addProduct(this.productForm.value)
        .subscribe({
          next: (res) => {
            alert(`Product with name ${res.name} added`)
            this.productForm.reset()
          },
          error: () => alert('Some error occurred'),
        })
    }
  }

}
