import { Component, EventEmitter, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../product.service";
import {ProductModel} from "../product.model";
import {img} from "../../app.component";
import {AuthorizationService} from "../../authorization/authorization.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  inputs: ['product'],
  outputs: ['active']
})
export class DetailComponent implements OnInit {
  product?: ProductModel;
  img = img;
  active = new EventEmitter<any>(true);
  constructor(
    private readonly activaRoute: ActivatedRoute,
    private readonly service: ProductService,
    public readonly profileService: AuthorizationService
  ) {}

  ngOnInit(): void {}

  delete() {
    this.service.delete(this.product?.id).subscribe(data=>{
      if (this.product) {
        const index = this.service.data.indexOf(this.product)
        this.service.data.splice(index, 1)
      }
      this.active.emit(false)
    })
  }

  edit() {
    this.active.emit(this.product)
  }
}
