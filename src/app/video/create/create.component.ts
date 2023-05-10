import { Component } from '@angular/core';
import {NzModalService} from "ng-zorro-antd/modal";
import {VideoService} from "../video.service";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
})
export class VideoCreateComponent {
  videoUrl = '';

  constructor(
    private readonly nzModal: NzModalService,
    private readonly videoService: VideoService,
    private readonly nzMessage: NzMessageService
  ) {
  }

  create() {
    this.videoService.create({video: this.videoUrl}).subscribe(()=>{
      this.nzMessage.success('Video muovafaqiyatli yaratildi!')
      this.nzModal.closeAll()
    })
  }

  cancel() {
    this.nzModal.closeAll()
  }
}
