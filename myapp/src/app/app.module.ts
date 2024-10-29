import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { DetailsComponent } from './details/details.component';
import { BranchComponent } from './branch/branch.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { ServiceComponent } from './service/service.component';
import { KrishComponent } from './krish/krish.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ContactComponent,
    AboutComponent,
    HelpComponent,
    DetailsComponent,
    BranchComponent,
    AnalysisComponent,
    ServiceComponent,
    KrishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
