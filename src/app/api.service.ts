import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  dataList = ()=>{
    return this.http.get("https://fakerapi.it/api/v1/companies?_seed=12456")
  }
}
