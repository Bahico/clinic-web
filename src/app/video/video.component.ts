import { Component } from '@angular/core';
import {VideoModel} from "./video.model";
import {VideoService} from "./video.service";
import {img} from "../app.component";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent {

  data:VideoModel[] = []

  constructor(
    private readonly service: VideoService
  ) {
    service.getAll().subscribe(data=> this.data = data)
  }

  delete(video: VideoModel) {
    this.service.delete(video.id).subscribe(data=>{
      const index = this.data.indexOf(video)
      this.data.splice(index, 1)
    })
  }

  protected readonly img = img;
}
