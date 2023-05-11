import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {PostCreateModule} from "./product/create/post-create.module";
import {NzModalModule} from "ng-zorro-antd/modal";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from './app-routing.module';
import {EmployeeCreateModule} from "./employee/create/employee-create.module";
import {HomeComponent} from './home/home.component';
import {NzButtonModule} from "ng-zorro-antd/button";
import {FooterComponent} from './footer/footer.component';
import {NzIconModule} from "ng-zorro-antd/icon";
import {
  AimOutline,
  PhoneOutline,
  MailOutline,
  PlusCircleOutline,
  PlusOutline,
  MenuOutline
} from "@ant-design/icons-angular/icons";
import {ProductModule} from "./product/product.module";
import {EmployeeModule} from "./employee/employee.module";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzOutletModule} from "ng-zorro-antd/core/outlet";
import { SettingsComponent } from './settings/settings.component';
import {NzFormModule} from "ng-zorro-antd/form";
import {NzStatisticModule} from "ng-zorro-antd/statistic";
import { RequestHandlerInterceptor } from './core/request-handler.interpretator';
import {AboutListComponent} from "./about/list/list.component";
import {AngularYandexMapsModule} from "angular8-yandex-maps";
import { LocationComponent } from './settings/location/location.component';
import { VideoComponent } from './video/video.component';
import { NzMessageService } from 'ng-zorro-antd/message';
import { VideoCreateComponent } from './video/create/create.component';
import {NzInputModule} from "ng-zorro-antd/input";
import { YoutubeUrlPipe } from './video/youtube-url.pipe';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        FooterComponent,
        SettingsComponent,
        LocationComponent,
        SettingsComponent,
        VideoComponent,
        VideoCreateComponent,
        YoutubeUrlPipe
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NzLayoutModule,
        NzMenuModule,
        PostCreateModule,
        NzModalModule,
        HttpClientModule,
        EmployeeCreateModule,
        NzButtonModule,
        NzIconModule,
        NzIconModule.forChild([AimOutline, PhoneOutline, PlusCircleOutline, MailOutline, PlusOutline, MenuOutline]),
        ProductModule,
        EmployeeModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        NzOutletModule,
        NzFormModule,
        NzStatisticModule,
        AboutListComponent,
        AngularYandexMapsModule,
        NzInputModule,
        FormsModule,
    ],
    providers: [
        NzMessageService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestHandlerInterceptor,
            multi: true
        }
    ],
    exports: [
        YoutubeUrlPipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
