import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  tempStudent = "";
  students = ['abc','xyz'];
  filteredStudents = [''];
  idToEdit = -1;
  searchText = '';

  addStudent(){
    this.students.push(this.tempStudent);
    this.tempStudent = ""
  }

  deleteStudent(id:any){
    this.students.splice(id,1);
  }

  setForEdit(id:any){
    this.tempStudent = this.students[id];
    this.idToEdit = id;
  }

  editStudent(){
    this.students[this.idToEdit] = this.tempStudent;
    this.tempStudent = ''
    this.idToEdit = -1;
  }
  searchStudents(){
    this.filteredStudents = this.students.filter((stu:string)=>{
      return stu.indexOf(this.searchText)>-1;
    })
  }
}
