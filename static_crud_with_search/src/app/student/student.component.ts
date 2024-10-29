import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule , RouterLink , FormsModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  Name = ['Krish', 'Jay' , 'Jash'];
  ST = '';
  FS = [''];
  X = -1;

  tempName = '';

  addStu(){
    this.Name.push(this.tempName);
    console.log(this.tempName);
    this.tempName="";
  }

  editStu(){
    this.Name[this.X] = this.tempName;
    this.tempName = "";
    this.X = -1;
  }

  setEdit(n : any){
    this.tempName = n;
    this.X = this.Name.indexOf(n);
  }

  delete(n : any){
    this.Name.splice(this.Name.indexOf(n));
  }

  searchStu(){
    this.FS = this.Name.filter((stu : string)=>{
      return stu.toLowerCase().indexOf(this.ST.toLocaleLowerCase())>-1;
    })
  }
}
