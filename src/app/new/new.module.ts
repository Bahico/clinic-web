import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewListComponent } from './list/list.component';
import {RouterModule} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {NewCreateComponent} from "./create/create.component";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzInputModule} from "ng-zorro-antd/input";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    NewListComponent,
    NewCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: NewListComponent
      }
    ]),
    TranslateModule,
    NzButtonModule,
    NzIconModule,
    NzInputModule,
    ReactiveFormsModule
  ]
})
export class NewModule { }
