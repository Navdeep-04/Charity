import {
  AuthService
} from "./chunk-35ZQGKMS.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-DXEXM4L7.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatSuffix
} from "./chunk-HZ62P7SA.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-IWQJO666.js";
import "./chunk-X6PBHBYZ.js";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitle
} from "./chunk-CDFCSV45.js";
import {
  MatAnchor,
  MatButton,
  MatButtonModule
} from "./chunk-7VBQQGLQ.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-QC73AF7C.js";
import {
  TokenService
} from "./chunk-XKDQ4MI2.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-6I5Q4GO4.js";
import "./chunk-6JTJ7QYA.js";
import {
  Router,
  RouterLink
} from "./chunk-6AVK7434.js";
import "./chunk-WULQVJ4Y.js";
import {
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-T3FPL6CQ.js";

// src/app/auth/login/login.component.ts
function LoginComponent_mat_spinner_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 20);
  }
}
function LoginComponent_mat_icon_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "login");
    \u0275\u0275elementEnd();
  }
}
var LoginComponent = class _LoginComponent {
  auth;
  token;
  router;
  loading = false;
  errorMessage = "";
  formData = {
    email: "",
    password: ""
  };
  constructor(auth, token, router) {
    this.auth = auth;
    this.token = token;
    this.router = router;
  }
  onLogin() {
    if (!this.formData.email || !this.formData.password)
      return;
    this.loading = true;
    this.errorMessage = "";
    this.auth.login(this.formData).subscribe({
      next: (res) => {
        this.loading = false;
        this.token.saveAuth(res.token, res.role);
        if (res.role === "NGO") {
          this.router.navigate(["/ngo/dashboard"]);
        } else if (res.role === "Donor") {
          this.router.navigate(["/donations"]);
        } else {
          this.router.navigate(["/admin/dashboard"]);
        }
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = err?.error?.message || "Invalid email or password";
        if (typeof window !== "undefined" && window.alert) {
          window.alert(this.errorMessage);
        }
      }
    });
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(TokenService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 48, vars: 6, consts: [[1, "auth-page"], [1, "auth-container"], [1, "auth-image"], ["src", "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=800&fit=crop", "alt", "donation"], [1, "image-overlay"], [1, "auth-form"], [1, "login-card"], [1, "login-form", 3, "ngSubmit"], ["appearance", "outline"], ["matInput", "", "type", "email", "name", "email", "required", "", 3, "ngModelChange", "ngModel"], ["matSuffix", ""], ["matInput", "", "type", "password", "name", "password", "required", "", 3, "ngModelChange", "ngModel"], [1, "form-actions"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "login-btn", 3, "disabled"], ["diameter", "20", 4, "ngIf"], [4, "ngIf"], [1, "form-links"], ["mat-button", "", "routerLink", "/forgot-password", "color", "primary"], [1, "signup-link"], ["mat-flat-button", "", "color", "primary", "routerLink", "/signup", "aria-label", "Create account", 1, "create-account-btn"], ["diameter", "20"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementStart(4, "div", 4)(5, "h2");
      \u0275\u0275text(6, "Welcome Back");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p");
      \u0275\u0275text(8, "Continue making a difference in people's lives");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "div", 5)(10, "mat-card", 6)(11, "mat-card-header")(12, "mat-card-title")(13, "mat-icon");
      \u0275\u0275text(14, "login");
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, " Sign in to your account ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "mat-card-content")(17, "form", 7);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_17_listener() {
        return ctx.onLogin();
      });
      \u0275\u0275elementStart(18, "mat-form-field", 8)(19, "mat-label");
      \u0275\u0275text(20, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_21_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.formData.email, $event) || (ctx.formData.email = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "mat-icon", 10);
      \u0275\u0275text(23, "email");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "mat-form-field", 8)(25, "mat-label");
      \u0275\u0275text(26, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_27_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.formData.password, $event) || (ctx.formData.password = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "mat-icon", 10);
      \u0275\u0275text(29, "lock");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 12)(31, "button", 13);
      \u0275\u0275template(32, LoginComponent_mat_spinner_32_Template, 1, 0, "mat-spinner", 14)(33, LoginComponent_mat_icon_33_Template, 2, 0, "mat-icon", 15);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 16)(36, "a", 17)(37, "mat-icon");
      \u0275\u0275text(38, "help");
      \u0275\u0275elementEnd();
      \u0275\u0275text(39, " Forgot Password? ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(40, "mat-card-actions")(41, "div", 18)(42, "span");
      \u0275\u0275text(43, "Don't have an account?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "button", 19)(45, "mat-icon");
      \u0275\u0275text(46, "person_add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(47, " Create Account ");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(21);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.email);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.password);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "Signing in..." : "Sign In", " ");
    }
  }, dependencies: [RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, NgIf, MatCardModule, MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle, MatButtonModule, MatAnchor, MatButton, MatIconModule, MatIcon, MatFormFieldModule, MatFormField, MatLabel, MatSuffix, MatInputModule, MatInput, MatProgressSpinnerModule, MatProgressSpinner], styles: ["\n\n.auth-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-light) 0%,\n      #fce4ec 100%);\n  padding: 2rem 1rem;\n}\n.auth-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  max-width: 1000px;\n  width: 100%;\n  background: var(--surface);\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  box-shadow: var(--shadow-hover);\n}\n.auth-image[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.auth-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.image-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));\n  color: white;\n  padding: 2rem;\n}\n.image-overlay[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n}\n.auth-form[_ngcontent-%COMP%] {\n  padding: 3rem 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.login-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  border: none;\n  box-shadow: none;\n}\n.login-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 1.75rem;\n  font-weight: 600;\n  color: var(--primary-color);\n  margin-bottom: 2rem;\n}\n.login-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.form-actions[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n.login-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n  font-size: 1.1rem;\n  font-weight: 500;\n}\n.form-links[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1.5rem;\n}\n.signup-link[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  padding: 1.5rem 0;\n  text-align: center;\n  border-top: 1px solid var(--border-color);\n  margin-top: 1rem;\n}\n.signup-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.signup-link[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 44px;\n}\n.create-account-btn[_ngcontent-%COMP%] {\n  font-weight: 600;\n  box-shadow: var(--shadow-hover);\n}\n.create-account-btn[_ngcontent-%COMP%] {\n  background: var(--primary-color);\n  color: #fff;\n  border-radius: 6px;\n  box-shadow: var(--shadow-hover);\n}\n@media (max-width: 768px) {\n  .auth-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    max-width: 400px;\n  }\n  .auth-image[_ngcontent-%COMP%] {\n    height: 200px;\n  }\n  .auth-form[_ngcontent-%COMP%] {\n    padding: 2rem 1rem;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\auth\\login\\login.component.ts", lineNumber: 226 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-P3FHCLYT.js.map
