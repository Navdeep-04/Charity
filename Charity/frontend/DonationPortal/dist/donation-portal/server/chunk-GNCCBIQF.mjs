import './polyfills.server.mjs';
import {
  MatChip,
  MatChipSet,
  MatChipsModule
} from "./chunk-WFORJJHA.mjs";
import {
  ApiService
} from "./chunk-UERBP4KN.mjs";
import "./chunk-C6VA3TYH.mjs";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-LM6GKWJ5.mjs";
import "./chunk-ODCJVIX6.mjs";
import {
  MatCard,
  MatCardActions,
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
import "./chunk-OX7UA4JW.mjs";
import "./chunk-6ARHNOTB.mjs";
import {
  TokenService
} from "./chunk-TQZDYRCH.mjs";
import {
  ActivatedRoute,
  Router,
  RouterLink
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-K3KG5ZC2.mjs";
import "./chunk-DKGUOSAX.mjs";

// src/app/donations/donation-details/donation-details.component.ts
var _c0 = (a0) => ["/contribute", a0];
var _c1 = (a0) => ["/ngo/edit-donation", a0];
function DonationDetailsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "mat-spinner");
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading donation details...");
    \u0275\u0275elementEnd()();
  }
}
function DonationDetailsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "img", 6);
    \u0275\u0275elementStart(2, "mat-icon", 7);
    \u0275\u0275text(3, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5, "Donation not found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 8)(7, "mat-icon");
    \u0275\u0275text(8, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " Back to Donations ");
    \u0275\u0275elementEnd()();
  }
}
function DonationDetailsComponent_div_3_button_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 30)(1, "mat-icon");
    \u0275\u0275text(2, "volunteer_activism");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Contribute Now ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c0, ctx_r0.donation.id));
  }
}
function DonationDetailsComponent_div_3_button_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 31)(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Edit Request ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c1, ctx_r0.donation.id));
  }
}
function DonationDetailsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "mat-card", 10)(2, "div", 11);
    \u0275\u0275element(3, "img", 12);
    \u0275\u0275elementStart(4, "div", 13)(5, "mat-chip-set")(6, "mat-chip")(7, "mat-icon");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-chip")(11, "mat-icon");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "mat-card-content", 14)(15, "div", 15)(16, "div", 16)(17, "h1");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 17)(20, "h3")(21, "mat-icon");
    \u0275\u0275text(22, "business");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Organization");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 18);
    \u0275\u0275element(25, "img", 19);
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 17)(29, "h3")(30, "mat-icon");
    \u0275\u0275text(31, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, " Location & Pickup");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 18)(34, "mat-icon");
    \u0275\u0275text(35, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 18)(39, "mat-icon");
    \u0275\u0275text(40, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 17)(45, "h3")(46, "mat-icon");
    \u0275\u0275text(47, "inventory");
    \u0275\u0275elementEnd();
    \u0275\u0275text(48, " Requirements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 18)(50, "mat-icon");
    \u0275\u0275text(51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span");
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(54, "div", 20)(55, "mat-card", 21)(56, "mat-card-header")(57, "mat-card-title")(58, "mat-icon");
    \u0275\u0275text(59, "volunteer_activism");
    \u0275\u0275elementEnd();
    \u0275\u0275text(60, " Take Action ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "mat-card-content");
    \u0275\u0275element(62, "img", 22);
    \u0275\u0275elementStart(63, "p");
    \u0275\u0275text(64, "Help make a difference by contributing to this cause.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "mat-card-actions");
    \u0275\u0275template(66, DonationDetailsComponent_div_3_button_66_Template, 4, 3, "button", 23)(67, DonationDetailsComponent_div_3_button_67_Template, 4, 3, "button", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "mat-card", 25)(69, "mat-card-header")(70, "mat-card-title")(71, "mat-icon");
    \u0275\u0275text(72, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(73, " Impact Information ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "mat-card-content")(75, "div", 26)(76, "div", 27);
    \u0275\u0275element(77, "img", 28);
    \u0275\u0275elementStart(78, "div")(79, "strong");
    \u0275\u0275text(80, "Lives Impacted");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "p");
    \u0275\u0275text(82, "This donation will help multiple families");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(83, "div", 27);
    \u0275\u0275element(84, "img", 29);
    \u0275\u0275elementStart(85, "div")(86, "strong");
    \u0275\u0275text(87, "Verified NGO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "p");
    \u0275\u0275text(89, "This organization is verified and trusted");
    \u0275\u0275elementEnd()()()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r0.getImageForType(ctx_r0.donation.donation_type), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r0.donation.priority === "Urgent" ? "urgent-chip" : "normal-chip");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.donation.priority === "Urgent" ? "warning" : "info");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.donation.priority, " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.getStatusClass(ctx_r0.donation.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getStatusIcon(ctx_r0.donation.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.donation.status, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.donation.donation_type, " Donation");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.donation.ngo_name);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.donation.location);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(43, 17, ctx_r0.donation.pickup_date_time, "EEEE, MMM d, y - h:mm a"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.getTypeIcon(ctx_r0.donation.donation_type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.donation.quantity_or_amount, " units needed");
    \u0275\u0275advance(13);
    \u0275\u0275property("ngIf", ctx_r0.role === "Donor" && ctx_r0.donation.status === "Pending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.role === "NGO" && ctx_r0.isMyDonation);
  }
}
var DonationDetailsComponent = class _DonationDetailsComponent {
  route;
  api;
  token;
  router;
  donation = null;
  loading = false;
  constructor(route, api, token, router) {
    this.route = route;
    this.api = api;
    this.token = token;
    this.router = router;
  }
  get role() {
    return this.token.getRole();
  }
  get isMyDonation() {
    return this.role === "NGO";
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
        this.donation = null;
      }
    });
  }
  getStatusClass(status) {
    return `status-${status.toLowerCase()}`;
  }
  getStatusIcon(status) {
    const icons = {
      "Pending": "hourglass_empty",
      "Confirmed": "check_circle",
      "Completed": "done_all",
      "Cancelled": "cancel"
    };
    return icons[status] || "info";
  }
  getTypeIcon(type) {
    const icons = {
      "Food": "restaurant",
      "Clothes": "checkroom",
      "Funds": "attach_money",
      "Medicine": "medical_services",
      "Other": "category"
    };
    return icons[type] || "category";
  }
  getImageForType(type) {
    const images = {
      "Food": "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=300&fit=crop",
      "Clothes": "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&h=300&fit=crop",
      "Funds": "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=300&fit=crop",
      "Medicine": "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=300&fit=crop",
      "Other": "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=300&fit=crop"
    };
    return images[type] || images["Other"];
  }
  static \u0275fac = function DonationDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DonationDetailsComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(TokenService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DonationDetailsComponent, selectors: [["app-donation-details"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 3, consts: [[1, "page-wrapper"], ["class", "loading-section", 4, "ngIf"], ["class", "error-section", 4, "ngIf"], ["class", "details-container", 4, "ngIf"], [1, "loading-section"], [1, "error-section"], ["src", "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop", "alt", "not found"], [1, "error-icon"], ["mat-raised-button", "", "color", "primary", "routerLink", "/donations"], [1, "details-container"], [1, "main-card"], [1, "card-header"], ["alt", "donation", 1, "header-image", 3, "src"], [1, "header-overlay"], [1, "main-content"], [1, "content-grid"], [1, "left-section"], [1, "detail-section"], [1, "detail-item"], ["src", "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=50&h=50&fit=crop", "alt", "ngo", 1, "ngo-avatar"], [1, "right-section"], [1, "action-card"], ["src", "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&h=150&fit=crop", "alt", "help", 1, "action-image"], ["mat-raised-button", "", "color", "primary", 3, "routerLink", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", 3, "routerLink", 4, "ngIf"], [1, "info-card"], [1, "impact-stats"], [1, "stat-item"], ["src", "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=60&h=60&fit=crop", "alt", "impact", 1, "impact-icon"], ["src", "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=60&h=60&fit=crop", "alt", "verified", 1, "impact-icon"], ["mat-raised-button", "", "color", "primary", 3, "routerLink"], ["mat-raised-button", "", "color", "accent", 3, "routerLink"]], template: function DonationDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, DonationDetailsComponent_div_1_Template, 4, 0, "div", 1)(2, DonationDetailsComponent_div_2_Template, 10, 0, "div", 2)(3, DonationDetailsComponent_div_3_Template, 90, 20, "div", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.donation);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.donation);
    }
  }, dependencies: [
    NgIf,
    DatePipe,
    RouterLink,
    MatCardModule,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatButtonModule,
    MatButton,
    MatIconModule,
    MatIcon,
    MatChipsModule,
    MatChip,
    MatChipSet,
    MatProgressSpinnerModule,
    MatProgressSpinner
  ], styles: ["\n\n.page-wrapper[_ngcontent-%COMP%] {\n  padding: 80px 20px 40px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.loading-section[_ngcontent-%COMP%], \n.error-section[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n}\n.loading-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.error-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  color: #666;\n}\n.error-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 300px;\n  object-fit: cover;\n  border-radius: 12px;\n  margin-bottom: 1rem;\n}\n.error-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  color: #f44336;\n  margin-bottom: 1rem;\n}\n.main-card[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  overflow: hidden;\n}\n.card-header[_ngcontent-%COMP%] {\n  position: relative;\n}\n.header-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n  object-fit: cover;\n}\n.header-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n}\n.urgent-chip[_ngcontent-%COMP%] {\n  background-color: #d32f2f !important;\n  color: white !important;\n}\n.normal-chip[_ngcontent-%COMP%] {\n  background-color: #1976d2 !important;\n  color: white !important;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background-color: #ff9800 !important;\n  color: white !important;\n}\n.status-confirmed[_ngcontent-%COMP%] {\n  background-color: #4caf50 !important;\n  color: white !important;\n}\n.status-completed[_ngcontent-%COMP%] {\n  background-color: #2e7d32 !important;\n  color: white !important;\n}\n.status-cancelled[_ngcontent-%COMP%] {\n  background-color: #f44336 !important;\n  color: white !important;\n}\n.main-content[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 2rem;\n}\n.left-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 2rem;\n  color: #1a1a1a;\n}\n.detail-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.detail-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #d32f2f;\n  margin-bottom: 1rem;\n  font-size: 1.2rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.75rem;\n  font-size: 1.1rem;\n}\n.detail-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #d32f2f;\n  font-size: 1.3rem;\n}\n.ngo-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.right-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.action-card[_ngcontent-%COMP%], \n.info-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n}\n.action-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 120px;\n  object-fit: cover;\n  border-radius: 8px;\n  margin-bottom: 1rem;\n}\n.action-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.action-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 0.5rem;\n}\n.impact-stats[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n}\n.impact-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.stat-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.25rem;\n}\n.stat-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 0.9rem;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .content-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .left-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n/*# sourceMappingURL=donation-details.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DonationDetailsComponent, { className: "DonationDetailsComponent", filePath: "src\\app\\donations\\donation-details\\donation-details.component.ts", lineNumber: 351 });
})();
export {
  DonationDetailsComponent
};
//# sourceMappingURL=chunk-GNCCBIQF.mjs.map
