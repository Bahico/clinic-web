import { Component } from '@angular/core';
import {AboutService} from "../service/about.service";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NgIf} from "@angular/common";
import {NzModalService} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  imports: [
    NzButtonModule,
    NgIf
  ],
  standalone: true
})
export class AboutCreate {
  image: any;
  pdf: any;
  constructor(
    private readonly service: AboutService,
    private readonly nzModal: NzModalService
  ) {
  }

  change(event: any, name: string) {
      if (name === 'image') {
        this.image = event.target.files[0]
      } else {
        this.pdf = event.target.files[0]
      }
  }

  save() {
    const formData = new FormData()
    formData.append('image', this.image)
    formData.append('pdf', this.pdf)
    this.service.create(formData).subscribe(data=>{
      this.nzModal.closeAll()
    })
  }
}
