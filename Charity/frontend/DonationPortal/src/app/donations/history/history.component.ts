import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor, DatePipe, LowerCasePipe, NgClass } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, DatePipe, LowerCasePipe, NgClass, MatCardModule, MatIconModule, MatChipsModule, MatFormFieldModule, MatSelectModule, MatProgressSpinnerModule],
  template: `
    <div class="page-wrapper">
      <div class="header-section">
        <h1>Your <span class="highlight">Donation History</span></h1>
        <p>Track your completed and scheduled contributions</p>
      </div>

      <div class="filter-section">
        <mat-form-field appearance="outline">
          <mat-label>Filter by Status</mat-label>
          <mat-select [(ngModel)]="filter">
            <mat-option value="All">All Status</mat-option>
            <mat-option value="PickedUp">Completed</mat-option>
            <mat-option value="Scheduled">Scheduled</mat-option>
            <mat-option value="Cancelled">Cancelled</mat-option>
          </mat-select>
        </mat-form-field>
      </div>

      <div *ngIf="loading" class="loading-section">
        <mat-spinner></mat-spinner>
        <p>Loading your history...</p>
      </div>

      <div *ngIf="!loading && filteredItems().length === 0" class="empty-state">
        <img src="https://images.weserv.nl/?url=holyghostcharity.com/wp-content/uploads/sites/856/2017/03/Charity.jpg&w=300&h=200&fit=crop" alt="empty">
        <mat-icon class="empty-icon">history</mat-icon>
        <h3>No contributions found</h3>
        <p>Your donation history will appear here once you make contributions</p>
      </div>

      <div class="history-grid" *ngIf="!loading && filteredItems().length > 0">
        <mat-card *ngFor="let h of filteredItems()" class="history-card">
          <div class="card-header">
            <img [src]="getImageForType(h.donation_type)" alt="donation" class="card-image">
            <mat-chip-set class="status-chips">
              <mat-chip [class]="getStatusClass(h.status)">{{ h.status }}</mat-chip>
            </mat-chip-set>
          </div>

          <mat-card-content>
            <h3>{{ h.donation_type }}</h3>
            <div class="history-details">
              <div class="detail-item">
                <mat-icon>location_on</mat-icon>
                <span>{{ h.location }}</span>
              </div>
              <div class="detail-item">
                <mat-icon>inventory</mat-icon>
                <span>Contributed: {{ h.contribution_quantity }}</span>
              </div>
              <div class="detail-item">
                <mat-icon>schedule</mat-icon>
                <span>{{ h.pickup_date_time | date:'MMM d, h:mm a' }}</span>
              </div>
            </div>
          </mat-card-content>
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
    }

    .filter-section {
      max-width: 300px;
      margin: 0 auto 2rem;
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

    .history-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 2rem;
    }

    .history-card {
      border-radius: var(--radius-lg);
      overflow: hidden;
      transition: all 0.3s ease;
      background: var(--surface);
    }

    .history-card:hover {
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

    .status-chips {
      position: absolute;
      top: 12px;
      right: 12px;
    }

    .history-details {
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

    .status-pickedup,
    .status-completed {
      background-color: var(--success-color) !important;
      color: white !important;
    }

    .status-scheduled {
      background-color: var(--warning-color) !important;
      color: white !important;
    }

    .status-cancelled {
      background-color: var(--error-color) !important;
      color: white !important;
    }

    @media (max-width: 768px) {
      .history-grid {
        grid-template-columns: 1fr;
      }
      
      .page-wrapper {
        padding: 80px 1rem 2rem;
      }
    }
  `]
})
export class HistoryComponent implements OnInit {
  history: any[] = [];
  loading = false;
  filter = 'All';

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.loadHistory();
  }

  loadHistory() {
    this.loading = true;

    this.api.get('/contributions/donor/me').subscribe({
      next: (res: any) => {
        this.history = res || [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        if (typeof window !== 'undefined' && window.alert) {
          window.alert('Failed to load contribution history');
        }
      }
    });
  }

  filteredItems() {
    if (this.filter === 'All') return this.history;
    return this.history.filter(h => h.status === this.filter);
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
