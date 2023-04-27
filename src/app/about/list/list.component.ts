import { Component } from '@angular/core';
import {AboutService} from "../service/about.service";
import {PartnerModel} from "../partner.model";
import {NgForOf, NgIf} from "@angular/common";
import {url} from "../../app.component";
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
export class AboutListComponent {
  page?: string
  data: PartnerModel[] = []
  constructor(
    private readonly service: AboutService,
    public readonly profileService: AuthorizationService,
  ) {
    service.all().subscribe(data=>{
      this.data = data
    })
  }

  protected readonly url = url;
}
