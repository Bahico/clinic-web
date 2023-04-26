import { Component } from '@angular/core';
import {NewService} from "../service/service.service";
import {NewModel} from "../new.model";
import {NzModalService} from "ng-zorro-antd/modal";
import {NewDetailComponent} from "../detail/detail.component";

@Component({
  selector: 'new-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class NewListComponent {
  data: NewModel[] = [];
  constructor(
    private readonly service: NewService,
    private readonly nzModal: NzModalService
  ) {
    service.all().subscribe(data=>{
      this.data = data.results;
      service.nextUrl = data.next;
    })
  }

  next() {
    this.service.next().subscribe(data=>{
      this.service.nextUrl = data.next;
      this.data.push(...data.results)
    })
  }

  detail(newModel: NewModel) {
    this.nzModal.create({
      nzContent: NewDetailComponent,
      nzComponentParams: {
        newModel: newModel
      },
      nzFooter: null,
      nzWidth: '600px'
    })
  }
}
