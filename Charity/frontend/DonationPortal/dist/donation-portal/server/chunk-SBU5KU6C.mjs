import './polyfills.server.mjs';
import {
  ApiService
} from "./chunk-UERBP4KN.mjs";
import {
  MatSnackBar
} from "./chunk-3OJO7IPU.mjs";
import "./chunk-LRZWNQIB.mjs";
import {
  MatInput,
  MatInputModule
} from "./chunk-WGHLU6HH.mjs";
import {
  MatFormField,
  MatFormFieldModule,
  MatHint,
  MatLabel,
  MatSuffix
} from "./chunk-C6VA3TYH.mjs";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-LM6GKWJ5.mjs";
import "./chunk-ODCJVIX6.mjs";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitle
} from "./chunk-IPZ3STW5.mjs";
import {
  MatButton,
  MatButtonModule
} from "./chunk-JY4Q3FH2.mjs";
import {
  MatIcon,
  MatIconModule
} from "./chunk-KLWG3A7K.mjs";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NumberValueAccessor,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-OX7UA4JW.mjs";
import "./chunk-6ARHNOTB.mjs";
import {
  ActivatedRoute,
  Router
} from "./chunk-CEUJRBHC.mjs";
import "./chunk-EDINCC2X.mjs";
import {
  DatePipe,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-K3KG5ZC2.mjs";
import "./chunk-DKGUOSAX.mjs";

// src/app/donations/contribution/contribution.component.ts
function ContributionComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "mat-spinner");
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading donation details...");
    \u0275\u0275elementEnd()();
  }
}
function ContributionComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "mat-card", 8)(3, "mat-card-header")(4, "mat-card-title")(5, "mat-icon");
    \u0275\u0275text(6, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Donation Summary ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "mat-card-content")(9, "div", 9)(10, "div", 10)(11, "strong");
    \u0275\u0275text(12, "Type:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 10)(16, "strong");
    \u0275\u0275text(17, "NGO:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 10)(21, "strong");
    \u0275\u0275text(22, "Location:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 10)(26, "strong");
    \u0275\u0275text(27, "Required:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 10)(31, "strong");
    \u0275\u0275text(32, "Priority:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 11);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 10)(36, "strong");
    \u0275\u0275text(37, "Scheduled Pickup:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span");
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "date");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(41, "mat-card", 12)(42, "mat-card-header")(43, "mat-card-title")(44, "mat-icon");
    \u0275\u0275text(45, "volunteer_activism");
    \u0275\u0275elementEnd();
    \u0275\u0275text(46, " Your Contribution ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "mat-card-content")(48, "form", 13);
    \u0275\u0275listener("ngSubmit", function ContributionComponent_div_9_Template_form_ngSubmit_48_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(49, "mat-form-field", 14)(50, "mat-label");
    \u0275\u0275text(51, "Contribution Quantity/Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function ContributionComponent_div_9_Template_input_ngModelChange_52_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.contribution_quantity, $event) || (ctx_r1.form.contribution_quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "mat-icon", 16);
    \u0275\u0275text(54, "inventory");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "mat-hint");
    \u0275\u0275text(56, "Enter the amount you wish to contribute");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "mat-form-field", 14)(58, "mat-label");
    \u0275\u0275text(59, "Preferred Pickup Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function ContributionComponent_div_9_Template_input_ngModelChange_60_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.pickup_date_time, $event) || (ctx_r1.form.pickup_date_time = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "mat-icon", 16);
    \u0275\u0275text(62, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "mat-hint");
    \u0275\u0275text(64, "When would you like us to pick up your donation?");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "mat-form-field", 14)(66, "mat-label");
    \u0275\u0275text(67, "Additional Notes (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "textarea", 18);
    \u0275\u0275twoWayListener("ngModelChange", function ContributionComponent_div_9_Template_textarea_ngModelChange_68_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.notes, $event) || (ctx_r1.form.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(69, "                  ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "mat-icon", 16);
    \u0275\u0275text(71, "note");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 19)(73, "button", 20)(74, "mat-icon");
    \u0275\u0275text(75, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "button", 21);
    \u0275\u0275listener("click", function ContributionComponent_div_9_Template_button_click_77_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275elementStart(78, "mat-icon");
    \u0275\u0275text(79, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(80, " Back to Details ");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(81, "mat-card", 22)(82, "mat-card-header")(83, "mat-card-title")(84, "mat-icon");
    \u0275\u0275text(85, "favorite");
    \u0275\u0275elementEnd();
    \u0275\u0275text(86, " Your Impact ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "mat-card-content")(88, "div", 23)(89, "div", 24)(90, "mat-icon");
    \u0275\u0275text(91, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "div")(93, "h4");
    \u0275\u0275text(94, "Direct Help");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "p");
    \u0275\u0275text(96, "Your contribution will directly help families in need");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(97, "div", 24)(98, "mat-icon");
    \u0275\u0275text(99, "verified");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "div")(101, "h4");
    \u0275\u0275text(102, "Verified Process");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "p");
    \u0275\u0275text(104, "All donations are tracked and verified for transparency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(105, "div", 24)(106, "mat-icon");
    \u0275\u0275text(107, "history");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "div")(109, "h4");
    \u0275\u0275text(110, "Track Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "p");
    \u0275\u0275text(112, "You can track your donation status in your history");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r1.donation.donation_type);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.donation.ngo_name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.donation.location);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.donation.quantity_or_amount, " units");
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r1.donation.priority.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.donation.priority, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(40, 13, ctx_r1.donation.pickup_date_time, "EEEE, MMM d, y - h:mm a"));
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.contribution_quantity);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.pickup_date_time);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.notes);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.loading || !ctx_r1.isFormValid());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading ? "Confirming..." : "Confirm Contribution", " ");
  }
}
var ContributionComponent = class _ContributionComponent {
  route;
  api;
  router;
  snackBar;
  donation = null;
  loading = false;
  form = {
    contribution_quantity: null,
    pickup_date_time: "",
    notes: ""
  };
  constructor(route, api, router, snackBar) {
    this.route = route;
    this.api = api;
    this.router = router;
    this.snackBar = snackBar;
  }
  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    this.loadDonation(id);
  }
  loadDonation(id) {
    this.loading = true;
    this.api.get(`/donations/${id}`).subscribe({
      next: (res) => {
        this.donation = res;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.snackBar.open("Failed to load donation details", "Close", {
          duration: 3e3,
          panelClass: ["error-snackbar"]
        });
      }
    });
  }
  isFormValid() {
    return !!(this.form.contribution_quantity && this.form.contribution_quantity > 0 && this.form.pickup_date_time);
  }
  submit() {
    if (!this.isFormValid()) {
      this.snackBar.open("Please fill all required fields", "Close", {
        duration: 3e3,
        panelClass: ["error-snackbar"]
      });
      return;
    }
    this.loading = true;
    const payload = {
      donation_id: this.donation.id,
      contribution_quantity: this.form.contribution_quantity,
      pickup_date_time: this.form.pickup_date_time,
      notes: this.form.notes || null
    };
    this.api.post("/contributions", payload).subscribe({
      next: () => {
        this.loading = false;
        this.snackBar.open("Contribution confirmed successfully! Pickup scheduled.", "Close", {
          duration: 5e3,
          panelClass: ["success-snackbar"]
        });
        this.router.navigate(["/history"]);
      },
      error: (err) => {
        this.loading = false;
        const message = err?.error?.message || "Failed to confirm contribution";
        this.snackBar.open(message, "Close", {
          duration: 3e3,
          panelClass: ["error-snackbar"]
        });
      }
    });
  }
  goBack() {
    this.router.navigate(["/donations", this.donation.id]);
  }
  static \u0275fac = function ContributionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContributionComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatSnackBar));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContributionComponent, selectors: [["app-contribution"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 2, consts: [[1, "page-wrapper"], [1, "header-section"], [1, "highlight"], ["class", "loading-section", 4, "ngIf"], ["class", "contribution-container", 4, "ngIf"], [1, "loading-section"], [1, "contribution-container"], [1, "content-grid"], [1, "summary-card"], [1, "summary-details"], [1, "summary-item"], [1, "priority-badge"], [1, "form-card"], [1, "contribution-form", 3, "ngSubmit"], ["appearance", "outline"], ["matInput", "", "type", "number", "name", "quantity", "placeholder", "How much will you contribute?", "required", "", 3, "ngModelChange", "ngModel"], ["matSuffix", ""], ["matInput", "", "type", "datetime-local", "name", "pickup", "required", "", 3, "ngModelChange", "ngModel"], ["matInput", "", "rows", "4", "name", "notes", "placeholder", "Any special instructions or notes...", 3, "ngModelChange", "ngModel"], [1, "form-actions"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], ["mat-stroked-button", "", "type", "button", 3, "click"], [1, "impact-card"], [1, "impact-grid"], [1, "impact-item"]], template: function ContributionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Confirm Your ");
      \u0275\u0275elementStart(4, "span", 2);
      \u0275\u0275text(5, "Contribution");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7, "Schedule pickup and finalize your donation details");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, ContributionComponent_div_8_Template, 4, 0, "div", 3)(9, ContributionComponent_div_9_Template, 113, 16, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.loading && !ctx.donation);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.donation);
    }
  }, dependencies: [
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    NgModel,
    NgForm,
    DatePipe,
    NgIf,
    MatCardModule,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatButtonModule,
    MatButton,
    MatIconModule,
    MatIcon,
    MatFormFieldModule,
    MatFormField,
    MatLabel,
    MatHint,
    MatSuffix,
    MatInputModule,
    MatInput,
    MatProgressSpinnerModule,
    MatProgressSpinner
  ], styles: ["\n\n.page-wrapper[_ngcontent-%COMP%] {\n  padding: 80px 1rem 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n  background: var(--background);\n}\n.header-section[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.header-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(2rem, 5vw, 2.5rem);\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 0.5rem;\n}\n.highlight[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-weight: 700;\n}\n.header-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 1.1rem;\n}\n.loading-section[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 2rem;\n}\n.contribution-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2rem;\n}\n.summary-card[_ngcontent-%COMP%], \n.form-card[_ngcontent-%COMP%], \n.impact-card[_ngcontent-%COMP%] {\n  border-radius: var(--radius-lg);\n  background: var(--surface);\n  box-shadow: var(--shadow);\n}\n.summary-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%], \n.form-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%], \n.impact-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-weight: 600;\n  color: var(--primary-color);\n}\n.summary-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.summary-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid var(--border-color);\n}\n.summary-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.summary-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-weight: 500;\n}\n.priority-badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 12px;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.priority-badge.urgent[_ngcontent-%COMP%] {\n  background-color: var(--primary-light);\n  color: var(--primary-color);\n}\n.priority-badge.normal[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  color: #1976d2;\n}\n.contribution-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-top: 2rem;\n}\n.form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 44px;\n  font-weight: 500;\n}\n.impact-card[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n.impact-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 1.5rem;\n}\n.impact-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  padding: 1.5rem;\n  background: var(--background);\n  border-radius: var(--radius);\n}\n.impact-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-size: 2rem !important;\n  margin-top: 0.25rem;\n}\n.impact-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  color: var(--text-primary);\n  font-weight: 600;\n}\n.impact-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-secondary);\n  font-size: 0.9rem;\n  line-height: 1.5;\n}\n@media (max-width: 768px) {\n  .content-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .impact-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=contribution.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContributionComponent, { className: "ContributionComponent", filePath: "src\\app\\donations\\contribution\\contribution.component.ts", lineNumber: 354 });
})();
export {
  ContributionComponent
};
//# sourceMappingURL=chunk-SBU5KU6C.mjs.map
