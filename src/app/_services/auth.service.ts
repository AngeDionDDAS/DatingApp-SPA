import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'https://localhost:7191/api/auth/';
  constructor(private http: HttpClient) { }

  login(model:any){
    return this.http.post(this.baseUrl + 'login', model)
  }
}
