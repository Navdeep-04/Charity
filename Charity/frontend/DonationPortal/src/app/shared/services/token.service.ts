import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private tokenKey = 'auth_token';
  private roleKey = 'user_role';
  private nameKey = 'user_name';

  saveAuth(token: string, role: string, name?: string): void {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(this.tokenKey, token);
      sessionStorage.setItem(this.roleKey, role);
      if (name) sessionStorage.setItem(this.nameKey, name);
    }
  }

  getToken(): string | null {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem(this.tokenKey);
    }
    return null;
  }

  getRole(): string | null {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem(this.roleKey);
    }
    return null;
  }

  getName(): string | null {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem(this.nameKey);
    }
    return null;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  hasRole(role: string): boolean {
    return this.getRole() === role;
  }

  clear(): void {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem(this.tokenKey);
      sessionStorage.removeItem(this.roleKey);
      sessionStorage.removeItem(this.nameKey);
    }
  }
}