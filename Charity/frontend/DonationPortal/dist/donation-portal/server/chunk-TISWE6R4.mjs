import './polyfills.server.mjs';
import {
  environment
} from "./chunk-6ARHNOTB.mjs";
import {
  HttpClient
} from "./chunk-EDINCC2X.mjs";
import {
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-K3KG5ZC2.mjs";

// src/app/shared/services/auth.service.ts
var AuthService = class _AuthService {
  http;
  baseUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  login(credentials) {
    return this.http.post(`${this.baseUrl}/user/login`, credentials);
  }
  signup(userData) {
    return this.http.post(`${this.baseUrl}/user/signup`, userData);
  }
  forgotPassword(email) {
    return this.http.post(`${this.baseUrl}/user/forgotPassword`, email);
  }
  checkToken() {
    return this.http.get(`${this.baseUrl}/user/checkToken`);
  }
  changePassword(data) {
    return this.http.post(`${this.baseUrl}/user/changePassword`, data);
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};

export {
  AuthService
};
//# sourceMappingURL=chunk-TISWE6R4.mjs.map
