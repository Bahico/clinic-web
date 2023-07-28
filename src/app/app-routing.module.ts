import { NgModule } from "@angular/core";
import {ActivatedRoute, RouterModule, Routes} from "@angular/router";
import { AuthGuard } from "./auth.guard";
import {HomeComponent} from "./home/home.component";
import {SettingsComponent} from "./settings/settings.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'new',
    loadChildren: () => import('./new/new.module').then(m=>m.NewModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
  },
  {
    path: 'new',
    loadChildren: () => import('./new/new.module').then(m => m.NewModule)
  },
  {
    path: 'authorization',
    loadChildren: () => import('./authorization/authorization.module').then(m => m.AuthorizationModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
