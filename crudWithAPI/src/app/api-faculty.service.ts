import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiFacultyService {
  apiUrl = 'https://64fca63a605a026163aeb538.mockapi.io/Faculty';
  constructor(private _http : HttpClient) { }

  getAll(){
    return this._http.get(this.apiUrl);
  }
}
