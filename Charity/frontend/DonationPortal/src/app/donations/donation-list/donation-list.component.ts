import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { TokenService } from '../../shared/services/token.service';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-donation-list',
  standalone: true,
  imports: [
    FormsModule, RouterModule, RouterLink, NgFor, NgIf, DatePipe,
    MatCardModule, MatButtonModule, MatIconModule, MatChipsModule,
    MatFormFieldModule, MatSelectModule, MatInputModule, MatProgressSpinnerModule
  ],
  template: `
    <div class="page-wrapper">
      <div class="header-section">
        <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&h=300&fit=crop" alt="banner" class="banner-image">
        <div class="header-content">
          <h1>Donation Requests</h1>
          <p>Support causes around you and make a difference</p>
        </div>
      </div>

      <div class="filter-section">
        <mat-form-field appearance="outline">
          <mat-label>Search location</mat-label>
          <input matInput [(ngModel)]="searchLocation" placeholder="Enter location">
          <mat-icon matSuffix>search</mat-icon>
        </mat-form-field>
        
        <mat-form-field appearance="outline">
          <mat-label>Donation Type</mat-label>
          <mat-select [(ngModel)]="filterType">
            <mat-option value="">All Types</mat-option>
            <mat-option value="Food">Food</mat-option>
            <mat-option value="Clothes">Clothes</mat-option>
            <mat-option value="Funds">Funds</mat-option>
            <mat-option value="Medicine">Medicine</mat-option>
            <mat-option value="Other">Other</mat-option>
          </mat-select>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Priority</mat-label>
          <mat-select [(ngModel)]="filterPriority">
            <mat-option value="">All Priorities</mat-option>
            <mat-option value="Normal">Normal</mat-option>
            <mat-option value="Urgent">Urgent</mat-option>
          </mat-select>
        </mat-form-field>
      </div>

      <div *ngIf="loading" class="loading-section">
        <mat-spinner></mat-spinner>
        <p>Loading donations...</p>
      </div>

      <div *ngIf="!loading && filteredDonations().length === 0" class="empty-state">
        <img src="https://images.weserv.nl/?url=holyghostcharity.com/wp-content/uploads/sites/856/2017/03/Charity.jpg&w=300&h=200&fit=crop" alt="empty">
        <mat-icon class="empty-icon">inbox</mat-icon>
        <h3>No donation requests found</h3>
        <p>Try adjusting your filters or check back later</p>
      </div>

      <div class="donation-grid" *ngIf="!loading && filteredDonations().length > 0">
        <mat-card *ngFor="let d of filteredDonations()" class="donation-card">
          <div class="card-header">
            <img [src]="getImageForType(d.donation_type)" 
                 alt="donation" class="card-image">
            <mat-chip-set class="priority-chips">
              <mat-chip [class]="d.priority === 'Urgent' ? 'urgent-chip' : 'normal-chip'">
                {{ d.priority }}
              </mat-chip>
            </mat-chip-set>
          </div>

          <mat-card-content>
            <h3>{{ d.donation_type }}</h3>
            <div class="donation-details">
              <div class="detail-item">
                <mat-icon>business</mat-icon>
                <span>{{ d.ngo_name }}</span>
              </div>
              <div class="detail-item">
                <mat-icon>location_on</mat-icon>
                <span>{{ d.location }}</span>
              </div>
              <div class="detail-item">
                <mat-icon>inventory</mat-icon>
                <span>{{ d.quantity_or_amount }} needed</span>
              </div>
              <div class="detail-item">
                <mat-icon>schedule</mat-icon>
                <span>{{ d.pickup_date_time | date:'MMM d, h:mm a' }}</span>
              </div>
            </div>
            
            <mat-chip-set class="status-chips">
              <mat-chip [class]="getStatusClass(d.status)">{{ d.status }}</mat-chip>
            </mat-chip-set>
          </mat-card-content>

          <mat-card-actions class="card-actions">
            <button mat-raised-button color="primary" 
                    *ngIf="role === 'Donor' && d.status === 'Pending'"
                    [routerLink]="['/contribute', d.id]">
              <mat-icon>volunteer_activism</mat-icon>
              Contribute
            </button>
            
            <button mat-raised-button color="accent" 
                    [routerLink]="['/donations', d.id]">
              <mat-icon>visibility</mat-icon>
              View Details
            </button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .page-wrapper {
      background: var(--background);
    }

    .header-section {
      position: relative;
      height: 300px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: -64px;
    }

    .banner-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(0.6);
    }

    .header-content {
      position: relative;
      z-index: 2;
      text-align: center;
      color: white;
      padding-top: 64px;
    }

    .header-content h1 {
      font-size: clamp(2rem, 5vw, 3rem);
      font-weight: 700;
      margin-bottom: 0.5rem;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    }

    .header-content p {
      font-size: 1.25rem;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
    }

    .filter-section {
      max-width: 1200px;
      margin: 2rem auto;
      padding: 2rem;
      background: var(--surface);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow);
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
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

    .donation-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem 2rem;
    }

    .donation-card {
      border-radius: var(--radius-lg);
      overflow: hidden;
      transition: all 0.3s ease;
      position: relative;
      background: var(--surface);
    }

    .donation-card:hover {
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

    .donation-details {
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

    .status-chips {
      margin: 1rem 0;
    }

    .status-pending { background-color: var(--warning-color) !important; color: white !important; }
    .status-confirmed { background-color: var(--success-color) !important; color: white !important; }
    .status-completed { background-color: #2e7d32 !important; color: white !important; }
    .status-cancelled { background-color: var(--error-color) !important; color: white !important; }

    .card-actions {
      display: flex;
      gap: 0.75rem;
      padding: 1.5rem;
      justify-content: space-between;
    }

    .card-actions button {
      flex: 1;
      min-width: 120px;
      height: 40px;
    }

    @media (max-width: 768px) {
      .donation-grid {
        grid-template-columns: 1fr;
        padding: 0 1rem 2rem;
      }
      
      .filter-section {
        grid-template-columns: 1fr;
        margin: 1rem;
        padding: 1.5rem;
      }
    }
  `]
})
export class DonationListComponent implements OnInit {
  donations: any[] = [];
  loading = false;
  searchLocation = '';
  filterType = '';
  filterPriority = '';

  get role() {
    return this.token.getRole();
  }

  constructor(
    private api: ApiService,
    private token: TokenService
  ) {}

  ngOnInit(): void {
    this.loadDonations();
  }

  loadDonations() {
    this.loading = true;

    this.api.get('/donations').subscribe({
      next: (res: any) => {
        this.donations = res || [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        if (typeof window !== 'undefined' && window.alert) {
          window.alert('Failed to load donations');
        }
      }
    });
  }

  filteredDonations() {
    return this.donations.filter(d => {
      const matchesLocation = !this.searchLocation || 
        d.location.toLowerCase().includes(this.searchLocation.toLowerCase());
      const matchesType = !this.filterType || d.donation_type === this.filterType;
      const matchesPriority = !this.filterPriority || d.priority === this.filterPriority;
      
      return matchesLocation && matchesType && matchesPriority;
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
