import { Component, OnInit } from '@angular/core';
import {UntypedFormBuilder, Validators} from "@angular/forms";
import {DomSanitizer} from "@angular/platform-browser";
import {NzModalService} from "ng-zorro-antd/modal";
import {EmployeeService} from "../employee.service";
import {NgxPhotoEditorService} from "ngx-photo-editor";
import {EmployeeModel} from "../employee.model";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  inputs: ['employee']
})
export class EmployeeCreateComponent implements OnInit {
  employee?: EmployeeModel;
  editForm = this.fb.group({
    first_name: [null, [Validators.maxLength(40), Validators.minLength(5), Validators.required]],
    last_name: [null, [Validators.maxLength(40), Validators.minLength(5), Validators.required]],
    age: [null, [Validators.min(10), Validators.max(100),Validators.required]],
    certificate: [null, Validators.required],
    image: [null, Validators.required],
    description: [null, Validators.required],
  })
  img?: string = '';
  url = false;
  error = false;
  constructor(
    private readonly sanitizer: DomSanitizer,
    private readonly fb: UntypedFormBuilder,
    private readonly activeModal: NzModalService,
    private readonly service: EmployeeService,
    private readonly photoService: NgxPhotoEditorService
  ) { }

  ngOnInit(): void {
    if (this.employee) {
      this.editForm.patchValue({...this.employee})
      this.url = true
      this.img = this.employee.image
    }
  }
  save() {
    if (!this.employee) {
      const updateForm = new FormData()
      updateForm.append('last_name', this.editForm.value.last_name)
      updateForm.append('first_name', this.editForm.value.first_name)
      updateForm.append('description', this.editForm.value.description)
      updateForm.append('image', this.editForm.value.image)
      updateForm.append('certificate', this.editForm.value.certificate)
      updateForm.append('age', this.editForm.value.age)
      this.service.create(updateForm).subscribe(data => {
        if (this.service.data.length !== 3)
          this.service.data.push(data)
        this.activeModal.closeAll()
      }, () => {
        this.error = true
      })
    } else {
      this.service.update(this.editForm.value, this.employee.id).subscribe(()=>{
        this.activeModal.closeAll()
      }, () => {
        this.error = true
      })
    }
  }

  close() {
    this.activeModal.closeAll()
  }
  clickChange(event: any) {
    this.photoService.open(event, {
      aspectRatio: 1,
      autoCropArea: 1
    }).subscribe(data => {
      this.url = false;
      this.img = data.base64;
      this.editForm.patchValue({image:data.file});
    });
  }
  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  change(event: any) {
    this.editForm.patchValue({certificate: event.target.files[0]})
  }
}
