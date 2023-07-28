import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {url} from "../../app.component";
import {NewModel, PaginationNewModel} from "../new.model";

@Injectable({
  providedIn: 'root'
})
export class NewService {
  private resourceUrl = url+'new/';
  next ?: string;

  constructor(
    private readonly http: HttpClient
  ) { }

  create(data: any) {
    return this.http.post<NewModel>(this.resourceUrl, data)
  }

  update(data: any, id: number) {
    return this.http.put<NewModel>(this.resourceUrl+id+'/', data)
  }

  detail(id: number | string) {
    return this.http.get<NewModel>(this.resourceUrl+id+'/')
  }

  all() {
    return this.http.get<PaginationNewModel>(this.resourceUrl)
  }

  nextPage() {
    return this.http.get<PaginationNewModel>(this.next ? this.next : '')
  }
}
