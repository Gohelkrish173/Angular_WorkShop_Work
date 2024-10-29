import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLaptopComponent } from './add-laptop/add-laptop.component';
import { authenicationGuard } from './authenication.guard';
import { DetailLaptopComponent } from './detail-laptop/detail-laptop.component';
import { EditLaptopComponent } from './edit-laptop/edit-laptop.component';
import { HomeComponent } from './home/home.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'laptops',component:LaptopsComponent,canActivate:[authenicationGuard]},
  {path:'laptop/add',component:AddLaptopComponent,canActivate:[authenicationGuard]},
  {path:'laptop/edit/:id',component:EditLaptopComponent,canActivate:[authenicationGuard]},
  {path:'laptop/:id',component:DetailLaptopComponent,canActivate:[authenicationGuard]},
  {path:'login',component:LoginComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
