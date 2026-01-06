import './polyfills.server.mjs';
import {
  MatCard,
  MatCardContent,
  MatCardModule
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
  RouterLink
} from "./chunk-CEUJRBHC.mjs";
import "./chunk-EDINCC2X.mjs";
import {
  NgForOf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-K3KG5ZC2.mjs";
import "./chunk-DKGUOSAX.mjs";

// src/app/layout/home/home.component.ts
function HomeComponent_mat_card_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 19);
    \u0275\u0275element(1, "img", 20);
    \u0275\u0275elementStart(2, "mat-card-content")(3, "mat-icon", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const feature_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", feature_r1.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(feature_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r1.description);
  }
}
function HomeComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "img", 23);
    \u0275\u0275elementStart(2, "div", 24)(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const image_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", image_r2.url, \u0275\u0275sanitizeUrl)("alt", image_r2.alt);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(image_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(image_r2.description);
  }
}
var HomeComponent = class _HomeComponent {
  features = [
    {
      icon: "search",
      title: "Browse Requests",
      description: "Find donation requests from verified NGOs in your area",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=300&h=200&fit=crop"
    },
    {
      icon: "favorite",
      title: "Make Impact",
      description: "Contribute food, funds, clothes or other essentials",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=300&h=200&fit=crop"
    },
    {
      icon: "schedule",
      title: "Schedule Pickup",
      description: "Arrange convenient pickup times for your donations",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&h=200&fit=crop"
    }
  ];
  galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop",
      alt: "Food donation",
      title: "Food Distribution",
      description: "Providing meals to families in need"
    },
    {
      url: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=300&fit=crop",
      alt: "Clothing donation",
      title: "Clothing Drive",
      description: "Warm clothes for winter season"
    },
    {
      url: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
      alt: "Community help",
      title: "Community Support",
      description: "Building stronger communities together"
    },
    {
      url: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop",
      alt: "Education support",
      title: "Education Aid",
      description: "Supporting children's education"
    },
    {
      url: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=300&fit=crop",
      alt: "Medical aid",
      title: "Medical Support",
      description: "Healthcare assistance for all"
    },
    {
      url: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=300&fit=crop",
      alt: "Volunteer work",
      title: "Volunteer Network",
      description: "Join our volunteer community"
    }
  ];
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 63, vars: 2, consts: [[1, "hero-section"], [1, "hero-container"], [1, "hero-content"], [1, "highlight"], [1, "hero-actions"], ["mat-raised-button", "", "color", "primary", "routerLink", "/donations"], ["mat-raised-button", "", "color", "accent", "routerLink", "/signup"], [1, "hero-image"], ["src", "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop", "alt", "Donation"], [1, "features-section"], [1, "container"], [1, "features-grid"], ["class", "feature-card", 4, "ngFor", "ngForOf"], [1, "gallery-section"], [1, "gallery-grid"], ["class", "gallery-item", 4, "ngFor", "ngForOf"], [1, "stats-section"], [1, "stats-grid"], [1, "stat-item"], [1, "feature-card"], ["alt", "feature", 1, "feature-image", 3, "src"], [1, "feature-icon"], [1, "gallery-item"], [3, "src", "alt"], [1, "overlay"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "Connect Hearts, ");
      \u0275\u0275elementStart(5, "span", 3);
      \u0275\u0275text(6, "Change Lives");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "p");
      \u0275\u0275text(8, "Join our platform to make meaningful donations and support verified NGOs in your community");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 4)(10, "button", 5)(11, "mat-icon");
      \u0275\u0275text(12, "volunteer_activism");
      \u0275\u0275elementEnd();
      \u0275\u0275text(13, " Start Donating ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 6)(15, "mat-icon");
      \u0275\u0275text(16, "person_add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(17, " Join as NGO ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "div", 7);
      \u0275\u0275element(19, "img", 8);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 9)(21, "div", 10)(22, "h2");
      \u0275\u0275text(23, "How It Works");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 11);
      \u0275\u0275template(25, HomeComponent_mat_card_25_Template, 9, 4, "mat-card", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "div", 13)(27, "div", 10)(28, "h2");
      \u0275\u0275text(29, "Making a Difference");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 14);
      \u0275\u0275template(31, HomeComponent_div_31_Template, 7, 4, "div", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "div", 16)(33, "div", 10)(34, "div", 17)(35, "div", 18)(36, "mat-icon");
      \u0275\u0275text(37, "people");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "h3");
      \u0275\u0275text(39, "500+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "p");
      \u0275\u0275text(41, "Active Donors");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 18)(43, "mat-icon");
      \u0275\u0275text(44, "business");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "h3");
      \u0275\u0275text(46, "50+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "p");
      \u0275\u0275text(48, "Verified NGOs");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div", 18)(50, "mat-icon");
      \u0275\u0275text(51, "favorite");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "h3");
      \u0275\u0275text(53, "1000+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "p");
      \u0275\u0275text(55, "Lives Impacted");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "div", 18)(57, "mat-icon");
      \u0275\u0275text(58, "volunteer_activism");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "h3");
      \u0275\u0275text(60, "2500+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "p");
      \u0275\u0275text(62, "Donations Made");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(25);
      \u0275\u0275property("ngForOf", ctx.features);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngForOf", ctx.galleryImages);
    }
  }, dependencies: [RouterLink, MatButtonModule, MatButton, MatCardModule, MatCard, MatCardContent, MatIconModule, MatIcon, NgForOf], styles: ["\n\n.hero-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-light) 0%,\n      #fce4ec 100%);\n  padding: 80px 0;\n  margin-top: -64px;\n  padding-top: 144px;\n}\n.hero-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 2rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem;\n  align-items: center;\n}\n.hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(2.5rem, 5vw, 4rem);\n  font-weight: 700;\n  line-height: 1.2;\n  margin-bottom: 1.5rem;\n  color: var(--text-primary);\n}\n.highlight[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  display: inline-block;\n}\n.hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: var(--text-secondary);\n  margin-bottom: 2.5rem;\n  line-height: 1.6;\n}\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.hero-image[_ngcontent-%COMP%] {\n  position: relative;\n}\n.hero-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 400px;\n  object-fit: cover;\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-hover);\n}\n.features-section[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  background: var(--surface);\n}\n.features-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2.5rem;\n  font-weight: 600;\n  margin-bottom: 3rem;\n  color: var(--text-primary);\n}\n.features-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  gap: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 2rem;\n}\n.feature-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.feature-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n}\n.feature-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  border-radius: var(--radius);\n  margin-bottom: 1.5rem;\n}\n.feature-icon[_ngcontent-%COMP%] {\n  font-size: 3rem !important;\n  color: var(--primary-color);\n  margin-bottom: 1rem;\n}\n.feature-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n  color: var(--text-primary);\n}\n.feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  line-height: 1.6;\n}\n.gallery-section[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  background: var(--background);\n}\n.gallery-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2.5rem;\n  font-weight: 600;\n  margin-bottom: 3rem;\n  color: var(--text-primary);\n}\n.gallery-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 2rem;\n}\n.gallery-item[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  height: 280px;\n  cursor: pointer;\n}\n.gallery-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n.gallery-item[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));\n  color: white;\n  padding: 2rem 1.5rem 1.5rem;\n  transform: translateY(100%);\n  transition: transform 0.3s ease;\n}\n.gallery-item[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  transform: translateY(0);\n}\n.overlay[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n}\n.stats-section[_ngcontent-%COMP%] {\n  background: var(--primary-color);\n  color: white;\n  padding: 60px 0;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 2rem;\n  text-align: center;\n}\n.stat-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 3rem !important;\n  margin-bottom: 1rem;\n  opacity: 0.9;\n}\n.stat-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n}\n.stat-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  opacity: 0.9;\n}\n@media (max-width: 768px) {\n  .hero-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n    text-align: center;\n    padding: 0 1rem;\n  }\n  .hero-actions[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .features-grid[_ngcontent-%COMP%], \n   .gallery-grid[_ngcontent-%COMP%], \n   .stats-grid[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\layout\\home\\home.component.ts", lineNumber: 324 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-TVZO4CJR.mjs.map
