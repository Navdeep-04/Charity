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
  MatChip,
  MatChipSet,
  MatChipsModule
} from "./chunk-5JLWJQ2H.js";
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
  MatCardActions,
  MatCardContent,
  MatCardModule
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
  TokenService
} from "./chunk-XKDQ4MI2.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-6I5Q4GO4.js";
import "./chunk-6JTJ7QYA.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-6AVK7434.js";
import "./chunk-WULQVJ4Y.js";
import {
  DatePipe,
  NgForOf,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-T3FPL6CQ.js";

// src/app/donations/donation-list/donation-list.component.ts
var _c0 = (a0) => ["/donations", a0];
var _c1 = (a0) => ["/contribute", a0];
function DonationListComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "mat-spinner");
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading donations...");
    \u0275\u0275elementEnd()();
  }
}
function DonationListComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "img", 22);
    \u0275\u0275elementStart(2, "mat-icon", 23);
    \u0275\u0275text(3, "inbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5, "No donation requests found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Try adjusting your filters or check back later");
    \u0275\u0275elementEnd()();
  }
}
function DonationListComponent_div_43_mat_card_1_button_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 36)(1, "mat-icon");
    \u0275\u0275text(2, "volunteer_activism");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Contribute ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c1, d_r1.id));
  }
}
function DonationListComponent_div_43_mat_card_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 26)(1, "div", 27);
    \u0275\u0275element(2, "img", 28);
    \u0275\u0275elementStart(3, "mat-chip-set", 29)(4, "mat-chip");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "mat-card-content")(7, "h3");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 30)(10, "div", 31)(11, "mat-icon");
    \u0275\u0275text(12, "business");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 31)(16, "mat-icon");
    \u0275\u0275text(17, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 31)(21, "mat-icon");
    \u0275\u0275text(22, "inventory");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 31)(26, "mat-icon");
    \u0275\u0275text(27, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "mat-chip-set", 32)(32, "mat-chip");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "mat-card-actions", 33);
    \u0275\u0275template(35, DonationListComponent_div_43_mat_card_1_button_35_Template, 4, 3, "button", 34);
    \u0275\u0275elementStart(36, "button", 35)(37, "mat-icon");
    \u0275\u0275text(38, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275text(39, " View Details ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const d_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.getImageForType(d_r1.donation_type), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(d_r1.priority === "Urgent" ? "urgent-chip" : "normal-chip");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", d_r1.priority, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(d_r1.donation_type);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(d_r1.ngo_name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(d_r1.location);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", d_r1.quantity_or_amount, " needed");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(30, 14, d_r1.pickup_date_time, "MMM d, h:mm a"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getStatusClass(d_r1.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r1.status);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.role === "Donor" && d_r1.status === "Pending");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(17, _c0, d_r1.id));
  }
}
function DonationListComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275template(1, DonationListComponent_div_43_mat_card_1_Template, 40, 19, "mat-card", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredDonations());
  }
}
var DonationListComponent = class _DonationListComponent {
  api;
  token;
  donations = [];
  loading = false;
  searchLocation = "";
  filterType = "";
  filterPriority = "";
  get role() {
    return this.token.getRole();
  }
  constructor(api, token) {
    this.api = api;
    this.token = token;
  }
  ngOnInit() {
    this.loadDonations();
  }
  loadDonations() {
    this.loading = true;
    this.api.get("/donations").subscribe({
      next: (res) => {
        this.donations = res || [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        if (typeof window !== "undefined" && window.alert) {
          window.alert("Failed to load donations");
        }
      }
    });
  }
  filteredDonations() {
    return this.donations.filter((d) => {
      const matchesLocation = !this.searchLocation || d.location.toLowerCase().includes(this.searchLocation.toLowerCase());
      const matchesType = !this.filterType || d.donation_type === this.filterType;
      const matchesPriority = !this.filterPriority || d.priority === this.filterPriority;
      return matchesLocation && matchesType && matchesPriority;
    });
  }
  getStatusClass(status) {
    return `status-${status.toLowerCase()}`;
  }
  getImageForType(type) {
    const images = {
      "Food": "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=250&fit=crop",
      "Clothes": "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=250&fit=crop",
      "Funds": "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=250&fit=crop",
      "Medicine": "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=250&fit=crop",
      "Other": "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=250&fit=crop"
    };
    return images[type] || images["Other"];
  }
  static \u0275fac = function DonationListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DonationListComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(TokenService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DonationListComponent, selectors: [["app-donation-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 44, vars: 6, consts: [[1, "page-wrapper"], [1, "header-section"], ["src", "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&h=300&fit=crop", "alt", "banner", 1, "banner-image"], [1, "header-content"], [1, "filter-section"], ["appearance", "outline"], ["matInput", "", "placeholder", "Enter location", 3, "ngModelChange", "ngModel"], ["matSuffix", ""], [3, "ngModelChange", "ngModel"], ["value", ""], ["value", "Food"], ["value", "Clothes"], ["value", "Funds"], ["value", "Medicine"], ["value", "Other"], ["value", "Normal"], ["value", "Urgent"], ["class", "loading-section", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "donation-grid", 4, "ngIf"], [1, "loading-section"], [1, "empty-state"], ["src", "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&h=200&fit=crop", "alt", "empty"], [1, "empty-icon"], [1, "donation-grid"], ["class", "donation-card", 4, "ngFor", "ngForOf"], [1, "donation-card"], [1, "card-header"], ["alt", "donation", 1, "card-image", 3, "src"], [1, "priority-chips"], [1, "donation-details"], [1, "detail-item"], [1, "status-chips"], [1, "card-actions"], ["mat-raised-button", "", "color", "primary", 3, "routerLink", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", 3, "routerLink"], ["mat-raised-button", "", "color", "primary", 3, "routerLink"]], template: function DonationListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "img", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "h1");
      \u0275\u0275text(5, "Donation Requests");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7, "Support causes around you and make a difference");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 4)(9, "mat-form-field", 5)(10, "mat-label");
      \u0275\u0275text(11, "Search location");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "input", 6);
      \u0275\u0275twoWayListener("ngModelChange", function DonationListComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchLocation, $event) || (ctx.searchLocation = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "mat-icon", 7);
      \u0275\u0275text(14, "search");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "mat-form-field", 5)(16, "mat-label");
      \u0275\u0275text(17, "Donation Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "mat-select", 8);
      \u0275\u0275twoWayListener("ngModelChange", function DonationListComponent_Template_mat_select_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterType, $event) || (ctx.filterType = $event);
        return $event;
      });
      \u0275\u0275elementStart(19, "mat-option", 9);
      \u0275\u0275text(20, "All Types");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "mat-option", 10);
      \u0275\u0275text(22, "Food");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "mat-option", 11);
      \u0275\u0275text(24, "Clothes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "mat-option", 12);
      \u0275\u0275text(26, "Funds");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "mat-option", 13);
      \u0275\u0275text(28, "Medicine");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "mat-option", 14);
      \u0275\u0275text(30, "Other");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "mat-form-field", 5)(32, "mat-label");
      \u0275\u0275text(33, "Priority");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "mat-select", 8);
      \u0275\u0275twoWayListener("ngModelChange", function DonationListComponent_Template_mat_select_ngModelChange_34_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterPriority, $event) || (ctx.filterPriority = $event);
        return $event;
      });
      \u0275\u0275elementStart(35, "mat-option", 9);
      \u0275\u0275text(36, "All Priorities");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "mat-option", 15);
      \u0275\u0275text(38, "Normal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "mat-option", 16);
      \u0275\u0275text(40, "Urgent");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(41, DonationListComponent_div_41_Template, 4, 0, "div", 17)(42, DonationListComponent_div_42_Template, 8, 0, "div", 18)(43, DonationListComponent_div_43_Template, 2, 1, "div", 19);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchLocation);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterType);
      \u0275\u0275advance(16);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterPriority);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredDonations().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredDonations().length > 0);
    }
  }, dependencies: [
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    RouterModule,
    RouterLink,
    NgForOf,
    NgIf,
    DatePipe,
    MatCardModule,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatButtonModule,
    MatButton,
    MatIconModule,
    MatIcon,
    MatChipsModule,
    MatChip,
    MatChipSet,
    MatFormFieldModule,
    MatFormField,
    MatLabel,
    MatSuffix,
    MatSelectModule,
    MatSelect,
    MatOption,
    MatInputModule,
    MatInput,
    MatProgressSpinnerModule,
    MatProgressSpinner
  ], styles: ["\n\n.page-wrapper[_ngcontent-%COMP%] {\n  background: var(--background);\n}\n.header-section[_ngcontent-%COMP%] {\n  position: relative;\n  height: 300px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: -64px;\n}\n.banner-image[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  filter: brightness(0.6);\n}\n.header-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  text-align: center;\n  color: white;\n  padding-top: 64px;\n}\n.header-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(2rem, 5vw, 3rem);\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\n}\n.header-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);\n}\n.filter-section[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 2rem auto;\n  padding: 2rem;\n  background: var(--surface);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow);\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n}\n.loading-section[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 2rem;\n}\n.empty-state[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 200px;\n  object-fit: cover;\n  border-radius: var(--radius);\n  margin-bottom: 1.5rem;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 4rem !important;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n  color: var(--text-secondary);\n}\n.donation-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 2rem 2rem;\n}\n.donation-card[_ngcontent-%COMP%] {\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  transition: all 0.3s ease;\n  position: relative;\n  background: var(--surface);\n}\n.donation-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-hover);\n}\n.card-header[_ngcontent-%COMP%] {\n  position: relative;\n}\n.card-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n}\n.priority-chips[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n}\n.urgent-chip[_ngcontent-%COMP%] {\n  background-color: var(--error-color) !important;\n  color: white !important;\n}\n.normal-chip[_ngcontent-%COMP%] {\n  background-color: var(--primary-color) !important;\n  color: white !important;\n}\n.donation-details[_ngcontent-%COMP%] {\n  margin: 1.5rem 0;\n}\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.75rem;\n  color: var(--text-secondary);\n}\n.detail-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem !important;\n  color: var(--primary-color);\n}\n.status-chips[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background-color: var(--warning-color) !important;\n  color: white !important;\n}\n.status-confirmed[_ngcontent-%COMP%] {\n  background-color: var(--success-color) !important;\n  color: white !important;\n}\n.status-completed[_ngcontent-%COMP%] {\n  background-color: #2e7d32 !important;\n  color: white !important;\n}\n.status-cancelled[_ngcontent-%COMP%] {\n  background-color: var(--error-color) !important;\n  color: white !important;\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  padding: 1.5rem;\n  justify-content: space-between;\n}\n.card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 120px;\n  height: 40px;\n}\n@media (max-width: 768px) {\n  .donation-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding: 0 1rem 2rem;\n  }\n  .filter-section[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    margin: 1rem;\n    padding: 1.5rem;\n  }\n}\n/*# sourceMappingURL=donation-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DonationListComponent, { className: "DonationListComponent", filePath: "src\\app\\donations\\donation-list\\donation-list.component.ts", lineNumber: 311 });
})();
export {
  DonationListComponent
};
//# sourceMappingURL=chunk-PODMUXUW.js.map
