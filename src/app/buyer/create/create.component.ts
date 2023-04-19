import { Component, OnInit } from '@angular/core';
import {BuyerService} from "../buyer.service";
import {BuyerModel} from "../buyer.model";

@Component({
  selector: 'buyer-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  id = localStorage.getItem('id');
  buyer?: BuyerModel;
  constructor(
    private readonly service:  BuyerService
  ) { }

  ngOnInit(): void {
    if (this.id) {
      this.service.detail(this.id).subscribe(data=>{
        this.buyer = data
      })
    }
  }
}
