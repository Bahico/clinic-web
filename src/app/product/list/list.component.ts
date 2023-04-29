import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProductService} from "../product.service";
import {ProductModel} from "../product.model";
import {debounceTime, distinctUntilChanged, fromEvent, map} from 'rxjs';
import {url} from "../../app.component";

@Component({
  selector: 'product-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  inputs: ['page']
})
export class ListComponent implements OnInit, AfterViewInit {

  page = '';
  visible = false;
  product?: ProductModel;
  edit = false;
  @ViewChild('input1') input?: ElementRef;
  data: ProductModel[] = [];

  constructor(
    public readonly service: ProductService,
  ) { }

  ngOnInit(): void {
    this.service.list().subscribe(data=>{
      this.data = data.results
      this.service.next = data.next
    })
  }
  ngAfterViewInit() {
    setTimeout(() => {
      fromEvent(this.input?.nativeElement, 'keyup').pipe(
        map((event: any) => {
          return event.target.value;
        })
        , debounceTime(1000)
        , distinctUntilChanged()
      ).subscribe((text: string) => {
        this.service.list().subscribe(data=>{
          this.data = data.results
          this.service.next = data.next
        })
      });
    }, 1000)
  }

  delete() {
    if (this.product) {
      const index = this.data.indexOf(this.product)
      this.data.splice(index, 1);
      this.product = undefined;
      this.visible = false;
    }
  }

  onScrolled() {
    this.service.scroll().subscribe(data => {
      this.data.push(...data.results)
      this.service.next = data.next
    })
  }
  clickCancel(id?: ProductModel) {
    this.product = id
    this.visible = !this.visible
  }

  editProduct(event: ProductModel) {
    if (this.product) {
      const index = this.data.indexOf(this.product);
      event.image = url+event.image;
      this.data[index] = event;
      this.visible = false;
      this.product = undefined;
      this.edit = false;
    }
  }
}
