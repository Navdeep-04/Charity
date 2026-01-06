import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { TokenService } from '../../shared/services/token.service';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, NgIf, MatCardModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule],
  template: `
    <div class="auth-page">
      <div class="auth-container">
        <div class="auth-image">
          <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=800&fit=crop" alt="donation">
          <div class="image-overlay">
            <h2>Welcome Back</h2>
            <p>Continue making a difference in people's lives</p>
          </div>
        </div>
        
        <div class="auth-form">
          <mat-card class="login-card">
            <mat-card-header>
              <mat-card-title>
                <mat-icon>login</mat-icon>
                Sign in to your account
              </mat-card-title>
            </mat-card-header>
            
            <mat-card-content>
              <form (ngSubmit)="onLogin()" class="login-form">
                <mat-form-field appearance="outline">
                  <mat-label>Email</mat-label>
                  <input matInput type="email" [(ngModel)]="formData.email" name="email" required>
                  <mat-icon matSuffix>email</mat-icon>
                </mat-form-field>

                <mat-form-field appearance="outline">
                  <mat-label>Password</mat-label>
                  <input matInput type="password" [(ngModel)]="formData.password" name="password" required>
                  <mat-icon matSuffix>lock</mat-icon>
                </mat-form-field>

                <div class="form-actions">
                  <button mat-raised-button color="primary" type="submit" [disabled]="loading" class="login-btn">
                    <mat-spinner *ngIf="loading" diameter="20"></mat-spinner>
                    <mat-icon *ngIf="!loading">login</mat-icon>
                    {{ loading ? 'Signing in...' : 'Sign In' }}
                  </button>
                </div>

                <div class="form-links">
                  <a mat-button routerLink="/forgot-password" color="primary">
                    <mat-icon>help</mat-icon>
                    Forgot Password?
                  </a>
                </div>
              </form>
            </mat-card-content>
            
            <mat-card-actions>
              <div class="signup-link">
                <span>Don't have an account?</span>
                <button mat-flat-button color="primary" routerLink="/signup" aria-label="Create account" class="create-account-btn">
                  <mat-icon>person_add</mat-icon>
                  Create Account
                </button>
              </div>
            </mat-card-actions>
          </mat-card>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .auth-page {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, var(--primary-light) 0%, #fce4ec 100%);
      padding: 2rem 1rem;
    }

    .auth-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      max-width: 1000px;
      width: 100%;
      background: var(--surface);
      border-radius: var(--radius-lg);
      overflow: hidden;
      box-shadow: var(--shadow-hover);
    }

    .auth-image {
      position: relative;
      overflow: hidden;
    }

    .auth-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .image-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(transparent, rgba(0,0,0,0.8));
      color: white;
      padding: 2rem;
    }

    .image-overlay h2 {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .auth-form {
      padding: 3rem 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .login-card {
      width: 100%;
      max-width: 400px;
      border: none;
      box-shadow: none;
    }

    .login-card mat-card-title {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.75rem;
      font-weight: 600;
      color: var(--primary-color);
      margin-bottom: 2rem;
    }

    .login-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .form-actions {
      margin-top: 1.5rem;
    }

    .login-btn {
      width: 100%;
      height: 48px;
      font-size: 1.1rem;
      font-weight: 500;
    }

    .form-links {
      text-align: center;
      margin-top: 1.5rem;
    }

    .signup-link {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      padding: 1.5rem 0;
      text-align: center;
      border-top: 1px solid var(--border-color);
      margin-top: 1rem;
    }

    .signup-link span {
      color: var(--text-secondary);
    }

    .signup-link button {
      width: 100%;
      height: 44px;
    }

    /* Ensure the create account button has strong contrast */
    .create-account-btn {
      font-weight: 600;
      box-shadow: var(--shadow-hover);
    }
    /* Ensure strong, accessible contrast for the flat button */
    .create-account-btn {
      background: var(--primary-color);
      color: #fff;
      border-radius: 6px;
      box-shadow: var(--shadow-hover);
    }

    @media (max-width: 768px) {
      .auth-container {
        grid-template-columns: 1fr;
        max-width: 400px;
      }
      
      .auth-image {
        height: 200px;
      }
      
      .auth-form {
        padding: 2rem 1rem;
      }
    }
  `]
})
export class LoginComponent {
  loading = false;
  errorMessage = '';

  formData: { email: string; password: string } = {
    email: '',
    password: ''
  };

  constructor(
    private auth: AuthService,
    private token: TokenService,
    private router: Router
  ) {}

  onLogin() {
    if (!this.formData.email || !this.formData.password) return;

    this.loading = true;
    this.errorMessage = '';

    this.auth.login(this.formData).subscribe({
      next: (res: any) => {
        this.loading = false;
        this.token.saveAuth(res.token, res.role);

        if (res.role === 'NGO') {
          this.router.navigate(['/ngo/dashboard']);
        } else if (res.role === 'Donor') {
          this.router.navigate(['/donations']);
        } else {
          this.router.navigate(['/admin/dashboard']);
        }
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = err?.error?.message || 'Invalid email or password';
        if (typeof window !== 'undefined' && window.alert) {
          window.alert(this.errorMessage);
        }
      }
    });
  }
}

