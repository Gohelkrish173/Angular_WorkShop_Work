import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiLaptopService } from '../api-laptop.service';

@Component({
  selector: 'app-add-laptop',
  templateUrl: './add-laptop.component.html',
  styleUrl: './add-laptop.component.css'
})
export class AddLaptopComponent {
  constructor(private _api:ApiLaptopService, private _router:Router){}
  laptopForm:FormGroup=new FormGroup({
    LaptopName:new FormControl('',Validators.required),
    LaptopImage:new FormControl(''),
    LaptopPrice:new FormControl(0)
  });
  save(){
    this._api.save(this.laptopForm.value).subscribe((res:any)=>{
      this._router.navigate(['/laptops'])
    });
  }
}
