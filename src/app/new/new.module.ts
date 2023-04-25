import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewListComponent } from './list/list.component';
import {RouterLink, RouterModule} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {InfiniteScrollModule} from "ngx-infinite-scroll";



@NgModule({
  declarations: [
    NewListComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    TranslateModule,
    InfiniteScrollModule,
    RouterModule.forChild([
      {
        path: '',
        component: NewListComponent
      }
    ])
  ]
})
export class NewModule { }
