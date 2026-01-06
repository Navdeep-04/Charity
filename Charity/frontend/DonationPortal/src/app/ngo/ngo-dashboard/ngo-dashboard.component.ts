import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Router, RouterModule } from '@angular/router';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-ngo-dashboard',
  standalone: true,
  imports: [DatePipe, RouterModule, FormsModule, NgFor, NgIf, MatCardModule, MatButtonModule, MatIconModule, MatChipsModule, MatProgressBarModule, MatProgressSpinnerModule],
  template: `
    <div class="page-wrapper">
      <div class="header-section">
        <h1>NGO <span class="highlight">Dashboard</span></h1>
        <p>Manage your donation requests and track contributions</p>
        <button mat-raised-button color="primary" routerLink="/ngo/create-donation">
          <mat-icon>add</mat-icon>
          Create New Request
        </button>
      </div>

      <div *ngIf="loading" class="loading-section">
        <mat-spinner></mat-spinner>
        <p>Loading your requests...</p>
      </div>

      <div *ngIf="!loading && requests.length === 0" class="empty-state">
        <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&h=200&fit=crop" alt="empty">
        <mat-icon class="empty-icon">inbox</mat-icon>
        <h3>No donation requests yet</h3>
        <p>Create your first donation request to get started</p>
        <button mat-raised-button color="primary" routerLink="/ngo/create-donation">
          <mat-icon>add</mat-icon>
          Create Request
        </button>
      </div>

      <div class="requests-grid" *ngIf="!loading && requests.length > 0">
        <mat-card *ngFor="let d of requests" class="request-card">
          <div class="card-header">
            <img [src]="getImageForType(d.donation_type)" alt="donation" class="card-image">
            <mat-chip-set class="priority-chips">
              <mat-chip [class]="d.priority === 'Urgent' ? 'urgent-chip' : 'normal-chip'">
                {{ d.priority }}
              </mat-chip>
            </mat-chip-set>
          </div>

          <mat-card-content>
            <h3>{{ d.donation_type }} - {{ d.location }}</h3>
            <div class="request-details">
              <div class="detail-item">
                <mat-icon>inventory</mat-icon>
                <span>Required: {{ d.quantity_or_amount }}</span>
              </div>
              <div class="detail-item">
                <mat-icon>schedule</mat-icon>
                <span>{{ d.pickup_date_time | date:'MMM d, h:mm a' }}</span>
              </div>
            </div>
            
            <div class="progress-section">
              <div class="progress-info">
                <span>{{ d.contributed || 0 }} / {{ d.quantity_or_amount }} fulfilled</span>
                <span>{{ progress(d) }}%</span>
              </div>
              <mat-progress-bar [value]="progress(d)" mode="determinate"></mat-progress-bar>
            </div>
            
            <mat-chip-set class="status-chips">
              <mat-chip [class]="getStatusClass(d.status)">{{ d.status }}</mat-chip>
            </mat-chip-set>
          </mat-card-content>

          <mat-card-actions class="card-actions">
            <button mat-button color="primary" (click)="editDonation(d)">
              <mat-icon>edit</mat-icon>
              Edit
            </button>
            <button mat-button color="warn" (click)="cancelDonation(d)">
              <mat-icon>cancel</mat-icon>
              Cancel
            </button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .page-wrapper {
      padding: 80px 2rem 2rem;
      max-width: 1200px;
      margin: 0 auto;
      background: var(--background);
    }

    .header-section {
      text-align: center;
      margin-bottom: 3rem;
    }

    .header-section h1 {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 0.5rem;
    }

    .highlight {
      color: var(--primary-color);
    }

    .header-section p {
      color: var(--text-secondary);
      font-size: 1.1rem;
      margin-bottom: 2rem;
    }

    .loading-section,
    .empty-state {
      text-align: center;
      padding: 4rem 2rem;
    }

    .empty-state img {
      width: 300px;
      height: 200px;
      object-fit: cover;
      border-radius: var(--radius);
      margin-bottom: 1.5rem;
    }

    .empty-icon {
      font-size: 4rem !important;
      margin-bottom: 1rem;
      opacity: 0.5;
      color: var(--text-secondary);
    }

    .requests-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 2rem;
    }

    .request-card {
      border-radius: var(--radius-lg);
      overflow: hidden;
      transition: all 0.3s ease;
      background: var(--surface);
    }

    .request-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-hover);
    }

    .card-header {
      position: relative;
    }

    .card-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .priority-chips {
      position: absolute;
      top: 12px;
      right: 12px;
    }

    .urgent-chip {
      background-color: var(--error-color) !important;
      color: white !important;
    }

    .normal-chip {
      background-color: var(--primary-color) !important;
      color: white !important;
    }

    .request-details {
      margin: 1.5rem 0;
    }

    .detail-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 0.75rem;
      color: var(--text-secondary);
    }

    .detail-item mat-icon {
      font-size: 1.25rem !important;
      color: var(--primary-color);
    }

    .progress-section {
      margin: 1.5rem 0;
    }

    .progress-info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
      color: var(--text-secondary);
    }

    .status-chips {
      margin: 1rem 0;
    }

    .status-pending { background-color: var(--warning-color) !important; color: white !important; }
    .status-confirmed { background-color: var(--success-color) !important; color: white !important; }
    .status-completed { background-color: #2e7d32 !important; color: white !important; }
    .status-cancelled { background-color: var(--error-color) !important; color: white !important; }

    .card-actions {
      display: flex;
      gap: 0.5rem;
      padding: 1.5rem;
      justify-content: space-between;
    }

    .card-actions button {
      flex: 1;
    }

    @media (max-width: 768px) {
      .requests-grid {
        grid-template-columns: 1fr;
      }
      
      .page-wrapper {
        padding: 80px 1rem 2rem;
      }
    }
  `]
})
export class NgoDashboardComponent implements OnInit {
  requests: any[] = [];
  loading = false;

  constructor(
    private api: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadMyDonations();
  }

  loadMyDonations() {
    this.loading = true;

    this.api.get('/donations/mine').subscribe({
      next: (res: any) => {
        this.requests = res;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        if (typeof window !== 'undefined' && window.alert) {
          window.alert('Failed to load your donation requests');
        }
      }
    });
  }

  progress(d: any): number {
    if (!d.contributed || !d.quantity_or_amount) return 0;
    return Math.min(100, Math.round((d.contributed / d.quantity_or_amount) * 100));
  }

  editDonation(d: any) {
    this.router.navigate(['/ngo/edit-donation', d.id]);
  }

  cancelDonation(d: any) {
    const ok = (typeof window !== 'undefined' && window.confirm) ? 
      window.confirm('Cancel this donation request?') : false;
    if (!ok) return;

    this.api.patch(`/donations/${d.id}/cancel`, {}).subscribe({
      next: () => {
        if (typeof window !== 'undefined' && window.alert) {
          window.alert('Donation request cancelled');
        }
        this.loadMyDonations();
      },
      error: () => {
        if (typeof window !== 'undefined' && window.alert) {
          window.alert('Failed to cancel donation');
        }
      }
    });
  }

  getStatusClass(status: string): string {
    return `status-${status.toLowerCase()}`;
  }

  getImageForType(type: string): string {
    const images = {
      'Food': 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=250&fit=crop',
      'Clothes': 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=250&fit=crop',
      'Funds': 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=250&fit=crop',
      'Medicine': 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=250&fit=crop',
      'Other': 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=250&fit=crop'
    };
    return images[type as keyof typeof images] || images['Other'];
  }
}
