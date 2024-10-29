import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-laptop',
  standalone: true,
  imports: [CommonModule , RouterLink , FormsModule],
  templateUrl: './laptop.component.html',
  styleUrl: './laptop.component.css'
})
export class LaptopComponent {
  Name = ['Hp','Lanovo','Dell','Asus'];
  tempName = "";
  ST = '';
  FL = ['']
  Y = -1;

  addLep(){
    this.Name.push(this.tempName);
    this.tempName = "";
  }

  editLep(){
    this.Name[this.Y] = this.tempName;
    this.tempName = '';
    this.Y = -1;  
  }

  setEdit(n : any){
    this.tempName = this.Name[n];
    this.Y = n;
  }

  delete(n : any){
    this.Name.splice(n,1);
  }

  searchLep(){
    this.FL = this.Name.filter((L : string)=>{
      return L.toLowerCase().indexOf(this.ST.toLocaleLowerCase())>-1;
    })
  }
}
