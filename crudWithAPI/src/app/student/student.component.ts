import { Component } from '@angular/core';
import { ApiStudentService } from '../api-student.service';
import { ActivatedRoute, Router } from '@angular/router';

class student{
  RNo : number;
  Name : string;
  ENR   : number;
  Mobile  : number;
  SPI   : number;

  constructor(){
    this.RNo = 0;
    this.Name = '';
    this.ENR = 0;
    this.Mobile = 0;
    this.SPI = 0.0;
  }
  

}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  constructor(private _api: ApiStudentService , private activatedRoute : ActivatedRoute ,private _router : Router){}
  
  stu : student[] = [];

  ngOnInit(){
    let something = this._api.getAll();
      something.subscribe((res:any)=>{
        this.stu = res;
      })
  }

  deleteById(id : any){
    this._api.delete(id).subscribe((res : any)=>{
      this.ngOnInit();
    })
  }

  detail(id : any){
    this._router.navigate(['student/',id])
  }
}
