import { Injectable } from '@angular/core';
import {url} from "../../app.component";
import {HttpClient} from "@angular/common/http";
import {NewModel, NewPaginationModel} from "../new.model";

@Injectable({
  providedIn: 'root'
})
export class NewService {
  protected resourceUrl = url+'new/';
  nextUrl?: string;
  constructor(
    private readonly http: HttpClient
  ) { }

  create(data: any) {
    return this.http.post<NewModel>(this.resourceUrl, data)
  }
  update(data: any, id: number) {
    return this.http.put<NewModel>(this.resourceUrl+id+'/', data)
  }
  detail(id: number) {
    return this.http.get<NewModel>(this.resourceUrl+'detail/'+id+'/')
  }
  all() {
    return this.http.get<NewPaginationModel>(this.resourceUrl+'list/')
  }
  next() {
    return this.http.get<NewPaginationModel>(this.nextUrl ? this.nextUrl : '')
  }

  delete(id: number) {
    return this.http.delete(this.resourceUrl+id+'/')
  }
}
