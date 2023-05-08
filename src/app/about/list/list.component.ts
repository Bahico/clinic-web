import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AboutService} from "../service/about.service";
import {PartnerModel} from "../partner.model";
import {NgForOf, NgIf} from "@angular/common";
import {img, url} from "../../app.component";
import {NzButtonModule} from "ng-zorro-antd/button";
import {AuthorizationService} from "../../authorization/authorization.service";

@Component({
  selector: 'about-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: true,
  imports: [
    NgForOf,
    NzButtonModule,
    NgIf
  ],
  inputs: ['page']
})
export class AboutListComponent implements OnInit {
  page?: string;
  data: PartnerModel[] = [];
  @ViewChild('partners') partnersTag?: ElementRef;
  constructor(
    private readonly service: AboutService,
    public readonly profileService: AuthorizationService,
  ) {}

  ngOnInit() {
    this.service.all().subscribe(data=>{
      this.data = data;
      if (this.partnersTag) {
        this.partnersTag.nativeElement.style = `width: ${data.length * 200}px`;
      }
    })
  }

  delete(id: number) {
    this.service.delete(id).subscribe(data=>{
      this.data.forEach((partner, index) => {
        if (partner.id === id) this.data.splice(index, 1)
      })
    })
  }

  protected readonly url = url;
    protected readonly img = img;
}
