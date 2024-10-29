import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiLaptopService } from '../api-laptop.service';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrl: './laptops.component.css'
})
export class LaptopsComponent {

  constructor(private _api:ApiLaptopService, private _router:Router){}

  laptops = [{id:0,createdAt:0,LaptopName:'',LaptopImage:'',LaptopPrice:''}]

  ngOnInit(){
    this._api.getAll().subscribe((res:any)=>{
      this.laptops = res;
    });
  }

  deleteById(id:any){
    this._api.delete(id).subscribe((res)=>{
      this.ngOnInit();
    });
  }

  detailView(id:any){
    this._router.navigate(['/laptop/',id]);
  }

  setForEdit(id:any){
    // confirmation
    this._router.navigate(['/laptop/edit/',id]);
  }
}
