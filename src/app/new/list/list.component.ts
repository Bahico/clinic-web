import { Component } from '@angular/core';
import {NewService} from "../service/service.service";
import {NewModel} from "../new.model";

@Component({
  selector: 'new-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class NewListComponent {
  data: NewModel[] = [];
  constructor(
    private readonly service: NewService
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

}
