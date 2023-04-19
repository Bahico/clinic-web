import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductModel, PostResponse} from "./product.model";
import {url} from "../app.component";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private postUrl = url+'product/';
  public next: string | null = '';
  public name = '';
  data: ProductModel[] = []

  constructor(
    private readonly http: HttpClient
  ) { }

  list() {
    return this.http.post<PostResponse>(this.postUrl+'list/', {name:this.name})
  }
  scroll() {
    return this.http.post<PostResponse>(typeof this.next === "string" ? this.next : '', {name: this.name})
  }
  detail(id: string) {
     return this.http.get<ProductModel>(this.postUrl+id+'/')
  }
  create(data: any) {
    return this.http.post<ProductModel>(this.postUrl, data)
  }

  delete(id?: number) {
    return this.http.delete<string>(this.postUrl+id+'/')
  }

  update(data: any, id: number) {
    return this.http.put<ProductModel>(this.postUrl+'edit/'+id+'/', data)
  }

  image(id: number) {
    return this.http.get<{ image: Blob }>(this.postUrl+"image/"+id)
  }
}
