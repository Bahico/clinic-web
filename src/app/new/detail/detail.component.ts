import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NewModel} from "../new.model";
import {AuthorizationService} from "../../authorization/authorization.service";
import {NzModalService} from "ng-zorro-antd/modal";
import {NewCreateComponent} from "../create/create.component";
import {NewService} from "../service/service.service";

@Component({
  selector: 'new-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class NewDetailComponent {
  @Input() newModel?: NewModel;
  @Output() deleteModal = new EventEmitter<boolean>()

  constructor(
    public readonly profileService: AuthorizationService,
    private readonly nzModal: NzModalService,
    private readonly service: NewService,
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
  delete() {
    //@ts-ignore
    this.service.delete(this.newModel?.id).subscribe(()=>{
      this.deleteModal.emit(true)
      this.nzModal.closeAll()
    })
  }
}
