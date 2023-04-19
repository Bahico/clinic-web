import { Component, EventEmitter, OnInit } from '@angular/core';
import {img} from "../../app.component";
import {EmployeeModel} from "../employee.model";
import {EmployeeService} from "../employee.service";
import {AuthorizationService} from "../../authorization/authorization.service";

@Component({
  selector: 'employee-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  inputs: ['user'],
  outputs: ['active']
})
export class DetailComponent implements OnInit {
  user?: EmployeeModel;
  active = new EventEmitter<any>()
  constructor(
    private readonly service: EmployeeService,
    public readonly profileService: AuthorizationService
  ) { }

  ngOnInit(): void {
  }

  clickExit() {
    this.active.emit(false)
  }

  delete() {
    if (this.user)
    this.service.delete(this.user?.id).subscribe(data=>{
      if (this.user) {
        const index = this.service.data.indexOf(this.user)
        this.service.data.splice(index, 1)
      }
      this.active.emit(false)
    })
  }
  edit() {
    this.active.emit(this.user)
  }
}
