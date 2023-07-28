import { Component } from '@angular/core';
import {NewService} from "../service/new.service";
import {NewModel} from "../new.model";

@Component({
  selector: 'new-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class NewListComponent {
  data: NewModel[] = [];
  constructor(
    private readonly service: NewService,
  ) {
    service.all().subscribe(data=>{
      this.data = data.results;
      service.next = data.next;
    })
  }

  next() {
    this.service.nextPage().subscribe(data=> {
      this.data.push(...data.results)
      this.service.next = data.next
    })
  }
}
