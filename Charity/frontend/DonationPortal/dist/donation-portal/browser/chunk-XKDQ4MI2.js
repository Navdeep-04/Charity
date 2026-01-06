import {
  ɵɵdefineInjectable
} from "./chunk-T3FPL6CQ.js";

// src/app/shared/services/token.service.ts
var TokenService = class _TokenService {
  tokenKey = "auth_token";
  roleKey = "user_role";
  nameKey = "user_name";
  saveAuth(token, role, name) {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(this.tokenKey, token);
      sessionStorage.setItem(this.roleKey, role);
      if (name)
        sessionStorage.setItem(this.nameKey, name);
    }
  }
  getToken() {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem(this.tokenKey);
    }
    return null;
  }
  getRole() {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem(this.roleKey);
    }
    return null;
  }
  getName() {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem(this.nameKey);
    }
    return null;
  }
  isLoggedIn() {
    return !!this.getToken();
  }
  hasRole(role) {
    return this.getRole() === role;
  }
  clear() {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem(this.tokenKey);
      sessionStorage.removeItem(this.roleKey);
      sessionStorage.removeItem(this.nameKey);
    }
  }
  static \u0275fac = function TokenService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TokenService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TokenService, factory: _TokenService.\u0275fac, providedIn: "root" });
};

export {
  TokenService
};
//# sourceMappingURL=chunk-XKDQ4MI2.js.map
