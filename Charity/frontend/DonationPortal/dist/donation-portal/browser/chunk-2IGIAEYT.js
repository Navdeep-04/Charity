import {
  MatSelect,
  MatSelectModule
} from "./chunk-YEPZQBVF.js";
import "./chunk-ANGXZAIU.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-DXEXM4L7.js";
import {
  ApiService
} from "./chunk-PM2PVO3A.js";
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
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitle
} from "./chunk-CDFCSV45.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-7VBQQGLQ.js";
import {
  MatIcon,
  MatIconModule,
  MatOption
} from "./chunk-QC73AF7C.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NumberValueAccessor,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-6I5Q4GO4.js";
import "./chunk-6JTJ7QYA.js";
import {
  ActivatedRoute,
  Router
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-T3FPL6CQ.js";

// src/app/donations/create-donation/create-donation.component.ts
function CreateDonationComponent_mat_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r1 = ctx.$implicit;
    \u0275\u0275property("value", type_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r1, " ");
  }
}
function CreateDonationComponent_mat_option_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const priority_r2 = ctx.$implicit;
    \u0275\u0275property("value", priority_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", priority_r2, " ");
  }
}
function CreateDonationComponent_mat_spinner_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 20);
  }
}
function CreateDonationComponent_mat_icon_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.isEdit ? "update" : "add");
  }
}
var CreateDonationComponent = class _CreateDonationComponent {
  api;
  router;
  route;
  loading = false;
  isEdit = false;
  donationId = null;
  form = {
    donation_type: "",
    priority: "Normal",
    quantity_or_amount: null,
    location: "",
    pickup_date_time: "",
    images: ""
  };
  donationTypes = ["Food", "Clothes", "Funds", "Medicine", "Other"];
  priorities = ["Normal", "Urgent"];
  constructor(api, router, route) {
    this.api = api;
    this.router = router;
    this.route = route;
  }
  ngOnInit() {
    this.donationId = this.route.snapshot.paramMap.get("id");
    this.isEdit = !!this.donationId;
    if (this.isEdit) {
      this.loadDonation();
    }
  }
  loadDonation() {
    this.api.get(`/donations/${this.donationId}`).subscribe({
      next: (donation) => {
        this.form = {
          donation_type: donation.donation_type,
          priority: donation.priority,
          quantity_or_amount: donation.quantity_or_amount,
          location: donation.location,
          pickup_date_time: donation.pickup_date_time?.slice(0, 16),
          images: donation.images || ""
        };
      },
      error: () => {
        if (typeof window !== "undefined" && window.alert) {
          window.alert("Failed to load donation details");
        }
        this.router.navigate(["/ngo/dashboard"]);
      }
    });
  }
  submit() {
    if (!this.form.donation_type || !this.form.quantity_or_amount || !this.form.location || !this.form.pickup_date_time) {
      if (typeof window !== "undefined" && window.alert) {
        window.alert("Please fill all required fields");
      }
      return;
    }
    this.loading = true;
    const endpoint = this.isEdit ? `/donations/${this.donationId}` : "/donations";
    const method = this.isEdit ? "put" : "post";
    this.api[method](endpoint, this.form).subscribe({
      next: () => {
        this.loading = false;
        if (typeof window !== "undefined" && window.alert) {
          window.alert(`Donation request ${this.isEdit ? "updated" : "created"} successfully`);
        }
        this.router.navigate(["/ngo/dashboard"]);
      },
      error: (err) => {
        this.loading = false;
        if (typeof window !== "undefined" && window.alert) {
          window.alert(err?.error?.message || `Failed to ${this.isEdit ? "update" : "create"} donation`);
        }
      }
    });
  }
  cancel() {
    this.router.navigate(["/ngo/dashboard"]);
  }
  static \u0275fac = function CreateDonationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CreateDonationComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateDonationComponent, selectors: [["app-create-donation"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 50, vars: 13, consts: [[1, "create-donation-page"], [1, "container"], [1, "form-card"], [1, "donation-form", 3, "ngSubmit"], [1, "form-row"], ["appearance", "outline"], ["name", "donation_type", "required", "", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "priority", 3, "ngModelChange", "ngModel"], ["matInput", "", "type", "number", "name", "quantity_or_amount", "required", "", "min", "1", 3, "ngModelChange", "ngModel"], ["matInput", "", "name", "location", "required", "", 3, "ngModelChange", "ngModel"], ["matSuffix", ""], ["matInput", "", "type", "datetime-local", "name", "pickup_date_time", "required", "", 3, "ngModelChange", "ngModel"], ["matInput", "", "name", "images", "placeholder", "Enter image URLs separated by commas", 3, "ngModelChange", "ngModel"], [1, "form-actions"], ["mat-raised-button", "", "type", "button", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], ["diameter", "20", 4, "ngIf"], [4, "ngIf"], [3, "value"], ["diameter", "20"]], template: function CreateDonationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "mat-card", 2)(3, "mat-card-header")(4, "mat-card-title")(5, "mat-icon");
      \u0275\u0275text(6, "add_circle");
      \u0275\u0275elementEnd();
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "mat-card-content")(9, "form", 3);
      \u0275\u0275listener("ngSubmit", function CreateDonationComponent_Template_form_ngSubmit_9_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(10, "div", 4)(11, "mat-form-field", 5)(12, "mat-label");
      \u0275\u0275text(13, "Donation Type *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "mat-select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function CreateDonationComponent_Template_mat_select_ngModelChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.donation_type, $event) || (ctx.form.donation_type = $event);
        return $event;
      });
      \u0275\u0275template(15, CreateDonationComponent_mat_option_15_Template, 2, 2, "mat-option", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "mat-form-field", 5)(17, "mat-label");
      \u0275\u0275text(18, "Priority");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "mat-select", 8);
      \u0275\u0275twoWayListener("ngModelChange", function CreateDonationComponent_Template_mat_select_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.priority, $event) || (ctx.form.priority = $event);
        return $event;
      });
      \u0275\u0275template(20, CreateDonationComponent_mat_option_20_Template, 2, 2, "mat-option", 7);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "mat-form-field", 5)(22, "mat-label");
      \u0275\u0275text(23, "Quantity/Amount *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function CreateDonationComponent_Template_input_ngModelChange_24_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.quantity_or_amount, $event) || (ctx.form.quantity_or_amount = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "mat-form-field", 5)(26, "mat-label");
      \u0275\u0275text(27, "Location *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function CreateDonationComponent_Template_input_ngModelChange_28_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.location, $event) || (ctx.form.location = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "mat-icon", 11);
      \u0275\u0275text(30, "location_on");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "mat-form-field", 5)(32, "mat-label");
      \u0275\u0275text(33, "Pickup Date & Time *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function CreateDonationComponent_Template_input_ngModelChange_34_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.pickup_date_time, $event) || (ctx.form.pickup_date_time = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "mat-form-field", 5)(36, "mat-label");
      \u0275\u0275text(37, "Images (URLs)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function CreateDonationComponent_Template_input_ngModelChange_38_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.images, $event) || (ctx.form.images = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "mat-icon", 11);
      \u0275\u0275text(40, "image");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 14)(42, "button", 15);
      \u0275\u0275listener("click", function CreateDonationComponent_Template_button_click_42_listener() {
        return ctx.cancel();
      });
      \u0275\u0275elementStart(43, "mat-icon");
      \u0275\u0275text(44, "cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275text(45, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "button", 16);
      \u0275\u0275template(47, CreateDonationComponent_mat_spinner_47_Template, 1, 0, "mat-spinner", 17)(48, CreateDonationComponent_mat_icon_48_Template, 2, 1, "mat-icon", 18);
      \u0275\u0275text(49);
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.isEdit ? "Edit Donation Request" : "Create Donation Request", " ");
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.donation_type);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.donationTypes);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.priority);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.priorities);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.quantity_or_amount);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.location);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.pickup_date_time);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.images);
      \u0275\u0275advance(8);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "Saving..." : ctx.isEdit ? "Update" : "Create", " ");
    }
  }, dependencies: [
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    MinValidator,
    NgModel,
    NgForm,
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
    MatSuffix,
    MatInputModule,
    MatInput,
    MatSelectModule,
    MatSelect,
    MatOption,
    MatProgressSpinnerModule,
    MatProgressSpinner
  ], styles: ["\n\n.create-donation-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-light) 0%,\n      #fce4ec 100%);\n  padding: 80px 2rem 2rem;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.form-card[_ngcontent-%COMP%] {\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-hover);\n  background: var(--surface);\n}\n.form-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: var(--primary-color);\n  font-size: 1.75rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n}\n.donation-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  margin-top: 1.5rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  margin-top: 2rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid var(--border-color);\n}\n.form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 140px;\n  height: 44px;\n  font-weight: 500;\n}\n@media (max-width: 768px) {\n  .create-donation-page[_ngcontent-%COMP%] {\n    padding: 80px 1rem 2rem;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=create-donation.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateDonationComponent, { className: "CreateDonationComponent", filePath: "src\\app\\donations\\create-donation\\create-donation.component.ts", lineNumber: 169 });
})();
export {
  CreateDonationComponent
};
//# sourceMappingURL=chunk-2IGIAEYT.js.map
