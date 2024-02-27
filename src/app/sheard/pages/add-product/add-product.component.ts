import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../service/product-service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddTemplateComponent implements OnInit , OnDestroy{
  productForm !: FormGroup;
  @Output() productEvent = new EventEmitter()
  unSubscript$ : Subject<void> = new Subject<void>()

  constructor(private _prodcutService : ProductService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.productForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      region: new FormControl(null, [Validators.required]),
      structureFeild: new FormArray([])
    })
  }


  onSubmit(): void {
    alert('hello')
   if(this.productForm.valid){
    this._prodcutService.addProducts(this.productForm.value).subscribe((data)=>{});
    this.productEvent.emit(false)
   }
  }

  addStructuredFeilds(): void {
    const formControl = new FormControl(null, [Validators.required]);
    if (this.getStructureFeild.length < 6) {
      this.getStructureFeild.push(formControl)
    }
  }

  
  concel() : void{
    this.productEvent.emit(false)
  }

  get getStructureFeild() {
    return this.productForm.get("structureFeild") as FormArray
  }

  get productFormControls() {
    return this.productForm.controls;
  }

  ngOnDestroy(): void {
      this.unSubscript$.next();
      this.unSubscript$.complete()
  }
}
