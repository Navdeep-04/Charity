import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticService {

  constructor() { }

   isloggedIn() : boolean {
    if(sessionStorage.getItem('auth_token') !== null){
      return true;
    }
    return false;
  }
}
