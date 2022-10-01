import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Product} from "../../products/core/interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  MAIN_URL = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  addProduct(data: Product) {
    return this.http.post<Product>(`${this.MAIN_URL}/productList/`, data)
  }

  getProducts() {
    return this.http.get<Product[]>(`${this.MAIN_URL}/productList/`)
  }

}
