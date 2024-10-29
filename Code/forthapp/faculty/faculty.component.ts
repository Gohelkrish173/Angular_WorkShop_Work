import { Component } from '@angular/core';

class Faculty{
  id:number;
  name:string;
  age:number;
  initial:string;

  constructor(){
    this.id=0;
    this.name='';
    this.age=0;
    this.initial=''
  }
}


@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrl: './faculty.component.css'
})
export class FacultyComponent {
  faculties:Faculty[] = [
    {id:1,name:'arjun',age:123,initial:'avb'},
    {id:2,name:'wasim sir',age:321,initial:'vjg'},
    {id:3,name:'vijay',age:52,initial:'vms'},
  ];

  tempFac = new Faculty();

  addFaculty(){
    this.faculties.push(this.tempFac)
    this.tempFac = new Faculty();
  }
}
