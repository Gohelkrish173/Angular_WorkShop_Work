import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiLaptopService {

  constructor(private _http:HttpClient) { }

  apiUrl = "https://62d6c51451e6e8f06f12bd5d.mockapi.io/laptops";

  getAll(){
    return this._http.get(this.apiUrl);
  }

  getById(id:any){
    return this._http.get(this.apiUrl+"/"+id);
  }

  delete(id:any){
    return this._http.delete(this.apiUrl+"/"+id);
  }

  save(data:any){
    return this._http.post(this.apiUrl,data);
  }

  edit(data:any,id:number){
    return this._http.put(this.apiUrl+"/"+id,data);
  }
}
