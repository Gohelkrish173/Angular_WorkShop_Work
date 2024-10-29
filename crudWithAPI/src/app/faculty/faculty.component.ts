import { Component } from '@angular/core';
import { ApiFacultyService } from '../api-faculty.service';

class faculty{
  name  : string;
  image : string;
  mobile : number;
  email : string;
  id  : number;

  constructor(){
    this.name = '';
    this.image = '';
    this.mobile = 0;
    this.email = '';
    this.id = 0;
  }
}

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrl: './faculty.component.css'
})
export class FacultyComponent {

  faculties : faculty[] = []
  X = -1;
  tempFac = new faculty();
  constructor(private _api : ApiFacultyService){}

  ngOnInit(){
    this._api.getAll().subscribe((res:any)=>{
      this.faculties = res;
    })
  }

  

}
