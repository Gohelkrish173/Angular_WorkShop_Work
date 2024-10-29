import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  students = ['arjun','darshan','rajkot','gujarat']

  tempStudentName = '';

  idToUpdate = -1;

  addStudent(){
    this.students.push(this.tempStudentName);
    this.tempStudentName = ""
  }

  editStudent(){
    this.students[this.idToUpdate] = this.tempStudentName;
    this.tempStudentName = ""
    this.idToUpdate = -1;
  }

  setForEdit(name:any){
    this.tempStudentName=name;
    this.idToUpdate = this.students.indexOf(name);
  }

  deleteStudent(name:any){
    this.students.splice(this.students.indexOf(name),1);
    
  }
}
