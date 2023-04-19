import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import {RouterModule} from "@angular/router";
import { DetailComponent } from './detail/detail.component';
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";
import {PlusOutline} from "@ant-design/icons-angular/icons";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {EmployeeCreateModule} from "./create/employee-create.module";
import {NzModalModule} from "ng-zorro-antd/modal";
import {TranslateModule} from "@ngx-translate/core";
import {NzImageModule} from "ng-zorro-antd/image";



@NgModule({
    declarations: [
        ListComponent,
        DetailComponent
    ],
    exports: [
        ListComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: ListComponent
            }
        ]),
        NzButtonModule,
        NzIconModule.forChild([PlusOutline]),
        NzIconModule,
        InfiniteScrollModule,
        EmployeeCreateModule,
        NzModalModule,
        TranslateModule,
        NzImageModule
    ]
})
export class EmployeeModule { }
