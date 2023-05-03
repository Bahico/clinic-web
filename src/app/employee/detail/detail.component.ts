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
  outputs: ['close', 'edit', 'delete'],
})
export class DetailComponent implements OnInit {
  user?: EmployeeModel;
  delete = new EventEmitter()
  edit = new EventEmitter();
  close = new EventEmitter()
  constructor(
    private readonly service: EmployeeService,
    public readonly profileService: AuthorizationService
  ) { }

  ngOnInit(): void {
  }

  clickExit() {
    this.close.emit(false);
  }

  deleteFunc() {
    if (this.user)
    this.service.delete(this.user?.id).subscribe(()=>{
      this.delete.emit()
    })
  }
  editFunc() {
    this.edit.emit(this.user)
  }
}
