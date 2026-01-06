import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../shared/services/api.service';
import { FormsModule } from '@angular/forms';
import { DatePipe, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contribution',
  standalone: true,
  imports: [
    FormsModule, DatePipe, NgIf,
    MatCardModule, MatButtonModule, MatIconModule,
    MatFormFieldModule, MatInputModule, MatProgressSpinnerModule
  ],
  template: `
    <div class="page-wrapper">
      <div class="header-section">
        <h1>Confirm Your <span class="highlight">Contribution</span></h1>
        <p>Schedule pickup and finalize your donation details</p>
      </div>

      <div *ngIf="loading && !donation" class="loading-section">
        <mat-spinner></mat-spinner>
        <p>Loading donation details...</p>
      </div>

      <div *ngIf="donation" class="contribution-container">
        <div class="content-grid">
          <!-- Donation Summary -->
          <mat-card class="summary-card">
            <mat-card-header>
              <mat-card-title>
                <mat-icon>info</mat-icon>
                Donation Summary
              </mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <div class="summary-details">
                <div class="summary-item">
                  <strong>Type:</strong>
                  <span>{{ donation.donation_type }}</span>
                </div>
                <div class="summary-item">
                  <strong>NGO:</strong>
                  <span>{{ donation.ngo_name }}</span>
                </div>
                <div class="summary-item">
                  <strong>Location:</strong>
                  <span>{{ donation.location }}</span>
                </div>
                <div class="summary-item">
                  <strong>Required:</strong>
                  <span>{{ donation.quantity_or_amount }} units</span>
                </div>
                <div class="summary-item">
                  <strong>Priority:</strong>
                  <span class="priority-badge" [class]="donation.priority.toLowerCase()">
                    {{ donation.priority }}
                  </span>
                </div>
                <div class="summary-item">
                  <strong>Scheduled Pickup:</strong>
                  <span>{{ donation.pickup_date_time | date:'EEEE, MMM d, y - h:mm a' }}</span>
                </div>
              </div>
            </mat-card-content>
          </mat-card>

          <!-- Contribution Form -->
          <mat-card class="form-card">
            <mat-card-header>
              <mat-card-title>
                <mat-icon>volunteer_activism</mat-icon>
                Your Contribution
              </mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <form (ngSubmit)="submit()" class="contribution-form">
                <mat-form-field appearance="outline">
                  <mat-label>Contribution Quantity/Amount</mat-label>
                  <input matInput 
                         type="number" 
                         [(ngModel)]="form.contribution_quantity"
                         name="quantity"
                         placeholder="How much will you contribute?"
                         required>
                  <mat-icon matSuffix>inventory</mat-icon>
                  <mat-hint>Enter the amount you wish to contribute</mat-hint>
                </mat-form-field>

                <mat-form-field appearance="outline">
                  <mat-label>Preferred Pickup Time</mat-label>
                  <input matInput 
                         type="datetime-local"
                         [(ngModel)]="form.pickup_date_time"
                         name="pickup"
                         required>
                  <mat-icon matSuffix>schedule</mat-icon>
                  <mat-hint>When would you like us to pick up your donation?</mat-hint>
                </mat-form-field>

                <mat-form-field appearance="outline">
                  <mat-label>Additional Notes (Optional)</mat-label>
                  <textarea matInput 
                            rows="4"
                            [(ngModel)]="form.notes"
                            name="notes"
                            placeholder="Any special instructions or notes...">
                  </textarea>
                  <mat-icon matSuffix>note</mat-icon>
                </mat-form-field>

                <div class="form-actions">
                  <button mat-raised-button 
                          color="primary" 
                          type="submit" 
                          [disabled]="loading || !isFormValid()">
                    <mat-icon>check_circle</mat-icon>
                    {{ loading ? 'Confirming...' : 'Confirm Contribution' }}
                  </button>
                  
                  <button mat-stroked-button 
                          type="button"
                          (click)="goBack()">
                    <mat-icon>arrow_back</mat-icon>
                    Back to Details
                  </button>
                </div>
              </form>
            </mat-card-content>
          </mat-card>
        </div>

        <!-- Impact Information -->
        <mat-card class="impact-card">
          <mat-card-header>
            <mat-card-title>
              <mat-icon>favorite</mat-icon>
              Your Impact
            </mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="impact-grid">
              <div class="impact-item">
                <mat-icon>people</mat-icon>
                <div>
                  <h4>Direct Help</h4>
                  <p>Your contribution will directly help families in need</p>
                </div>
              </div>
              <div class="impact-item">
                <mat-icon>verified</mat-icon>
                <div>
                  <h4>Verified Process</h4>
                  <p>All donations are tracked and verified for transparency</p>
                </div>
              </div>
              <div class="impact-item">
                <mat-icon>history</mat-icon>
                <div>
                  <h4>Track Progress</h4>
                  <p>You can track your donation status in your history</p>
                </div>
              </div>
            </div>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .page-wrapper {
      padding: 80px 1rem 2rem;
      max-width: 1200px;
      margin: 0 auto;
      background: var(--background);
    }

    .header-section {
      text-align: center;
      margin-bottom: 3rem;
    }

    .header-section h1 {
      font-size: clamp(2rem, 5vw, 2.5rem);
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 0.5rem;
    }

    .highlight {
      color: var(--primary-color);
      font-weight: 700;
    }

    .header-section p {
      color: var(--text-secondary);
      font-size: 1.1rem;
    }

    .loading-section {
      text-align: center;
      padding: 4rem 2rem;
    }

    .contribution-container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .content-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }

    .summary-card,
    .form-card,
    .impact-card {
      border-radius: var(--radius-lg);
      background: var(--surface);
      box-shadow: var(--shadow);
    }

    .summary-card mat-card-title,
    .form-card mat-card-title,
    .impact-card mat-card-title {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-weight: 600;
      color: var(--primary-color);
    }

    .summary-details {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .summary-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem 0;
      border-bottom: 1px solid var(--border-color);
    }

    .summary-item:last-child {
      border-bottom: none;
    }

    .summary-item strong {
      color: var(--text-primary);
      font-weight: 500;
    }

    .priority-badge {
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      font-size: 0.8rem;
      font-weight: 600;
    }

    .priority-badge.urgent {
      background-color: var(--primary-light);
      color: var(--primary-color);
    }

    .priority-badge.normal {
      background-color: #e3f2fd;
      color: #1976d2;
    }

    .contribution-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .form-actions {
      display: flex;
      gap: 1rem;
      margin-top: 2rem;
    }

    .form-actions button {
      flex: 1;
      height: 44px;
      font-weight: 500;
    }

    .impact-card {
      grid-column: 1 / -1;
    }

    .impact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
    }

    .impact-item {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      padding: 1.5rem;
      background: var(--background);
      border-radius: var(--radius);
    }

    .impact-item mat-icon {
      color: var(--primary-color);
      font-size: 2rem !important;
      margin-top: 0.25rem;
    }

    .impact-item h4 {
      margin: 0 0 0.5rem 0;
      color: var(--text-primary);
      font-weight: 600;
    }

    .impact-item p {
      margin: 0;
      color: var(--text-secondary);
      font-size: 0.9rem;
      line-height: 1.5;
    }

    @media (max-width: 768px) {
      .content-grid {
        grid-template-columns: 1fr;
      }
      
      .form-actions {
        flex-direction: column;
      }
      
      .impact-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ContributionComponent implements OnInit {
  donation: any = null;
  loading = false;

  form = {
    contribution_quantity: null as number | null,
    pickup_date_time: '',
    notes: ''
  };

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.loadDonation(id);
  }

  loadDonation(id: number) {
    this.loading = true;

    this.api.get(`/donations/${id}`).subscribe({
      next: (res: any) => {
        this.donation = res;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.snackBar.open('Failed to load donation details', 'Close', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
      }
    });
  }

  isFormValid(): boolean {
    return !!(this.form.contribution_quantity && 
              this.form.contribution_quantity > 0 && 
              this.form.pickup_date_time);
  }

  submit() {
    if (!this.isFormValid()) {
      this.snackBar.open('Please fill all required fields', 'Close', {
        duration: 3000,
        panelClass: ['error-snackbar']
      });
      return;
    }

    this.loading = true;

    const payload = {
      donation_id: this.donation.id,
      contribution_quantity: this.form.contribution_quantity,
      pickup_date_time: this.form.pickup_date_time,
      notes: this.form.notes || null
    };

    this.api.post('/contributions', payload).subscribe({
      next: () => {
        this.loading = false;
        this.snackBar.open('Contribution confirmed successfully! Pickup scheduled.', 'Close', {
          duration: 5000,
          panelClass: ['success-snackbar']
        });
        this.router.navigate(['/history']);
      },
      error: (err) => {
        this.loading = false;
        const message = err?.error?.message || 'Failed to confirm contribution';
        this.snackBar.open(message, 'Close', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
      }
    });
  }

  goBack() {
    this.router.navigate(['/donations', this.donation.id]);
  }
}