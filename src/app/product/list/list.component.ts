import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProductService} from "../product.service";
import {ProductModel} from "../product.model";
import {debounceTime, distinctUntilChanged, fromEvent, map} from 'rxjs';
import {NzModalService} from "ng-zorro-antd/modal";
import {PostCreateComponent} from "../create/create.component";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'product-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  inputs: ['page']
})
export class ListComponent implements OnInit, AfterViewInit {
  page = '';
  visible = false;
  id?: ProductModel;
  @ViewChild('input1') input?: ElementRef;
  constructor(
    public readonly service: ProductService,
    private readonly activateModal: NzModalService,
    private readonly route:Router
  ) { }

  ngOnInit(): void {
    this.service.list().subscribe(data=>{
      this.service.data = data.results
      this.service.next = data.next
    })
    console.log(this.page)
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
          this.service.data = data.results
          this.service.next = data.next
        })
      });
    }, 1000)
  }

  onScrolled() {
    this.service.scroll().subscribe(data => {
      this.service.data.push(...data.results)
      this.service.next = data.next
    })
  }
  clickCancel(id?: ProductModel) {
    this.id = id
    this.visible = !this.visible
  }

  clickEdit(event: any) {
    if (event !== false) {
      this.activateModal.create({
        nzContent: PostCreateComponent,
        nzComponentParams: {product: event},
        nzFooter: null
      })
    } else {
      this.id = undefined
    }
  }

  clickDescription() {
    console.log('eeee')
    this.route.navigate(['employee/']).then()
  }
}
