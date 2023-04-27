import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {AboutListComponent} from "./list/list.component";
import {NzButtonModule} from "ng-zorro-antd/button";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AboutListComponent
      }
    ]),
    NzButtonModule
  ]
})
export class AboutModule {
}
