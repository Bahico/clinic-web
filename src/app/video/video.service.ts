import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { url } from '../app.component';
import {VideoModel} from "./video.model";

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  protected resourceUrl = url+'product/video/'
  constructor(
    private readonly http: HttpClient
  ) { }

  getAll() {
    return this.http.get<VideoModel[]>(this.resourceUrl)
  }

  delete(id: number) {
    return this.http.delete(this.resourceUrl+id+'/')
  }

  create(data: any) {
    return this.http.post<VideoModel>(this.resourceUrl, data)
  }
}
