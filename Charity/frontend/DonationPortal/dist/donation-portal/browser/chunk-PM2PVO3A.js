import {
  environment
} from "./chunk-6JTJ7QYA.js";
import {
  HttpClient,
  HttpHeaders
} from "./chunk-WULQVJ4Y.js";
import {
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-T3FPL6CQ.js";

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
//# sourceMappingURL=chunk-PM2PVO3A.js.map
