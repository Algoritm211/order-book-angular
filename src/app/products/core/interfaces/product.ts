import {Validators} from "@angular/forms";

export type ProductCategory = 'fruits' | 'electronics' | 'vegetables'

export type Freshness = 'Brand new' | 'Second hand' | 'Refurbished'

export interface Product {
  id: number,
  name: string,
  category: ProductCategory,
  date: string,
  freshness: Freshness,
  price: string,
  comment?: string,
}
