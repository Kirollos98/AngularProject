import { RegisterModel } from './../Models/register-model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://localhost:44335/Account/'
  headers = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  Register(reg: RegisterModel): Observable<RegisterModel> {
    return this.http.post<RegisterModel>(this.baseUrl + 'Register', reg, this.headers).pipe();
  }
}
