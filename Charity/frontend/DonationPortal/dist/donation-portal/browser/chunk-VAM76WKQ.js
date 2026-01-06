import {
  ApiService
} from "./chunk-PM2PVO3A.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-IWQJO666.js";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitle
} from "./chunk-CDFCSV45.js";
import {
  MatButtonModule
} from "./chunk-7VBQQGLQ.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-QC73AF7C.js";
import "./chunk-6JTJ7QYA.js";
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-T3FPL6CQ.js";

// src/app/admin/admin-dashboard/admin-dashboard.component.ts
function AdminDashboardComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "mat-spinner");
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading dashboard data...");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "mat-card", 8)(3, "div", 9)(4, "mat-icon", 10);
    \u0275\u0275text(5, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 11)(7, "h3");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "Total Donors");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "mat-card", 8)(12, "div", 9)(13, "mat-icon", 10);
    \u0275\u0275text(14, "business");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 11)(16, "h3");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, "Registered NGOs");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(20, "mat-card", 8)(21, "div", 9)(22, "mat-icon", 10);
    \u0275\u0275text(23, "volunteer_activism");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 11)(25, "h3");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28, "Active Requests");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(29, "mat-card", 8)(30, "div", 9)(31, "mat-icon", 10);
    \u0275\u0275text(32, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 11)(34, "h3");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275text(37, "Completed Donations");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(38, "div", 12)(39, "mat-card", 13)(40, "mat-card-header")(41, "mat-card-title")(42, "mat-icon");
    \u0275\u0275text(43, "analytics");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, " Platform Overview ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "mat-card-content")(46, "div", 14)(47, "div", 15)(48, "span", 16);
    \u0275\u0275text(49, "Total Contributions:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "span", 17);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 15)(53, "span", 16);
    \u0275\u0275text(54, "Confirmed Donations:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "span", 17);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 15)(58, "span", 16);
    \u0275\u0275text(59, "Cancelled Requests:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "span", 17);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(62, "mat-card", 13)(63, "mat-card-header")(64, "mat-card-title")(65, "mat-icon");
    \u0275\u0275text(66, "trending_up");
    \u0275\u0275elementEnd();
    \u0275\u0275text(67, " Impact Metrics ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "mat-card-content")(69, "div", 18);
    \u0275\u0275element(70, "img", 19);
    \u0275\u0275elementStart(71, "div", 20)(72, "h4");
    \u0275\u0275text(73, "Making a Difference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "p");
    \u0275\u0275text(75, "Connecting hearts, changing lives through donations");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate((ctx_r0.stats == null ? null : ctx_r0.stats.donors) || 0);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate((ctx_r0.stats == null ? null : ctx_r0.stats.ngos) || 0);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate((ctx_r0.stats == null ? null : ctx_r0.stats.donations == null ? null : ctx_r0.stats.donations.pending) || 0);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate((ctx_r0.stats == null ? null : ctx_r0.stats.donations == null ? null : ctx_r0.stats.donations.completed) || 0);
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate((ctx_r0.stats == null ? null : ctx_r0.stats.contributions) || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.stats == null ? null : ctx_r0.stats.donations == null ? null : ctx_r0.stats.donations.confirmed) || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.stats == null ? null : ctx_r0.stats.donations == null ? null : ctx_r0.stats.donations.cancelled) || 0);
  }
}
var AdminDashboardComponent = class _AdminDashboardComponent {
  api;
  stats = null;
  loading = false;
  constructor(api) {
    this.api = api;
  }
  ngOnInit() {
    this.loadDashboard();
  }
  loadDashboard() {
    this.loading = true;
    this.api.get("/dashboard/summary").subscribe({
      next: (res) => {
        this.stats = res.data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        if (typeof window !== "undefined" && window.alert) {
          window.alert("Failed to load dashboard data");
        }
      }
    });
  }
  static \u0275fac = function AdminDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminDashboardComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["app-admin-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 2, consts: [[1, "page-wrapper"], [1, "header-section"], [1, "highlight"], ["class", "loading-section", 4, "ngIf"], ["class", "dashboard-content", 4, "ngIf"], [1, "loading-section"], [1, "dashboard-content"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-content"], [1, "stat-icon"], [1, "stat-info"], [1, "overview-grid"], [1, "overview-card"], [1, "overview-stats"], [1, "overview-item"], [1, "label"], [1, "value"], [1, "impact-visual"], ["src", "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=200&fit=crop", "alt", "Impact", 1, "impact-image"], [1, "impact-overlay"]], template: function AdminDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Admin ");
      \u0275\u0275elementStart(4, "span", 2);
      \u0275\u0275text(5, "Dashboard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7, "Monitor platform statistics and manage the donation ecosystem");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, AdminDashboardComponent_div_8_Template, 4, 0, "div", 3)(9, AdminDashboardComponent_div_9_Template, 76, 7, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.stats);
    }
  }, dependencies: [NgIf, MatCardModule, MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatIconModule, MatIcon, MatProgressSpinnerModule, MatProgressSpinner, MatButtonModule], styles: ["\n\n.page-wrapper[_ngcontent-%COMP%] {\n  padding: 80px 2rem 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n  background: var(--background);\n}\n.header-section[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.header-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 0.5rem;\n}\n.highlight[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.header-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 1.1rem;\n}\n.loading-section[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 2rem;\n}\n.dashboard-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n}\n.stat-card[_ngcontent-%COMP%] {\n  border-radius: var(--radius-lg);\n  background: var(--surface);\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-hover);\n}\n.stat-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1.5rem;\n}\n.stat-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem !important;\n  color: var(--primary-color);\n}\n.stat-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.stat-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.9rem;\n}\n.overview-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n  gap: 2rem;\n}\n.overview-card[_ngcontent-%COMP%] {\n  border-radius: var(--radius-lg);\n  background: var(--surface);\n}\n.overview-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: var(--primary-color);\n  font-weight: 600;\n}\n.overview-stats[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.overview-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid var(--border-color);\n}\n.overview-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.overview-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.overview-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 1.1rem;\n}\n.impact-visual[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: var(--radius);\n  overflow: hidden;\n}\n.impact-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n}\n.impact-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));\n  color: white;\n  padding: 1.5rem;\n}\n.impact-overlay[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n}\n.impact-overlay[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  opacity: 0.9;\n}\n@media (max-width: 768px) {\n  .page-wrapper[_ngcontent-%COMP%] {\n    padding: 80px 1rem 2rem;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .overview-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=admin-dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src\\app\\admin\\admin-dashboard\\admin-dashboard.component.ts", lineNumber: 293 });
})();
export {
  AdminDashboardComponent
};
//# sourceMappingURL=chunk-VAM76WKQ.js.map
