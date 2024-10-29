import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacultyComponent } from './faculty/faculty.component';
import { StudentComponent } from './student/student.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';

const routes: Routes = [
  {path:'faculty' , component : FacultyComponent},
  {path:'student' , component : StudentComponent},
  {path:'student/:id' , component : DetailStudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
