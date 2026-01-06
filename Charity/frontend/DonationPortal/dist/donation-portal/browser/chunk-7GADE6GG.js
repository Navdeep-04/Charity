import {
  AuthService
} from "./chunk-35ZQGKMS.js";
import {
  TokenService
} from "./chunk-XKDQ4MI2.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-6I5Q4GO4.js";
import "./chunk-6JTJ7QYA.js";
import {
  Router,
  RouterLink
} from "./chunk-6AVK7434.js";
import "./chunk-WULQVJ4Y.js";
import {
  NgIf,
  PLATFORM_ID,
  isPlatformBrowser,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-T3FPL6CQ.js";

// src/app/auth/signup/signup.component.ts
function SignupComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1, " Full Name is required*. ");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1, " Role selection is required*. ");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1, " Contact Info is required*. ");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1, " Email is required*. ");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_span_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1, " Password is required*. ");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_span_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1, " Password must be at least 5 characters long*. ");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 28);
    \u0275\u0275element(2, "span", 29);
    \u0275\u0275elementEnd()();
  }
}
function SignupComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.errorMessage);
  }
}
var SignupComponent = class _SignupComponent {
  auth;
  router;
  platformId;
  tokenService;
  submitted = false;
  loadingSubmit = false;
  errorMessage = "";
  isBrowser = false;
  formData = {
    fullName: "",
    role: "",
    contactInfo: "",
    email: "",
    password: ""
  };
  constructor(auth, router, platformId, tokenService) {
    this.auth = auth;
    this.router = router;
    this.platformId = platformId;
    this.tokenService = tokenService;
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  showAlert(message) {
    if (this.isBrowser && typeof window !== "undefined" && window.alert) {
      window.alert(message);
    }
  }
  onSignup(form) {
    console.log("SIGNUP CLICKED");
    this.submitted = true;
    this.errorMessage = "";
    if (!form.valid) {
      try {
        form.form.markAllAsTouched();
      } catch (e) {
      }
      console.log("Form invalid", this.formData);
      return;
    }
    if (!this.isBrowser)
      return;
    this.loadingSubmit = true;
    const payload = {
      name: this.formData.fullName,
      role: this.formData.role,
      contact_info: this.formData.contactInfo,
      email: this.formData.email,
      password: this.formData.password
    };
    console.log("Submitting payload", payload);
    this.auth.signup(payload).subscribe({
      next: () => {
        this.auth.login({ email: this.formData.email, password: this.formData.password }).subscribe({
          next: (res) => {
            this.loadingSubmit = false;
            try {
              this.showAlert("Account created and signed in successfully");
            } catch {
            }
            const name = res.name || "";
            this.authTokenSave(res.token, res.role, name);
            if (res.role === "NGO") {
              this.router.navigate(["/ngo/dashboard"]);
            } else if (res.role === "Donor") {
              this.router.navigate(["/donations"]);
            } else {
              this.router.navigate(["/admin/dashboard"]);
            }
          },
          error: (loginErr) => {
            this.loadingSubmit = false;
            this.showAlert("Account created \u2014 please sign in");
            this.router.navigate(["/login"]);
          }
        });
      },
      error: (err) => {
        this.loadingSubmit = false;
        this.errorMessage = err?.error?.message || err?.message || "Signup failed. Please try again.";
        this.showAlert(this.errorMessage);
        console.error(err);
      }
    });
  }
  authTokenSave(token, role, name) {
    try {
      if (this.tokenService && typeof this.tokenService.saveAuth === "function") {
        this.tokenService.saveAuth(token, role, name);
        return;
      }
    } catch (e) {
    }
    try {
      sessionStorage.setItem("auth_token", token);
      sessionStorage.setItem("user_role", role);
      if (name)
        sessionStorage.setItem("user_name", name);
    } catch (e) {
    }
  }
  static \u0275fac = function SignupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SignupComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(TokenService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignupComponent, selectors: [["app-signup"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 57, vars: 16, consts: [["signupForm", "ngForm"], ["fullName", "ngModel"], ["role", "ngModel"], ["contactInfo", "ngModel"], ["email", "ngModel"], ["password", "ngModel"], [1, "auth-page"], [1, "auth-wrapper"], ["novalidate", "", 3, "ngSubmit"], [1, "auth-card"], [1, "field"], ["type", "text", "name", "fullName", "placeholder", "Enter your name", "required", "", 3, "ngModelChange", "ngModel"], ["class", "error-message", 4, "ngIf"], ["name", "role", "required", "", 3, "ngModelChange", "ngModel"], ["value", "", "disabled", ""], ["value", "Donor"], ["value", "NGO"], ["value", "Admin"], ["type", "text", "name", "contactInfo", "placeholder", "Phone / Address", "required", "", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "placeholder", "example@email.com", "required", "", 3, "ngModelChange", "ngModel"], ["type", "password", "autocomplete", "new-password", "name", "password", "placeholder", "Password", "required", "", "minlength", "5", 3, "ngModelChange", "ngModel"], ["class", "field", 4, "ngIf"], ["type", "submit", 1, "primary-btn", 3, "disabled"], ["class", "server-error", 4, "ngIf"], [1, "alt-text"], ["routerLink", "/login"], [1, "footer-text"], [1, "error-message"], [1, "spinner-container"], [1, "loader"], [1, "server-error"]], template: function SignupComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "form", 8, 0);
      \u0275\u0275listener("ngSubmit", function SignupComponent_Template_form_ngSubmit_2_listener() {
        \u0275\u0275restoreView(_r1);
        const signupForm_r2 = \u0275\u0275reference(3);
        return \u0275\u0275resetView(ctx.onSignup(signupForm_r2));
      });
      \u0275\u0275elementStart(4, "div", 9)(5, "h3");
      \u0275\u0275text(6, "Create your account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 10)(8, "label");
      \u0275\u0275text(9, "Full Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "input", 11, 1);
      \u0275\u0275twoWayListener("ngModelChange", function SignupComponent_Template_input_ngModelChange_10_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.formData.fullName, $event) || (ctx.formData.fullName = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(12, SignupComponent_span_12_Template, 2, 0, "span", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 10)(14, "label");
      \u0275\u0275text(15, "Select Role");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "select", 13, 2);
      \u0275\u0275twoWayListener("ngModelChange", function SignupComponent_Template_select_ngModelChange_16_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.formData.role, $event) || (ctx.formData.role = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(18, "option", 14);
      \u0275\u0275text(19, "Choose account role");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "option", 15);
      \u0275\u0275text(21, "Donor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "option", 16);
      \u0275\u0275text(23, "NGO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "option", 17);
      \u0275\u0275text(25, "Admin");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(26, SignupComponent_span_26_Template, 2, 0, "span", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 10)(28, "label");
      \u0275\u0275text(29, "Contact Info");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "input", 18, 3);
      \u0275\u0275twoWayListener("ngModelChange", function SignupComponent_Template_input_ngModelChange_30_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.formData.contactInfo, $event) || (ctx.formData.contactInfo = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(32, SignupComponent_span_32_Template, 2, 0, "span", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 10)(34, "label");
      \u0275\u0275text(35, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "input", 19, 4);
      \u0275\u0275twoWayListener("ngModelChange", function SignupComponent_Template_input_ngModelChange_36_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.formData.email, $event) || (ctx.formData.email = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(38, SignupComponent_span_38_Template, 2, 0, "span", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 10)(40, "label");
      \u0275\u0275text(41, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "input", 20, 5);
      \u0275\u0275twoWayListener("ngModelChange", function SignupComponent_Template_input_ngModelChange_42_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.formData.password, $event) || (ctx.formData.password = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(44, SignupComponent_span_44_Template, 2, 0, "span", 12)(45, SignupComponent_span_45_Template, 2, 0, "span", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275template(46, SignupComponent_div_46_Template, 3, 0, "div", 21);
      \u0275\u0275elementStart(47, "div", 10)(48, "button", 22);
      \u0275\u0275text(49);
      \u0275\u0275elementEnd();
      \u0275\u0275template(50, SignupComponent_div_50_Template, 2, 1, "div", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "p", 24);
      \u0275\u0275text(52, "Already have an account? ");
      \u0275\u0275elementStart(53, "a", 25);
      \u0275\u0275text(54, "Login");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(55, "p", 26);
      \u0275\u0275text(56, "Role-based access: Donor \u2022 NGO \u2022 Admin");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const signupForm_r2 = \u0275\u0275reference(3);
      const fullName_r4 = \u0275\u0275reference(11);
      const role_r5 = \u0275\u0275reference(17);
      const contactInfo_r6 = \u0275\u0275reference(31);
      const email_r7 = \u0275\u0275reference(37);
      const password_r8 = \u0275\u0275reference(43);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.fullName);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.submitted && fullName_r4.invalid);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.role);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.submitted && role_r5.invalid);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.contactInfo);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.submitted && contactInfo_r6.invalid);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.email);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.submitted && email_r7.invalid);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.formData.password);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.submitted && (password_r8.errors == null ? null : password_r8.errors["required"]));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && (password_r8.errors == null ? null : password_r8.errors["minlength"]));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loadingSubmit);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loadingSubmit || signupForm_r2.invalid);
      \u0275\u0275attribute("aria-disabled", ctx.loadingSubmit || signupForm_r2.invalid);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loadingSubmit ? "Creating..." : "Create Account", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, NgModel, NgForm, RouterLink, NgIf], styles: ['\n\n.auth-page[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff,\n      #fff3f3,\n      #fde9eb);\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 50px;\n  position: relative;\n  overflow: hidden;\n  font-family:\n    "Inter",\n    Arial,\n    sans-serif;\n}\n[_ngcontent-%COMP%]:root {\n  --clr-danger:#d14343;\n  --clr-deep-navy:#101840;\n  --clr-light-gray:#f2f2f2;\n  --clr-white:#ffffff;\n}\nbody[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      120deg,\n      #fff,\n      #f3f3f3);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  font-family: "Work Sans", sans-serif;\n}\n.auth-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 480px;\n  text-align: center;\n}\n.brand-title[_ngcontent-%COMP%] {\n  color: var(--clr-danger);\n  margin-bottom: 1.2rem;\n}\n.auth-card[_ngcontent-%COMP%] {\n  background: #ffffffcc;\n  backdrop-filter: blur(8px);\n  border-radius: 18px;\n  box-shadow: 0 18px 40px rgba(0, 0, 0, .08);\n  padding: 2rem;\n}\n.auth-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  margin: 0 auto;\n  text-align: left;\n}\nh3[_ngcontent-%COMP%] {\n  color: var(--clr-deep-navy);\n  margin-bottom: 1rem;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: .4rem;\n  margin-bottom: 1rem;\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: .85rem;\n  color: #666;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: .8rem 1rem;\n  border-radius: 12px;\n  border: 1px solid #ddd;\n}\n.forgot-link[_ngcontent-%COMP%] {\n  font-size: .85rem;\n  color: var(--clr-danger);\n  margin-bottom: 1rem;\n  display: inline-block;\n}\n.primary-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem 1.2rem;\n  border: none;\n  border-radius: 10px;\n  background: #101840;\n  color: #ffffff;\n  font-weight: 700;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 1rem;\n  box-shadow: 0 6px 18px rgba(16, 24, 64, 0.18);\n  transition:\n    transform .12s ease,\n    box-shadow .12s ease,\n    opacity .12s ease;\n}\n.primary-btn[_ngcontent-%COMP%]:hover {\n  background: #0b1226;\n  transform: translateY(-2px);\n  box-shadow: 0 10px 26px rgba(16, 24, 64, 0.22);\n}\n.primary-btn[disabled][_ngcontent-%COMP%], \n.primary-btn[aria-disabled=true][_ngcontent-%COMP%] {\n  opacity: 0.85;\n  cursor: not-allowed;\n  box-shadow: none;\n  background: #394050;\n  color: #fff;\n}\n.alt-text[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  font-size: .9rem;\n}\n.alt-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--clr-danger);\n}\n.footer-note[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  color: #777;\n  font-size: .85rem;\n}\nselect[_ngcontent-%COMP%] {\n  padding: .8rem 1rem;\n  border-radius: 12px;\n  border: 1px solid #ddd;\n  background: white;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: var(--clr-danger);\n  font-size: .75rem;\n}\n.server-error[_ngcontent-%COMP%] {\n  color: var(--clr-danger);\n  margin-top: .5rem;\n  font-size: .85rem;\n}\n.spinner-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 1rem;\n}\n.loader[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: inline-block;\n  justify-content: center;\n  position: relative;\n  border: 10px solid;\n  box-sizing: border-box;\n  animation: _ngcontent-%COMP%_animloader 1s linear infinite alternate;\n}\n@keyframes _ngcontent-%COMP%_animloader {\n  0% {\n    border-color: rgb(255, 255, 255) rgba(255, 255, 255, 0) rgba(255, 255, 255, 0) rgba(255, 255, 255, 0);\n  }\n  33% {\n    border-color: #d14343 #d14343 rgba(255, 255, 255, 0) rgba(255, 255, 255, 0);\n  }\n  66% {\n    border-color: #d14343 #d14343 #d14343 rgba(255, 255, 255, 0);\n  }\n  100% {\n    border-color: #d14343 #d14343 #d14343 #d14343;\n  }\n}\n/*# sourceMappingURL=signup.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignupComponent, { className: "SignupComponent", filePath: "src\\app\\auth\\signup\\signup.component.ts", lineNumber: 24 });
})();
export {
  SignupComponent
};
//# sourceMappingURL=chunk-7GADE6GG.js.map
