import { Component, OnInit } from '@angular/core';
import {FormBuilder, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';

import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import {AuthorizationService} from "../authorization.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',

  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public editForm = this.fb.group({
    full_name: [null, [Validators.required, Validators.maxLength(100), Validators.minLength(10)]],
    phone_number: [null, [Validators.required, Validators.maxLength(12), Validators.minLength(12)]],
    password: [null, Validators.required]
  })
  confirmation = false;
  confirmationStr = ''
  error = false;
  constructor(
    private readonly fb: FormBuilder,
    private readonly service: AuthorizationService,
    private readonly route: Router
  ) { }

  ngOnInit() {
  }
  save() {
    this.service.create(this.editForm.value).subscribe(data=>{
      this.confirmation = true;
      this.service.token = data
      localStorage.setItem('token', data)
    }, error => {
      this.error = true
    })
  }
  clickConfirmation() {
    this.service.update({'code': this.confirmationStr}).subscribe(data=>{
      this.route.navigate(['/']).then(() => {
          this.service.detail().subscribe(data=>{
            this.service.user = data
          }, () => {
            this.service.user = undefined
          })

        })
    })
  }
}
