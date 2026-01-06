import { Component, Inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { TokenService } from '../../shared/services/token.service';
import { NgIf, isPlatformBrowser } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { PLATFORM_ID } from '@angular/core';

interface SignupFormData {
  fullName: string;
  role: string;
  contactInfo: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, RouterLink, NgIf],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  submitted = false;
  loadingSubmit = false;
  errorMessage = '';
  isBrowser = false;

  formData: SignupFormData = {
    fullName: '',
    role: '',
    contactInfo: '',
    email: '',
    password: ''
  };

  constructor(
    private auth: AuthService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    private tokenService: TokenService
  ) {
    // prevent SSR hydration issues
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  private showAlert(message: string): void {
    if (this.isBrowser && typeof window !== 'undefined' && window.alert) {
      window.alert(message);
    }
  }

  onSignup(form: NgForm) {
    console.log('SIGNUP CLICKED'); // debug
    this.submitted = true;
    this.errorMessage = '';

    if (!form.valid) {
      // mark all controls as touched to show validation
      try { form.form.markAllAsTouched(); } catch (e) { /* fallback */ }
      console.log('Form invalid', this.formData);
      return;
    }

    if (!this.isBrowser) return; // safety for SSR

    this.loadingSubmit = true;

    const payload = {
      name: this.formData.fullName,
      role: this.formData.role,
      contact_info: this.formData.contactInfo,
      email: this.formData.email,
      password: this.formData.password
    };

    console.log('Submitting payload', payload);

    this.auth.signup(payload).subscribe({
      next: () => {
        // After signup, attempt automatic login so user is taken directly to role-based page
        this.auth.login({ email: this.formData.email, password: this.formData.password }).subscribe({
          next: (res: any) => {
            this.loadingSubmit = false;
            try { this.showAlert('Account created and signed in successfully'); } catch {}
            // save token + role + name if available
            const name = res.name || '';
            this.authTokenSave(res.token, res.role, name);
            // route based on role
            if (res.role === 'NGO') {
              this.router.navigate(['/ngo/dashboard']);
            } else if (res.role === 'Donor') {
              this.router.navigate(['/donations']);
            } else {
              this.router.navigate(['/admin/dashboard']);
            }
          },
          error: (loginErr) => {
            this.loadingSubmit = false;
            // If auto-login fails, go to login page with message
            this.showAlert('Account created — please sign in');
            this.router.navigate(['/login']);
          }
        });
      },
      error: (err) => {
        this.loadingSubmit = false;
        this.errorMessage = err?.error?.message || err?.message || 'Signup failed. Please try again.';
        this.showAlert(this.errorMessage);
        console.error(err);
      }
    });
  }

  private authTokenSave(token: string, role: string, name?: string) {
    try {
      // use injected TokenService if available
      if (this.tokenService && typeof this.tokenService.saveAuth === 'function') {
        this.tokenService.saveAuth(token, role, name);
        return;
      }
    } catch (e) {}

    try {
      sessionStorage.setItem('auth_token', token);
      sessionStorage.setItem('user_role', role);
      if (name) sessionStorage.setItem('user_name', name);
    } catch (e) {}
  }
}
