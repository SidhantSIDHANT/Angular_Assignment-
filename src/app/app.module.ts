import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sheard/pages/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './sheard/modules/material.module';
import { SidebarComponent } from './sheard/pages/sidebar/sidebar.component';
import { AddProductComponent } from './sheard/pages/add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProdcutDetailsComponent } from './sheard/pages/prodcut-details/prodcut-details.component';
import {HttpClientModule} from "@angular/common/http";
import { SingInComponent } from './sheard/pages/sing-in/sing-in.component';
import { SignUpComponent } from './sheard/pages/sign-up/sign-up.component';
import { StepperComponent } from './sheard/pages/stepper/stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    AddProductComponent,
    ProdcutDetailsComponent,
    SingInComponent,
    SignUpComponent,
    StepperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
