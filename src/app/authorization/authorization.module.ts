import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {NzFormModule} from "ng-zorro-antd/form";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {RouterModule} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {NgxMaskModule} from "ngx-mask";
import {MaskService} from "ngx-mask/lib/mask.service";



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzCheckboxModule,
    RouterModule.forChild([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]),
    FormsModule,
    TranslateModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule
  ],
})
export class AuthorizationModule { }
