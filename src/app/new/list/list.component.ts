import { Component } from '@angular/core';
import {NewService} from "../service/service.service";
import {NewModel} from "../new.model";
import {NzModalService} from "ng-zorro-antd/modal";
import {img} from "../../app.component";

@Component({
  selector: 'new-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class NewListComponent {
  data: NewModel[] = [];
  new?:NewModel;
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
    this.new = newModel
  }

  deleteModel() {
    if (this.new) {
      const index = this.data.indexOf(this.new)
      this.data.splice(index, 1)
      this.new = undefined;
    }
  }

    protected readonly img = img;
}
