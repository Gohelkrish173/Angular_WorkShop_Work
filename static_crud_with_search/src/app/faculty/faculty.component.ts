import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-faculty',
  standalone: true,
  imports: [CommonModule,FormsModule , RouterLink],
  templateUrl: './faculty.component.html',
  styleUrl: './faculty.component.css'
})
export class FacultyComponent {
  Name = ['Arjun Sir' , 'Dharmik Sir' , 'Padyuman Sir'];
  ST = '';
  FS = [''];
  tempName = '';

  idToUpdate = -1;

  addFac(){
    this.Name.push(this.tempName);
    this.tempName = "";
  }

  editFac(){
    this.Name[this.idToUpdate] = this.tempName;
    this.tempName = "";
    this.idToUpdate=-1;
  }

  setToEdit(n : any){
    this.tempName = n;
    this.idToUpdate = this.Name.indexOf(n);
  }

  removeName(n : any){
    this.Name.splice(this.Name.indexOf(n));
  }

  searchFac(){{
    this.FS = this.Name.filter((fac : string)=>{
      return fac.toLowerCase().indexOf(this.ST.toLocaleLowerCase())>-1;
    })
  }}
}
