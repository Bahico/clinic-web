import { Component, OnInit } from '@angular/core';
import {EmployeeModel} from "../employee.model";
import {EmployeeService} from "../employee.service";
import {NzModalService} from "ng-zorro-antd/modal";
import {EmployeeCreateComponent} from "../create/create.component";

@Component({
  selector: 'employee-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  inputs: ['page']
})
export class ListComponent implements OnInit {
  page = '';
  employee?: EmployeeModel;
  constructor(
    public readonly service: EmployeeService,
    private readonly activateModal: NzModalService
  ) { }

  ngOnInit(): void {
    if (this.page === 'home') {
      this.service.home().subscribe(data=>{
        this.service.data = data.results
        this.service.next = data.next
      })
    } else {
      this.service.list().subscribe(data=>{
        this.service.data = data.results
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
        this.service.data.push(...data.results)
        this.service.next = data.next
      })
    }
  }

  clickEdit(event: any) {
    if (event !== false) {
      this.activateModal.create({
        nzContent: EmployeeCreateComponent,
        nzComponentParams: {employee:event},
        nzFooter: null
      })
    } else {
      this.employee = undefined
    }
  }
}
