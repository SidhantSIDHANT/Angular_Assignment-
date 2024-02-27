import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddTemplateComponent implements OnInit {
  productForm !: FormGroup;
  constructor() { }

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

  }

  addStructuredFeilds(): void {
    const formControl = new FormControl(null, [Validators.required]);
    if (this.getStructureFeild.length < 6) {
      this.getStructureFeild.push(formControl)
    }
  }

  get getStructureFeild() {
    return this.productForm.get("structureFeild") as FormArray
  }

  get productFormControls() {
    return this.productForm.controls;
  }
}
