import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Product} from "../../products/core/interfaces/product";
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  MAIN_URL = 'http://localhost:3000'
  private refresh: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  getRefresh(): Observable<boolean> {
    return this.refresh.asObservable();
  }

  setRefresh(value: boolean): void {
    this.refresh.next(value);
  }

  constructor(private http: HttpClient) { }

  addProduct(data: Product) {
    return this.http.post<Product>(`${this.MAIN_URL}/productList/`, data)
  }

  getProducts() {
    return this.http.get<Product[]>(`${this.MAIN_URL}/productList/`)
  }

  updateProduct(data: Product, id: number) {
    return this.http.put<Product>(`${this.MAIN_URL}/productList/${id}`, data);
  }

  deleteProduct(id: number) {
    return this.http.delete<Product>(`${this.MAIN_URL}/productList/${id}`)
  }
}
