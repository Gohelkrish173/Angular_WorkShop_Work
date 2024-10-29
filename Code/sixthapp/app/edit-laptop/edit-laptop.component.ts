import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiLaptopService } from '../api-laptop.service';

@Component({
  selector: 'app-edit-laptop',
  templateUrl: './edit-laptop.component.html',
  styleUrl: './edit-laptop.component.css'
})
export class EditLaptopComponent {
  constructor(private _api:ApiLaptopService, private _router:Router, private _activatedRoute:ActivatedRoute){}
  laptopForm:FormGroup=new FormGroup({
    LaptopName:new FormControl('',Validators.required),
    LaptopImage:new FormControl(''),
    LaptopPrice:new FormControl(0)
  });
  id:number=0;
  ngOnInit(){
    this.id = this._activatedRoute.snapshot.params['id'];
    this._api.getById(this.id).subscribe((res:any)=>{
      this.laptopForm.patchValue(res);
    });
  }
  save(){
    this._api.edit(this.laptopForm.value,this.id).subscribe((res:any)=>{
      this._router.navigate(['/laptops'])
    });
  }
}
