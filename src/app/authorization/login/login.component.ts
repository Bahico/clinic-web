import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthorizationService} from "../authorization.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public editForm = this.fb.group({
    phone_number: [null, [Validators.required, Validators.maxLength(12), Validators.minLength(12)]],
    password: [null, Validators.required]
  })
  error = false;
  constructor(
    private readonly fb: FormBuilder,
    private readonly service: AuthorizationService,
    private readonly route: Router
  ) { }

  ngOnInit(): void {
  }
  save() {
    this.service.login(this.editForm.value).subscribe(data=>{
      localStorage.setItem('token', data)
      this.service.detail().subscribe(data=>{
        this.service.user = data
      })
      this.route.navigate(['/']).then()
    }, error => {
      this.error = true;
    })
  }
}
