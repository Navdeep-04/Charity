import { Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth.guard';
import { donorGuard } from './shared/guards/donor.guard';
import { ngoGuard } from './shared/guards/ngo.guard';
import { adminGuard } from './shared/guards/admin.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
  // Public routes
  { path: 'home', loadComponent: () => import('./layout/home/home.component').then(m => m.HomeComponent) },
  { path: 'login', loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent) },
  { path: 'signup', loadComponent: () => import('./auth/signup/signup.component').then(m => m.SignupComponent) },
  { path: 'forgot-password', loadComponent: () => import('./auth/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent) },
  
  // Protected routes - require authentication
  { path: 'donations', canActivate: [authGuard], loadComponent: () => import('./donations/donation-list/donation-list.component').then(m => m.DonationListComponent) },
  { path: 'donations/:id', canActivate: [authGuard], loadComponent: () => import('./donations/donation-details/donation-details.component').then(m => m.DonationDetailsComponent) },
  
  // Donor-only routes
  { path: 'contribute/:id', canActivate: [authGuard, donorGuard], loadComponent: () => import('./donations/contribution/contribution.component').then(m => m.ContributionComponent) },
  { path: 'history', canActivate: [authGuard, donorGuard], loadComponent: () => import('./donations/history/history.component').then(m => m.HistoryComponent) },
  
  // NGO-only routes
  { path: 'ngo/dashboard', canActivate: [authGuard, ngoGuard], loadComponent: () => import('./ngo/ngo-dashboard/ngo-dashboard.component').then(m => m.NgoDashboardComponent) },
  { path: 'ngo/create-donation', canActivate: [authGuard, ngoGuard], loadComponent: () => import('./donations/create-donation/create-donation.component').then(m => m.CreateDonationComponent) },
  { path: 'ngo/edit-donation/:id', canActivate: [authGuard, ngoGuard], loadComponent: () => import('./donations/create-donation/create-donation.component').then(m => m.CreateDonationComponent) },
  
  // Admin routes
  { path: 'admin/dashboard', canActivate: [authGuard, adminGuard], loadComponent: () => import('./admin/admin-dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent) },
  
  // Fallback
  { path: '**', redirectTo: '/home' }
];
