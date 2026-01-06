import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-create-donation',
  standalone: true,
  imports: [
    FormsModule, NgIf,
    MatCardModule, MatButtonModule, MatIconModule,
    MatFormFieldModule, MatInputModule, MatSelectModule, MatProgressSpinnerModule
  ],
  template: `
    <div class="create-donation-page">
      <div class="container">
        <mat-card class="form-card">
          <mat-card-header>
            <mat-card-title>
              <mat-icon>add_circle</mat-icon>
              {{ isEdit ? 'Edit Donation Request' : 'Create Donation Request' }}
            </mat-card-title>
          </mat-card-header>

          <mat-card-content>
            <form (ngSubmit)="submit()" class="donation-form">
              <div class="form-row">
                <mat-form-field appearance="outline">
                  <mat-label>Donation Type *</mat-label>
                  <mat-select [(ngModel)]="form.donation_type" name="donation_type" required>
                    <mat-option *ngFor="let type of donationTypes" [value]="type">
                      {{ type }}
                    </mat-option>
                  </mat-select>
                </mat-form-field>

                <mat-form-field appearance="outline">
                  <mat-label>Priority</mat-label>
                  <mat-select [(ngModel)]="form.priority" name="priority">
                    <mat-option *ngFor="let priority of priorities" [value]="priority">
                      {{ priority }}
                    </mat-option>
                  </mat-select>
                </mat-form-field>
              </div>

              <mat-form-field appearance="outline">
                <mat-label>Quantity/Amount *</mat-label>
                <input matInput type="number" [(ngModel)]="form.quantity_or_amount" 
                       name="quantity_or_amount" required min="1">
              </mat-form-field>

              <mat-form-field appearance="outline">
                <mat-label>Location *</mat-label>
                <input matInput [(ngModel)]="form.location" name="location" required>
                <mat-icon matSuffix>location_on</mat-icon>
              </mat-form-field>

              <mat-form-field appearance="outline">
                <mat-label>Pickup Date & Time *</mat-label>
                <input matInput type="datetime-local" [(ngModel)]="form.pickup_date_time" 
                       name="pickup_date_time" required>
              </mat-form-field>

              <mat-form-field appearance="outline">
                <mat-label>Images (URLs)</mat-label>
                <input matInput [(ngModel)]="form.images" name="images" 
                       placeholder="Enter image URLs separated by commas">
                <mat-icon matSuffix>image</mat-icon>
              </mat-form-field>

              <div class="form-actions">
                <button mat-raised-button type="button" (click)="cancel()">
                  <mat-icon>cancel</mat-icon>
                  Cancel
                </button>
                
                <button mat-raised-button color="primary" type="submit" [disabled]="loading">
                  <mat-spinner *ngIf="loading" diameter="20"></mat-spinner>
                  <mat-icon *ngIf="!loading">{{ isEdit ? 'update' : 'add' }}</mat-icon>
                  {{ loading ? 'Saving...' : (isEdit ? 'Update' : 'Create') }}
                </button>
              </div>
            </form>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .create-donation-page {
      min-height: 100vh;
      background: linear-gradient(135deg, var(--primary-light) 0%, #fce4ec 100%);
      padding: 80px 2rem 2rem;
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
    }

    .form-card {
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-hover);
      background: var(--surface);
    }

    .form-card mat-card-title {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      color: var(--primary-color);
      font-size: 1.75rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .donation-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      margin-top: 1.5rem;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }

    .form-actions {
      display: flex;
      gap: 1rem;
      justify-content: flex-end;
      margin-top: 2rem;
      padding-top: 1.5rem;
      border-top: 1px solid var(--border-color);
    }

    .form-actions button {
      min-width: 140px;
      height: 44px;
      font-weight: 500;
    }

    @media (max-width: 768px) {
      .create-donation-page {
        padding: 80px 1rem 2rem;
      }
      
      .form-row {
        grid-template-columns: 1fr;
      }
      
      .form-actions {
        flex-direction: column;
      }
    }
  `]
})
export class CreateDonationComponent implements OnInit {
  loading = false;
  isEdit = false;
  donationId: string | null = null;

  form = {
    donation_type: '',
    priority: 'Normal',
    quantity_or_amount: null as number | null,
    location: '',
    pickup_date_time: '',
    images: ''
  };

  donationTypes = ['Food', 'Clothes', 'Funds', 'Medicine', 'Other'];
  priorities = ['Normal', 'Urgent'];

  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.donationId = this.route.snapshot.paramMap.get('id');
    this.isEdit = !!this.donationId;
    
    if (this.isEdit) {
      this.loadDonation();
    }
  }

  loadDonation() {
    this.api.get(`/donations/${this.donationId}`).subscribe({
      next: (donation: any) => {
        this.form = {
          donation_type: donation.donation_type,
          priority: donation.priority,
          quantity_or_amount: donation.quantity_or_amount,
          location: donation.location,
          pickup_date_time: donation.pickup_date_time?.slice(0, 16),
          images: donation.images || ''
        };
      },
      error: () => {
        if (typeof window !== 'undefined' && window.alert) {
          window.alert('Failed to load donation details');
        }
        this.router.navigate(['/ngo/dashboard']);
      }
    });
  }

  submit() {
    if (!this.form.donation_type ||
        !this.form.quantity_or_amount ||
        !this.form.location ||
        !this.form.pickup_date_time) {
      if (typeof window !== 'undefined' && window.alert) {
        window.alert('Please fill all required fields');
      }
      return;
    }

    this.loading = true;
    const endpoint = this.isEdit ? `/donations/${this.donationId}` : '/donations';
    const method = this.isEdit ? 'put' : 'post';

    this.api[method](endpoint, this.form).subscribe({
      next: () => {
        this.loading = false;
        if (typeof window !== 'undefined' && window.alert) {
          window.alert(`Donation request ${this.isEdit ? 'updated' : 'created'} successfully`);
        }
        this.router.navigate(['/ngo/dashboard']);
      },
      error: (err) => {
        this.loading = false;
        if (typeof window !== 'undefined' && window.alert) {
          window.alert(err?.error?.message || `Failed to ${this.isEdit ? 'update' : 'create'} donation`);
        }
      }
    });
  }

  cancel() {
    this.router.navigate(['/ngo/dashboard']);
  }
}
