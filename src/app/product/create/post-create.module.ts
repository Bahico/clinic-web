import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostCreateComponent} from "./create.component";
import {ReactiveFormsModule} from "@angular/forms";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzButtonModule} from "ng-zorro-antd/button";
import { PlusCircleOutline } from '@ant-design/icons-angular/icons';
import {ProductService} from "../product.service";
import {NgxPhotoEditorModule} from "ngx-photo-editor";
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
    declarations: [
        PostCreateComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NzInputModule,
        NzIconModule,
        NzButtonModule,
        NzIconModule.forChild([PlusCircleOutline]),
        NgxPhotoEditorModule,
        TranslateModule,
    ],
    exports: [
        PostCreateComponent
    ],
    providers: [ProductService]
})
export class PostCreateModule { }
