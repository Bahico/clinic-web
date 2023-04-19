import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BuyerModel} from "./buyer.model";
import {url} from "../app.component";

@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  protected buyerUrl = url+'user/buyer/'
  constructor(
    private readonly http: HttpClient
  ) { }

  detail(id: string): Observable<BuyerModel> {
    return this.http.get<BuyerModel>(this.buyerUrl+id+'/')
  }
  create(data: any): Observable<BuyerModel> {
    return this.http.post<BuyerModel>(this.buyerUrl, data)
  }
}
