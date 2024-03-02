import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../service/product-service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DataService } from '../../service/data-service';
import { Iproduct } from '../../model/product';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit, OnDestroy {
  productForm !: FormGroup;
  isVisibleControls: boolean = false;
  unSubscript$: Subject<void> = new Subject<void>();
  id !: string;

  constructor(private _prodcutService: ProductService,
    private dataService: DataService,
    private _fb: FormBuilder, private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.editProduct();
  }

  createForm(): void {
    this.productForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      region: new FormControl(null, [Validators.required]),
      modifidedBy: new FormControl(null, [Validators.required]),
      modifiedOn: new FormControl(null, [Validators.required]),
      formArray: this._fb.array([]),
      templateId: new FormControl(null, [Validators.required])
    })
  }

  editProduct(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this._prodcutService.getProducts().subscribe((data: Iproduct[]) => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].id == this.id) {
            this.productForm.patchValue({
              name: data[i].name,
              region: data[i].region,
              modifidedBy: data[i].modifidedBy,
              modifiedOn: data[i].modifiedOn,
              formArray: data[i].formArray,
              templateId: data[i].templateId
            })
            break;
          }
        }
      })
    })
  }

  onSubmit(): void {
    if (!this.isVisibleControls) {
      alert("CREATE STRURCTURE")
    }
    if (this.productForm.valid) {
      this.router.navigate(["/navbar"]);
      localStorage.setItem("productForm", JSON.stringify(this.productForm.value));
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

  updateProduct(): void {
    if (this.productForm.valid) {
      localStorage.setItem('poroductForm', JSON.stringify(this.productForm.value));
      this._prodcutService.updateSingleProduct(this.id, this.productForm.value).subscribe((element) => { }, (err) => { });
      this.router.navigate(['/navbar']);
    } else if (!this.isVisibleControls) {
      alert('please create structrue')
    }
  }

  get getformArray() {
    return this.productForm.get("formArray") as FormArray
  }

  get formControls() {
    return this.productForm.controls;
  }

  ngOnDestroy(): void {
    setTimeout(() => {
      this.unSubscript$.next();
      this.unSubscript$.complete()
    }, 1000)
  }
}
