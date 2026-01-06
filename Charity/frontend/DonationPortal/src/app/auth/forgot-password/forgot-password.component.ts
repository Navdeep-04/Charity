import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  email = '';
  loading = false;
  submit = false;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    this.submit = true;

    if (!this.email) return;

    this.loading = true;

    this.auth.forgotPassword({ email: this.email }).subscribe({
      next: () => {
        this.loading = false;
        if (typeof window !== 'undefined' && window.alert) window.alert('Password sent to your registered email');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.loading = false;
        if (typeof window !== 'undefined' && window.alert) window.alert(err?.error?.message || 'Failed to send email. Try again.');
      }
    });
  }
}
