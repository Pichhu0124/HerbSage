import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoginBody, RegisterBody } from '../models/requestBody.model';
import { GetMeResponse, LoginResponse, LogoutResponse, RegisterResponse } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient)
  getRegisterRes(body: RegisterBody){
    const url = "http://localhost:3000/api/auth/register"
    return this.http.post<RegisterResponse>(url,body)
  }
  getLoginRes(body: LoginBody){
    const url = "http://localhost:3000/api/auth/login"
    return this.http.post<LoginResponse>(url,body,{withCredentials: true})
  }
  getMeRes(){
    const url = "http://localhost:3000/api/auth/me"
    return this.http.get<GetMeResponse>(url,{withCredentials: true})
  }
  logout(){
    const url = "http://localhost:3000/api/auth/logout"
    return this.http.get<LogoutResponse>(url,{withCredentials: true})
  }
  constructor() { }
}
