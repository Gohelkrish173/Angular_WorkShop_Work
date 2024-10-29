import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiStudentService } from '../api-student.service';
import { student } from '../DAO/Student';

@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrl: './detail-student.component.css'
})
export class DetailStudentComponent {
  
  constructor(private _api : ApiStudentService ,private _router : Router ,private  _activatedRoute : ActivatedRoute){}

  stu:student = new student();
  ngOnInit(){
    this._api.getByID(7).subscribe((res:any)=>{
      this.stu = res;
      console.log(res);
    })
  }
  
}
