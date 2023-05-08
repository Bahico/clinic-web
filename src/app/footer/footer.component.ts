import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {url} from "../app.component";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  longitude?: number;
  latitude?: number;

  constructor(
    private readonly http: HttpClient
  ) {
    this.http.get(url+'user/location/').subscribe((data: any)=>{
      this.longitude = data['longitude'];
      this.latitude = data['latitude'];
    }, () => {
      this.longitude = 40.62883571964234;
      this.latitude = 71.06467109781293;
    })
  }
}
