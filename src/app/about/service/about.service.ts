import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {url} from "../../app.component";
import {PartnerModel} from "../partner.model";

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  protected resourceUrl = url+'partner/'

  constructor(
    private readonly http: HttpClient
  ) { }

  all() {
    return this.http.get<any>(this.resourceUrl)
  }
  detail(id: number) {
    return this.http.get<PartnerModel>(this.resourceUrl+id+'/')
  }
  delete(id: number) {
    return this.http.delete(this.resourceUrl+id+'/')
  }
  create(data: any) {
    return this.http.post<PartnerModel>(this.resourceUrl+'create/', data)
  }
  update(data: any, id: number) {
    return this.http.put<PartnerModel>(this.resourceUrl+'update/'+id+'/', data)
  }
}
