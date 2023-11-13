import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brewry } from './brewry';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getData(url : any)
  {
      return this.http.get<Object>(url);
  }


}
