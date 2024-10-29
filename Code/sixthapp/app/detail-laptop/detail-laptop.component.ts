import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiLaptopService } from '../api-laptop.service';
import { Laptop } from '../DAO/Laptop';

@Component({
  selector: 'app-detail-laptop',
  templateUrl: './detail-laptop.component.html',
  styleUrl: './detail-laptop.component.css'
})
export class DetailLaptopComponent {
  constructor(private _api:ApiLaptopService, private _activatedRoute:ActivatedRoute){}

  laptop:Laptop = new Laptop();
  id:number = 0;
  ngOnInit(){
    this.id = this._activatedRoute.snapshot.params['id'];
    this._api.getById(this.id).subscribe((res:any)=>{
      this.laptop = res;
      console.log(this.laptop)
    });
  }
}
