import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {url} from "../app.component";
import {UserModel} from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private postUrl = url+'user/';
  token = localStorage.getItem('token');
  user?:UserModel

  constructor(private readonly http: HttpClient) { }

  list() {
    return this.http.get<UserModel[]>(this.postUrl, {headers: {Authorization: `Token ${this.token}`}})
  }
  detail() {
    return this.http.get<UserModel>(this.postUrl, {headers: {Authorization: `Token ${this.token}`}})
  }
  create(data: any) {
    this.token = localStorage.getItem('token')
    return this.http.post<string>(this.postUrl+'create/', data)
  }

  login(data: any) {
    return this.http.post<string>(this.postUrl+'login/', data)
  }

  update(data: any) {
    return this.http.put<UserModel | string>(this.postUrl, data, {headers: {Authorization: `Token ${localStorage.getItem('token')}`}})
  }
}
