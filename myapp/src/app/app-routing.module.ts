import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { BranchComponent } from './branch/branch.component';
import { HelpComponent } from './help/help.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { ServiceComponent } from './service/service.component';
import { KrishComponent } from './krish/krish.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'Home', component : HomeComponent},
  {path:'product', component: ProductComponent},
  {path:'about', component: AboutComponent},
  {path:'detail', component: DetailsComponent},
  {path:'branch', component: BranchComponent },
  {path:'about', component: HelpComponent},
  {path:'about', component: AnalysisComponent},
  {path:'service' , component:ServiceComponent},
  {path:'krish', component:KrishComponent},
  {path:'contact', component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
