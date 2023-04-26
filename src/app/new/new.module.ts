import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewListComponent } from './list/list.component';
import {RouterLink, RouterModule} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import { NewCreateComponent } from './create/create.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";
import { NewDetailComponent } from './detail/detail.component';
import {NzImageModule} from "ng-zorro-antd/image";



@NgModule({
  declarations: [
    NewListComponent,
    NewCreateComponent,
    NewDetailComponent
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
    ]),
    ReactiveFormsModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzImageModule
  ]
})
export class NewModule { }
