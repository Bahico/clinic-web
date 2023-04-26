import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {url} from "../app.component";
import {SettingsModel} from "./settings.model";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  protected resourceUrl = url+'user/about/'
  constructor(
    private readonly http: HttpClient
  ) { }

  get() {
    return this.http.get<SettingsModel>(this.resourceUrl)
  }
  put() {
    return this.http.put<SettingsModel>(this.resourceUrl, {})
  }
}
