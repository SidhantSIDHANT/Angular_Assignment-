import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdcutDetailsComponent } from './sheard/pages/prodcut-details/prodcut-details.component';
import { SingInComponent } from './sheard/pages/sing-in/sing-in.component';
import { NavbarComponent } from './sheard/pages/navbar/navbar.component';
import { AuthGurdService } from './sheard/service/authGurd-service';

const routes: Routes = [{
  path : "", component : SingInComponent
},{
  path : 'navbar',
  canActivate : [AuthGurdService],
   component : NavbarComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
