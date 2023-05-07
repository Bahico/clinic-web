import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {YaEvent} from "angular8-yandex-maps";
import {HttpClient} from "@angular/common/http";
import {NzModalService} from "ng-zorro-antd/modal";
import {url} from "../../app.component";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {
  coords1: any;
  coords2: any;
  loading = false;
  constructor(
    protected translateService: TranslateService,
    private http: HttpClient,
    private readonly nzModal: NzModalService
    ) {
  }
  onMapClick(e: YaEvent<ymaps.Map>): void {
    const { target, event } = e;
    if (!target.balloon.isOpen()) {
      const coords = event.get('coords');
      target.balloon.open(coords, {
        contentBody: `<p>Location: ${[coords[0].toPrecision(6), coords[1].toPrecision(6)].join(
          ', '
        )}</p>`,
      });

      this.coords1 = coords[0];
      this.coords2 = coords[1];
    } else {
      target.balloon.close();
    }
  }

  onMapBalloonOpen({ target }: YaEvent<ymaps.Map>): void {
    target.hint.close();
  }

  save() {
    this.loading = true
    this.http.post(url+'user/location/', {longitude: this.coords1, latitude: this.coords2}).subscribe(data=>{
      this.nzModal.closeAll()
    })
  }
}
