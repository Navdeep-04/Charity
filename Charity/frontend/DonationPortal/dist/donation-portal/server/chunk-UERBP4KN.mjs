import './polyfills.server.mjs';
import {
  environment
} from "./chunk-6ARHNOTB.mjs";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-EDINCC2X.mjs";
import {
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-K3KG5ZC2.mjs";

// src/app/shared/services/api.service.ts
var ApiService = class _ApiService {
  http;
  baseUrl = environment.apiUrl;
  headers = new HttpHeaders({
    "X-Requested-With": "XMLHttpRequest"
  });
  constructor(http) {
    this.http = http;
  }
  get(endpoint) {
    return this.http.get(`${this.baseUrl}${endpoint}`, { headers: this.headers });
  }
  post(endpoint, data) {
    return this.http.post(`${this.baseUrl}${endpoint}`, data, { headers: this.headers });
  }
  put(endpoint, data) {
    return this.http.put(`${this.baseUrl}${endpoint}`, data, { headers: this.headers });
  }
  patch(endpoint, data) {
    return this.http.patch(`${this.baseUrl}${endpoint}`, data, { headers: this.headers });
  }
  delete(endpoint) {
    return this.http.delete(`${this.baseUrl}${endpoint}`, { headers: this.headers });
  }
  static \u0275fac = function ApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApiService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
};

export {
  ApiService
};
//# sourceMappingURL=chunk-UERBP4KN.mjs.map
