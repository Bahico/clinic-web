import { Component, OnInit } from '@angular/core';
import {EmployeeModel} from "../employee.model";
import {EmployeeService} from "../employee.service";
import {url} from "../../app.component";

@Component({
  selector: 'employee-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  inputs: ['page']
})
export class ListComponent implements OnInit {
  page = '';
  employee?: EmployeeModel;
  edit = false;
  data: EmployeeModel[] = [];

  constructor(
    public readonly service: EmployeeService,
  ) { }

  ngOnInit(): void {
    if (this.page === 'home') {
      this.service.home().subscribe(data=>{
        this.data = data.results
        this.service.next = data.next
      })
    } else {
      this.service.list().subscribe(data=>{
        this.data = data.results
        this.service.next = data.next
      })
    }
  }

  clickEmployee(employee: EmployeeModel) {
    this.employee = employee
  }

  onScrolled() {
    if (this.page !== 'home') {
      this.service.scroll().subscribe(data => {
        this.data.push(...data.results)
        this.service.next = data.next;
      })
    }
  }

  closeDetail() {
    this.employee = undefined;
  }

  clickEdit() {
    this.edit = true;
  }

  editEmployee(employee: EmployeeModel) {
    if (this.employee) {
      const index = this.data.indexOf(this.employee)
      employee.image = url+employee.image;
      employee.certificate = url+employee.certificate;
      this.data[index] = employee;
      this.employee = employee
    }
  }

  delete() {
    if (this.employee) {
      const index = this.data.indexOf(this.employee)
      this.data.splice(index, 1);
      this.employee = undefined;
    }
  }
}
