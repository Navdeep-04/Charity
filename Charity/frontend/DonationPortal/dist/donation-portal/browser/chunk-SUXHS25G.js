import {
  AuthService
} from "./chunk-35ZQGKMS.js";
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
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-T3FPL6CQ.js";

// src/app/auth/forgot-password/forgot-password.component.ts
var ForgotPasswordComponent = class _ForgotPasswordComponent {
  auth;
  router;
  email = "";
  loading = false;
  submit = false;
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
  }
  onSubmit() {
    this.submit = true;
    if (!this.email)
      return;
    this.loading = true;
    this.auth.forgotPassword({ email: this.email }).subscribe({
      next: () => {
        this.loading = false;
        if (typeof window !== "undefined" && window.alert)
          window.alert("Password sent to your registered email");
        this.router.navigate(["/login"]);
      },
      error: (err) => {
        this.loading = false;
        if (typeof window !== "undefined" && window.alert)
          window.alert(err?.error?.message || "Failed to send email. Try again.");
      }
    });
  }
  static \u0275fac = function ForgotPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForgotPasswordComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 3, consts: [[1, "auth-page"], [1, "auth-wrapper"], [1, "brand-title"], [1, "auth-card"], ["novalidate", "", 3, "ngSubmit"], [1, "field"], ["type", "email", "name", "email", "placeholder", "Enter registered email", "required", "", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "primary-btn", 3, "disabled"], [1, "alt-text"], ["routerLink", "/login", 1, "link-button"], [1, "footer-note"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "h3");
      \u0275\u0275text(5, "Reset your password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "form", 4);
      \u0275\u0275listener("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_6_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(7, "div", 5)(8, "label");
      \u0275\u0275text(9, "Email Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "input", 6);
      \u0275\u0275twoWayListener("ngModelChange", function ForgotPasswordComponent_Template_input_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "button", 7);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "p", 8);
      \u0275\u0275text(14, " Remembered your password? ");
      \u0275\u0275elementStart(15, "a", 9);
      \u0275\u0275text(16, "Back to login");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "p", 10);
      \u0275\u0275text(18, " We will send a secure reset link to your email ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.email);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "Sending\u2026" : "Send Reset Link", " ");
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, RouterLink], styles: ['\n\n.auth-page[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff,\n      #fff3f3,\n      #fde9eb);\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  padding-top: 40px;\n  font-family:\n    "Inter",\n    Arial,\n    sans-serif;\n  padding-top: 130px;\n}\n.auth-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 480px;\n  text-align: center;\n}\n.auth-card[_ngcontent-%COMP%] {\n  background: #ffffffcc;\n  backdrop-filter: blur(8px);\n  border-radius: 18px;\n  box-shadow: 0 18px 40px rgba(0, 0, 0, .08);\n  padding: 2rem;\n  width: 100%;\n}\nh3[_ngcontent-%COMP%] {\n  color: #101840;\n  margin-bottom: 1rem;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: .4rem;\n  margin-bottom: 1rem;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: .8rem 1rem;\n  border-radius: 12px;\n  border: 1px solid #ddd;\n}\n.primary-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: .9rem;\n  border: none;\n  border-radius: 2rem;\n  background: #d14343;\n  color: #fff;\n  font-weight: 600;\n  cursor: pointer;\n}\n.primary-btn[_ngcontent-%COMP%]:hover {\n  background: #101840;\n}\n.alt-text[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  font-size: .9rem;\n}\n.alt-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #d14343;\n}\n.footer-note[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  font-size: .85rem;\n  color: #666;\n}\n/*# sourceMappingURL=forgot-password.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "src\\app\\auth\\forgot-password\\forgot-password.component.ts", lineNumber: 13 });
})();
export {
  ForgotPasswordComponent
};
//# sourceMappingURL=chunk-SUXHS25G.js.map
