import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

class temp{
  id:number;
  name:string;
  image:string;
  age:number;
  exp:number;

  constructor(){
    this.id = 0,
    this.name = '',
    this.image = '',
    this.age = 0,
    this.exp = 0
  }
}

@Component({
  selector: 'app-faculty',
  standalone: true,
  imports: [CommonModule , RouterLink , FormsModule],
  templateUrl: './faculty.component.html',
  styleUrl: './faculty.component.css'
})



export class FacultyComponent {
  Fac:temp[] = [
    {
      id : 1,
      name : 'arjun bala',
      image : 'https://darshan.ac.in/U01/Faculty-Photo/15---28-04-2023-02-07-35.jpg',
      age : 30,
      exp : 13, 
    },

    {
      id : 2,
      name : 'nilesh gambhava',
      image : 'https://darshan.ac.in/U01/Faculty-Photo/3---28-04-2023-02-02-42.jpg',
      age : 35,
      exp : 20,
    }
  ]

  Y = -1;
  FF = new Array();

  tempFac = new temp();
  ST = '';
  

  addFac(){
    this.Fac.push(this.tempFac);
    this.tempFac = new temp();
  }

  editFac(){
    this.Fac[this.Y].id = this.tempFac.id;
    this.Fac[this.Y].name = this.tempFac.name;
    this.Fac[this.Y].image = this.tempFac.image;
    this.Fac[this.Y].age = this.tempFac.age;
    this.Fac[this.Y].exp = this.tempFac.exp;
    this.tempFac = new temp();
    this.Y = -1;
  }

  setEdit(n:any){
    this.Y = n-1;
    this.tempFac.id = this.Fac[this.Y].id;
    this.tempFac.name = this.Fac[this.Y].name;
    this.tempFac.image = this.Fac[this.Y].image;
    this.tempFac.age = this.Fac[this.Y].age;
    this.tempFac.exp = this.Fac[this.Y].exp;
    
  }

  remove(n:any){
    this.Fac.splice(this.Fac.indexOf(n),1);
  }

    searchFac(){
      this.FF = this.Fac.filter(T => T.name.toLowerCase().includes(this.ST.toLowerCase()));
    }
}
