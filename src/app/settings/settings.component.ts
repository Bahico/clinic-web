import { Component } from '@angular/core';
import {SettingsService} from "./settings.service";
import {SettingsModel} from "./settings.model";
import {PostCreateComponent} from "../product/create/create.component";
import {EmployeeCreateComponent} from "../employee/create/create.component";
import {NzModalService} from "ng-zorro-antd/modal";
import {NewCreateComponent} from "../new/create/create.component";
import {AboutCreate} from "../about/create/create.component";
import {VideoService} from "../video/video.service";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  about?: SettingsModel;
  loading = false;
  constructor(
    protected servie: SettingsService,
    private readonly modal: NzModalService,
    private readonly videoService: VideoService,
    private readonly nzMessage: NzMessageService
  ) {
    servie.get().subscribe(data=>{
      this.about = data
    })
  }

  refresh() {
    this.loading = true;
    this.servie.put().subscribe(data=>{
      this.about = data;
      this.loading = false;
    })
  }

  videoCreate(event: any) {
    console.log(true)
    const formData = new FormData()
    formData.append('video', event.target.files[0])
    this.videoService.create(formData).subscribe(data=>{
      this.nzMessage.success('Video muovafaqiyatli yaratildi!')
    })
  }

  clickPostCreate() {
    this.modal.create({
      nzContent: PostCreateComponent,
      nzFooter: null,
      nzTitle: '',
      nzWidth: '600px'
    });
  }

  clickEmployeeCreate() {
    this.modal.create({
      nzContent: EmployeeCreateComponent,
      nzFooter: null,
      nzTitle: '',
      nzWidth: '600px'
    });
  }
  clickNewsCreate() {
    this.modal.create({
      nzContent: NewCreateComponent,
      nzFooter: null,
      nzTitle: '',
      nzWidth: '600px'
    });
  }
  clickPartnerCreate() {
    this.modal.create({
      nzContent: AboutCreate,
      nzFooter: null,
      nzTitle: '',
      nzWidth: '600px'
    });
  }

  protected readonly event = event;
}
