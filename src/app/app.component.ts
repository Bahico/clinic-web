import { Component } from '@angular/core';
import {AuthorizationService} from "./authorization/authorization.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private readonly service: AuthorizationService,
    private readonly translate: TranslateService
  ) {

    translate.setDefaultLang('en')
    if (localStorage.getItem('language') == '2') {
      translate.use('ru')
    } else if (localStorage.getItem('language') == '3') {
      translate.use('uz')
    }

    service.detail().subscribe(data=>{
      service.user = data
    }, () => {
      console.log('http://54.161.162.95/authorization/login <= Login')
    })
  }
}

export const url = 'http://127.0.0.1:8000/'
export const img = 'http://127.0.0.1:8000'
