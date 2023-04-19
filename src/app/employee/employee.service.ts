import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {url} from "../app.component";
import {EmployeeHttp, EmployeeModel} from "./employee.model";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  data: EmployeeModel[] = []

  private postUrl = url+'employee/';
  public next: string | undefined = ''
  constructor(
    private readonly http: HttpClient
  ) { }

  list() {
    return this.http.get<EmployeeHttp>(this.postUrl)
  }
  scroll() {
    return this.http.get<EmployeeHttp>(typeof this.next === "string" ? this.next : '')
  }
  detail(id: number) {
    return this.http.get<EmployeeModel>(this.postUrl+id+'/')
  }
  create(data: any) {
    return this.http.post<EmployeeModel>(this.postUrl, data)
  }

  home() {
    return this.http.get<EmployeeHttp>(this.postUrl+'home/')
  }

  delete(id: number) {
    return this.http.delete<string>(this.postUrl+id+'/')
  }

  update(data: EmployeeModel, id: number) {
    return this.http.put<EmployeeModel>(this.postUrl+id+'/', data)
  }
}
