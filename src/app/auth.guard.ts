import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import {AuthorizationService} from "./authorization/authorization.service";


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _router: Router, private profile: AuthorizationService) { }

  canActivate(): boolean {
    return <boolean><unknown>this.profile.detail().subscribe(data=>{
      return true
    }, () => {
      this._router.navigate(['/authorization/login/'])
      return false
    })
  }
}
