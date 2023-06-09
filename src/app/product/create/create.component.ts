import {Component, EventEmitter, OnInit} from '@angular/core';
import {UntypedFormBuilder, Validators} from "@angular/forms";
import { DomSanitizer } from '@angular/platform-browser';
import {NzModalService} from "ng-zorro-antd/modal";
import {ProductService} from "../product.service";
import {NgxPhotoEditorService} from "ngx-photo-editor";
import {ProductModel} from "../product.model";
import { img } from 'src/app/app.component';

@Component({
  selector: 'product-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  inputs: ['product'],
  outputs: ['editedProduct']
})
export class PostCreateComponent implements OnInit {
  product?: ProductModel;
  editedProduct = new EventEmitter<ProductModel>()
  editForm = this.fb.group({
    id: [null, Validators.required],
    name: ['', [Validators.maxLength(300), Validators.minLength(10), Validators.required]],
    description: ['', Validators.required],
    image: [null, Validators.required],
    price: [null, Validators.required],
    pdf: [null, Validators.required]
  })
  img?: string = '';
  imgUrl = img
  url = false;
  error = false;

  constructor(
    private readonly sanitizer: DomSanitizer,
    private readonly fb: UntypedFormBuilder,
    private readonly activeModal: NzModalService,
    private readonly service: ProductService,
    private readonly photoService: NgxPhotoEditorService
  ) { }

  ngOnInit(): void {
    if (this.product) {
      this.editForm.patchValue({...this.product})
      this.url = true;
      this.img = this.product.image
    }
  }

  save() {
    if (this.product) {
      const updateForm = new FormData()
      updateForm.append('name', this.editForm.value.name)
      updateForm.append('description', this.editForm.value.description)
      updateForm.append('image', this.editForm.value.image)
      updateForm.append('pdf', this.editForm.value.pdf)
      updateForm.append('price', this.editForm.value.price)
      this.service.update(updateForm, this.product.id).subscribe(data=>{
        this.editedProduct.emit(data);
        this.activeModal.closeAll()
      }, () => {
        this.error = true
      })
    } else {
      const updateForm = new FormData()
      updateForm.append('name', this.editForm.value.name)
      updateForm.append('description', this.editForm.value.description)
      updateForm.append('image', this.editForm.value.image)
      updateForm.append('price', this.editForm.value.price)
      updateForm.append('pdf', this.editForm.value.pdf)
      this.service.create(updateForm).subscribe(data => {
        this.activeModal.closeAll()
      }, () => {
        this.error = true
      })
    }
  }

  changePdf($event: any) {
    this.editForm.patchValue({pdf: $event.target.files[0]})
  }

  close() {
    this.activeModal.closeAll()
  }
  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  clickChange($event: any) {
    this.photoService.open($event, {
      aspectRatio: 1,
      autoCropArea: 1
    }).subscribe(data => {
      this.url = false;
      this.img = data.base64;
      this.editForm.patchValue({image:data.file});
    });
  }

  protected readonly event = event;
}
