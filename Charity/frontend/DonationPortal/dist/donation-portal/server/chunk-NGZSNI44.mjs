import './polyfills.server.mjs';
import {
  MatChip,
  MatChipSet,
  MatChipsModule
} from "./chunk-WFORJJHA.mjs";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-NSTLFNB7.mjs";
import {
  ApiService
} from "./chunk-UERBP4KN.mjs";
import "./chunk-LRZWNQIB.mjs";
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel
} from "./chunk-C6VA3TYH.mjs";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-LM6GKWJ5.mjs";
import "./chunk-ODCJVIX6.mjs";
import {
  MatCard,
  MatCardContent,
  MatCardModule
} from "./chunk-IPZ3STW5.mjs";
import {
  MatIcon,
  MatIconModule,
  MatOption
} from "./chunk-KLWG3A7K.mjs";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-OX7UA4JW.mjs";
import "./chunk-6ARHNOTB.mjs";
import "./chunk-EDINCC2X.mjs";
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
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-K3KG5ZC2.mjs";
import "./chunk-DKGUOSAX.mjs";

// src/app/donations/history/history.component.ts
function HistoryComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "mat-spinner");
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading your history...");
    \u0275\u0275elementEnd()();
  }
}
function HistoryComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "img", 15);
    \u0275\u0275elementStart(2, "mat-icon", 16);
    \u0275\u0275text(3, "history");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5, "No contributions found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Your donation history will appear here once you make contributions");
    \u0275\u0275elementEnd()();
  }
}
function HistoryComponent_div_23_mat_card_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 19)(1, "div", 20);
    \u0275\u0275element(2, "img", 21);
    \u0275\u0275elementStart(3, "mat-chip-set", 22)(4, "mat-chip");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "mat-card-content")(7, "h3");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 23)(10, "div", 24)(11, "mat-icon");
    \u0275\u0275text(12, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 24)(16, "mat-icon");
    \u0275\u0275text(17, "inventory");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 24)(21, "mat-icon");
    \u0275\u0275text(22, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "date");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const h_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.getImageForType(h_r1.donation_type), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getStatusClass(h_r1.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(h_r1.status);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(h_r1.donation_type);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(h_r1.location);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Contributed: ", h_r1.contribution_quantity, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 8, h_r1.pickup_date_time, "MMM d, h:mm a"));
  }
}
function HistoryComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, HistoryComponent_div_23_mat_card_1_Template, 26, 11, "mat-card", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredItems());
  }
}
var HistoryComponent = class _HistoryComponent {
  api;
  history = [];
  loading = false;
  filter = "All";
  constructor(api) {
    this.api = api;
  }
  ngOnInit() {
    this.loadHistory();
  }
  loadHistory() {
    this.loading = true;
    this.api.get("/contributions/donor/me").subscribe({
      next: (res) => {
        this.history = res || [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        if (typeof window !== "undefined" && window.alert) {
          window.alert("Failed to load contribution history");
        }
      }
    });
  }
  filteredItems() {
    if (this.filter === "All")
      return this.history;
    return this.history.filter((h) => h.status === this.filter);
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
  static \u0275fac = function HistoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HistoryComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HistoryComponent, selectors: [["app-history"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 24, vars: 4, consts: [[1, "page-wrapper"], [1, "header-section"], [1, "highlight"], [1, "filter-section"], ["appearance", "outline"], [3, "ngModelChange", "ngModel"], ["value", "All"], ["value", "PickedUp"], ["value", "Scheduled"], ["value", "Cancelled"], ["class", "loading-section", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "history-grid", 4, "ngIf"], [1, "loading-section"], [1, "empty-state"], ["src", "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&h=200&fit=crop", "alt", "empty"], [1, "empty-icon"], [1, "history-grid"], ["class", "history-card", 4, "ngFor", "ngForOf"], [1, "history-card"], [1, "card-header"], ["alt", "donation", 1, "card-image", 3, "src"], [1, "status-chips"], [1, "history-details"], [1, "detail-item"]], template: function HistoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Your ");
      \u0275\u0275elementStart(4, "span", 2);
      \u0275\u0275text(5, "Donation History");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7, "Track your completed and scheduled contributions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 3)(9, "mat-form-field", 4)(10, "mat-label");
      \u0275\u0275text(11, "Filter by Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "mat-select", 5);
      \u0275\u0275twoWayListener("ngModelChange", function HistoryComponent_Template_mat_select_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filter, $event) || (ctx.filter = $event);
        return $event;
      });
      \u0275\u0275elementStart(13, "mat-option", 6);
      \u0275\u0275text(14, "All Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "mat-option", 7);
      \u0275\u0275text(16, "Completed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "mat-option", 8);
      \u0275\u0275text(18, "Scheduled");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "mat-option", 9);
      \u0275\u0275text(20, "Cancelled");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(21, HistoryComponent_div_21_Template, 4, 0, "div", 10)(22, HistoryComponent_div_22_Template, 8, 0, "div", 11)(23, HistoryComponent_div_23_Template, 2, 1, "div", 12);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.filter);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredItems().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredItems().length > 0);
    }
  }, dependencies: [FormsModule, NgControlStatus, NgModel, NgIf, NgForOf, DatePipe, MatCardModule, MatCard, MatCardContent, MatIconModule, MatIcon, MatChipsModule, MatChip, MatChipSet, MatFormFieldModule, MatFormField, MatLabel, MatSelectModule, MatSelect, MatOption, MatProgressSpinnerModule, MatProgressSpinner], styles: ["\n\n.page-wrapper[_ngcontent-%COMP%] {\n  padding: 80px 2rem 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n  background: var(--background);\n}\n.header-section[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.header-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 0.5rem;\n}\n.highlight[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.header-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 1.1rem;\n}\n.filter-section[_ngcontent-%COMP%] {\n  max-width: 300px;\n  margin: 0 auto 2rem;\n}\n.loading-section[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 2rem;\n}\n.empty-state[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 200px;\n  object-fit: cover;\n  border-radius: var(--radius);\n  margin-bottom: 1.5rem;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 4rem !important;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n  color: var(--text-secondary);\n}\n.history-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 2rem;\n}\n.history-card[_ngcontent-%COMP%] {\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  transition: all 0.3s ease;\n  background: var(--surface);\n}\n.history-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-hover);\n}\n.card-header[_ngcontent-%COMP%] {\n  position: relative;\n}\n.card-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n}\n.status-chips[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n}\n.history-details[_ngcontent-%COMP%] {\n  margin: 1.5rem 0;\n}\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.75rem;\n  color: var(--text-secondary);\n}\n.detail-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem !important;\n  color: var(--primary-color);\n}\n.status-pickedup[_ngcontent-%COMP%], \n.status-completed[_ngcontent-%COMP%] {\n  background-color: var(--success-color) !important;\n  color: white !important;\n}\n.status-scheduled[_ngcontent-%COMP%] {\n  background-color: var(--warning-color) !important;\n  color: white !important;\n}\n.status-cancelled[_ngcontent-%COMP%] {\n  background-color: var(--error-color) !important;\n  color: white !important;\n}\n@media (max-width: 768px) {\n  .history-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .page-wrapper[_ngcontent-%COMP%] {\n    padding: 80px 1rem 2rem;\n  }\n}\n/*# sourceMappingURL=history.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HistoryComponent, { className: "HistoryComponent", filePath: "src\\app\\donations\\history\\history.component.ts", lineNumber: 210 });
})();
export {
  HistoryComponent
};
//# sourceMappingURL=chunk-NGZSNI44.mjs.map
