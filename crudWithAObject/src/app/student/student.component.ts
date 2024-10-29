import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

class student{
  id : Number;
  name : string;
  birthdate : Date ;
  mobile  : Number;

  constructor(){
    this.id = 0;
    this.name = '';
    this.birthdate = new Date;
    this.mobile = 0;

  }
}

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule , RouterLink ,FormsModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  Y = -1;

  Stu : student[] = [
    {
      id : 1,
      name : 'Krish',
      birthdate : new Date(2005 , 2 ,17),
      mobile : 9558566847,
    },

    {
      id : 2,
      name : 'Jay',
      birthdate : new Date(2005 , 0, 1),
      mobile : 9825346562,
    },

    {
      id : 3,
      name : 'Jash',
      birthdate : new Date(2005, 0,2),
      mobile : 9484678399,
    }
  ];

  tempStu = new student();
  ST = '';
  FS = new Array();

  addStu(){
    this.Stu.push(this.tempStu);
    this.tempStu = new student();
  }

  editStu(){
    this.Stu[this.Y].id = this.tempStu.id;
    this.Stu[this.Y].name = this.tempStu.name;
    this.Stu[this.Y].birthdate = this.tempStu.birthdate;
    this.Stu[this.Y].mobile = this.tempStu.mobile;
    this.tempStu = new student();
    this.Y=-1;
  }

  setEdit(n : any){
    this.Y = n-1;
    this.tempStu.id = this.Stu[this.Y].id;
    this.tempStu.name = this.Stu[this.Y].name;
    this.tempStu.birthdate = this.Stu[this.Y].birthdate;
    this.tempStu.mobile = this.Stu[this.Y].mobile;
  }

  remove(n : any){
    this.Stu.splice(this.Stu.indexOf(n));
  }

  searchStu(){
    this.FS = this.Stu.filter(T => T.name.toLowerCase().includes(this.ST.toLowerCase()));
  }

}