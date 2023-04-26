import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {DomSanitizer} from "@angular/platform-browser";
import {NgxPhotoEditorService} from "ngx-photo-editor";
import {NewService} from "../service/service.service";
import {NzModalService} from "ng-zorro-antd/modal";
import {NewModel} from "../new.model";

@Component({
  selector: 'new-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class NewCreateComponent implements OnInit {
  newModel?: NewModel;
  error = false;
  editForm = this.fb.group({
    image: [null],
    video: [null],
    pdf: [null],
    title: [null, [Validators.required, Validators.maxLength(240), Validators.minLength(5)]],
    description: [null, Validators.required],
  });
  img: string | undefined = '';
  url = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly sanitizer: DomSanitizer,
    private readonly photoService: NgxPhotoEditorService,
    private readonly service: NewService,
    private readonly activeModal: NzModalService,
  ) {
  }

  ngOnInit() {
    if (this.newModel) {
      // @ts-ignore
      this.editForm.patchValue({...this.newModel})
      this.url = true;
      this.img = this.newModel.image
    }
  }


  save() {
    const formData: any = new FormData()
    formData.append('title', this.editForm.value.title)
    formData.append('description', this.editForm.value.description)
    this.editForm.value.image ? formData.append('image', this.editForm.value.image) : undefined
    this.editForm.value.video ? formData.append('video', this.editForm.value.video) : undefined
    this.editForm.value.pdf ? formData.append('pdf', this.editForm.value.pdf) : undefined
    if (this.newModel) {
      this.service.update(formData, this.newModel.id).subscribe(data=>{
        this.activeModal.closeAll()
      })
    } else
      this.service.create(formData).subscribe(() =>{
        this.activeModal.closeAll()
      })
  }

  close() {

  }

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  clickChange($event: any) {
    this.photoService.open($event, {
      aspectRatio: 1,
      autoCropArea: 1
    }).subscribe((data: any) => {
      this.url = false;
      this.img = data.base64;
      this.editForm.patchValue({image: data.file});
    });
  }
  change(event: any, name: string) {
    if (name === 'video')
      this.editForm.patchValue({video: event.target.files[0]})
    else
      this.editForm.patchValue({pdf: event.target.files[0]})
  }
}
