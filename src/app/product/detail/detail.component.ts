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
  outputs: ['edit', 'delete', 'close']
})
export class DetailComponent implements OnInit {
  product?: ProductModel;
  img = img;
  edit = new EventEmitter();
  delete = new EventEmitter();
  close = new EventEmitter();

  constructor(
    private readonly activaRoute: ActivatedRoute,
    private readonly service: ProductService,
    public readonly profileService: AuthorizationService
  ) {}

  ngOnInit(): void {}

  deleteFunc() {
    this.service.delete(this.product?.id).subscribe(()=>{
      this.delete.emit()
    })
  }

  editFunc() {
    this.edit.emit()
  }

  closeFunc() {
    this.close.emit()
  }
}
