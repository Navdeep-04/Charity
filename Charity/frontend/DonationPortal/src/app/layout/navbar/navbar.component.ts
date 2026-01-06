import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TokenService } from '../../shared/services/token.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, NgIf],
  template: `
    <mat-toolbar color="primary" class="navbar">
      <div class="nav-container">
        <div class="nav-brand">
          <mat-icon class="brand-icon">volunteer_activism</mat-icon>
          <span routerLink="/home" class="brand-text">DonateHub</span>
        </div>

        <div class="nav-links" *ngIf="!isLoggedIn">
          <button mat-button routerLink="/home">Home</button>
          <button mat-button routerLink="/donations">Donations</button>
          <button mat-button routerLink="/login">Login</button>
          <button mat-raised-button routerLink="/signup">Sign Up</button>
        </div>

        <div class="nav-links" *ngIf="isLoggedIn">
          <button mat-button routerLink="/donations" *ngIf="role === 'Donor'">Browse</button>
          <button mat-button routerLink="/history" *ngIf="role === 'Donor'">History</button>
          <button mat-button routerLink="/ngo/dashboard" *ngIf="role === 'NGO'">Dashboard</button>
          <button mat-button routerLink="/ngo/create-donation" *ngIf="role === 'NGO'">Create Request</button>
          <button mat-button routerLink="/admin/dashboard" *ngIf="role === 'Admin'">Admin</button>
          
          <button mat-icon-button [matMenuTriggerFor]="userMenu">
            <mat-icon>account_circle</mat-icon>
          </button>
          <mat-menu #userMenu="matMenu">
            <button mat-menu-item (click)="logout()">
              <mat-icon>logout</mat-icon>
              Logout
            </button>
          </mat-menu>
        </div>
      </div>
    </mat-toolbar>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }

    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .nav-brand {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
    }

    .brand-icon {
      font-size: 1.8rem;
    }

    .brand-text {
      font-size: 1.5rem;
      font-weight: 700;
      text-decoration: none;
      color: inherit;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    @media (max-width: 768px) {
      .nav-container {
        padding: 0 0.5rem;
      }
      
      .nav-links button {
        padding: 0 8px;
        min-width: auto;
      }
    }
  `]
})
export class NavbarComponent {
  constructor(
    private token: TokenService,
    private router: Router
  ) {}

  get isLoggedIn() {
    return this.token.isLoggedIn();
  }

  get role() {
    return this.token.getRole();
  }

  logout() {
    this.token.clear();
    this.router.navigate(['/home']);
  }
}