import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/login`, credentials);
  }

  signup(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/signup`, userData);
  }

  forgotPassword(email: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/forgotPassword`, email);
  }

  checkToken(): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/checkToken`);
  }

  changePassword(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/changePassword`, data);
  }
}