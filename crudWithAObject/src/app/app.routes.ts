import { Routes } from '@angular/router';
import { FacultyComponent } from './faculty/faculty.component';
import { StudentComponent } from './student/student.component';
import { LeptopComponent } from './leptop/leptop.component';

export const routes: Routes = [
  {path:'faculty' , component:FacultyComponent},
  {path:'student' , component:StudentComponent},
  {path:'leptop' , component:LeptopComponent},
];
