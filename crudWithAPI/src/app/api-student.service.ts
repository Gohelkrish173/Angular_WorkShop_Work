import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiStudentService {
  apiUrl = 'https://64fca63a605a026163aeb538.mockapi.io/Student';
  constructor(private _http : HttpClient) { }

  getAll(){
    return this._http.get(this.apiUrl);
  }

  delete(id : any){
    return this._http.delete(this.apiUrl+'/'+id);
  }

  getByID(id : any){
    return this._http.get(this.apiUrl+'/'+id);
  }
}
