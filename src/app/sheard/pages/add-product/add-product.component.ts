import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../service/product-service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DataService } from '../../service/data-service';
import { Iproduct } from '../../model/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit, OnDestroy {
  productForm !: FormGroup;
  isVisibleControls: boolean = false;
  unSubscript$: Subject<void> = new Subject<void>()

  constructor(private _prodcutService: ProductService,
    private dataService: DataService,
    private _fb: FormBuilder, private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.editProduct();
  }

  createForm(): void {
    this.productForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      region: new FormControl(null, [Validators.required]),
      modifidedBy: new FormControl(null,),
      modifiedOn: new FormControl(null),
      formArray: this._fb.array([]),
      templateId: new FormControl(null)
    })
  }

  editProduct(): void {
    this.dataService.getProducts().subscribe((data: any) => { })
  }

  onSubmit(): void {
    alert('Create Structure')
    if (this.productForm.valid) {
      this.router.navigate(["/navbar"])
      this._prodcutService.addProducts(this.productForm.value).pipe(takeUntil(this.unSubscript$)).subscribe((data) => { });
    }
  }

  addFormsArray(): void {
    this.isVisibleControls = true;
    const formControl = new FormControl(null, [Validators.required]);
    if (this.getformArray.length > 0 && this.getformArray.length < 6) {
      this.getformArray.push(formControl)
    }
  }

  concel(): void {
    this.router.navigate(["/navbar"])
  }

  get getformArray() {
    return this.productForm.get("formArray") as FormArray
  }

  get formControls() {
    return this.productForm.controls;
  }

  ngOnDestroy(): void {
    this.unSubscript$.next();
    this.unSubscript$.complete()
  }
}
