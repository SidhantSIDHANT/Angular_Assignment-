import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from "@angular/material/icon"
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTreeModule,
    MatIconModule,
    MatTableModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [MatTreeModule,
    MatIconModule,
    MatTableModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MaterialModule { }
