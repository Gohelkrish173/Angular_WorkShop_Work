import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { DetailLaptopComponent } from './detail-laptop/detail-laptop.component';
import { AddLaptopComponent } from './add-laptop/add-laptop.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditLaptopComponent } from './edit-laptop/edit-laptop.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { SidebarClientComponent } from './sidebar-client/sidebar-client.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LaptopsComponent,
    DetailLaptopComponent,
    AddLaptopComponent,
    EditLaptopComponent,
    SidebarAdminComponent,
    SidebarClientComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
