import { Component } from '@angular/core';
import {NewModel} from "../new.model";
import {AuthorizationService} from "../../authorization/authorization.service";
import {NzModalService} from "ng-zorro-antd/modal";
import {NewCreateComponent} from "../create/create.component";

@Component({
  selector: 'new-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class NewDetailComponent {
  newModel?: NewModel;

  constructor(
    public readonly profileService: AuthorizationService,
    private readonly nzModal: NzModalService
  ) {}

  edit() {
    this.nzModal.create({
      nzContent: NewCreateComponent,
      nzComponentParams: {
        newModel: this.newModel
      },
      nzFooter: null,
      nzWidth: '500px'
    })
  }
}
