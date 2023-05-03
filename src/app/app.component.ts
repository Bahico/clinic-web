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
      console.log('http://52.91.2.65/authorization/login <= Login')
    })
  }
}

export const url = 'http://52.91.2.65/';
export const img = 'http://52.91.2.65';
