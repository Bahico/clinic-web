import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzIconModule} from "ng-zorro-antd/icon";
import { DetailComponent } from './detail/detail.component';
import {NzCardModule} from "ng-zorro-antd/card";
import {RouterLink, RouterModule} from "@angular/router";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {NzDrawerModule} from "ng-zorro-antd/drawer";
import {PostCreateModule} from "./create/post-create.module";
import {NzModalModule} from "ng-zorro-antd/modal";
import {TranslateModule} from "@ngx-translate/core";
import {NzImageModule} from "ng-zorro-antd/image";


@NgModule({
  declarations: [
    ListComponent,
    DetailComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NzButtonModule,
        NzInputModule,
        NzIconModule,
        NzCardModule,
        InfiniteScrollModule,
        RouterModule.forChild([
            {
                path: '',
                component: ListComponent,
                data: {
                    page: 'product'
                }
            },
            {
                path: 'detail/:id',
                component: DetailComponent
            }
        ]),
        FormsModule,
        NzDrawerModule,
        PostCreateModule,
        NzModalModule,
        TranslateModule,
        NzImageModule
    ],
  exports: [
    ListComponent
  ]
})
export class ProductModule { }
