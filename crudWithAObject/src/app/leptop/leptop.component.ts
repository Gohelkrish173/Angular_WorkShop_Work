import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

class leptop{
  id : number;
  Name : string;
  CName : string;
  SName : string;
  image : string;
  price : number;

  constructor(){
    this.id = 0;
    this.Name  = '';
    this.CName = '';
    this.SName = '';
    this.image = '';
    this.price = 0;
  }
}

@Component({
  selector: 'app-leptop',
  standalone: true,
  imports: [CommonModule , RouterLink , FormsModule],
  templateUrl: './leptop.component.html',
  styleUrl: './leptop.component.css'
})
export class LeptopComponent {
  Y = -1;

  lep : leptop[] = [
    {
      id : 1,
      Name : 'HP 15s (2023) AMD Ryzen 3 Quad Core 7320U - (8 GB/512 GB SSD/Windows 11 Home) 15-fc0026AU Thin and Light Laptop  (15.6 Inch, Natural Silver, 1.75 Kg, With MS Office)',
      SName : '15s',
      CName : 'HP',
      image : 'https://rukminim2.flixcart.com/image/416/416/xif0q/computer/s/1/l/-original-imagpecq3n9gbgeg.jpeg?q=70',
      price : 38990,
    },

    {
      id : 2,
      Name : 'Lenovo IdeaPad Slim 3 Intel Intel Core i5 11th Gen 1135G7 - (16 GB/512 GB SSD/Windows 11 Home) 15ITL6 Thin and Light Laptop  (15.6 inch, Arctic Grey, 1.65 Kg, With MS Office)',
      SName : 'IdeaPad Slim 3 Intel',
      CName : 'Lenovo',
      image : 'https://rukminim2.flixcart.com/image/416/416/xif0q/computer/9/d/n/-original-imaguyhzhbhqe8qj.jpeg?q=70',
      price : 47990
    }
  ];

  ST='';
  FL = new Array();

  tempLep = new leptop();

  addLep(){
    this.lep.push(this.tempLep);
  }

  editLep(){
    this.lep[this.Y].id = this.tempLep.id;
    this.lep[this.Y].Name = this.tempLep.Name;
    this.lep[this.Y].SName = this.tempLep.SName;
    this.lep[this.Y].CName = this.tempLep.CName;
    this.lep[this.Y].image = this.tempLep.image;
    this.lep[this.Y].price = this.tempLep.price;
    this.tempLep = new leptop();
    this.Y = -1;
  }

  setLep(n : any){
    this.Y = n-1;
    this.tempLep.id = this.lep[this.Y].id;
    this.tempLep.Name = this.lep[this.Y].Name;
    this.tempLep.SName = this.lep[this.Y].SName;
    this.tempLep.CName = this.lep[this.Y].CName;
    this.tempLep.image = this.lep[this.Y].image;
    this.tempLep.price = this.lep[this.Y].price;
  }

  removeLep(n : any){
    this.lep.splice(this.lep.indexOf(n));
  }

  searchLep(){
    this.FL = this.lep.filter(T => T.SName.toLowerCase().includes(this.ST.toLowerCase()));
  }
}
