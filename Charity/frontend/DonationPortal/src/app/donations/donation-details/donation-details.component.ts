import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ApiService } from '../../shared/services/api.service';
import { TokenService } from '../../shared/services/token.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgIf, DatePipe } from '@angular/common';

@Component({
  selector: 'app-donation-details',
  standalone: true,
  imports: [
    NgIf, DatePipe, RouterLink,
    MatCardModule, MatButtonModule, MatIconModule, 
    MatChipsModule, MatProgressSpinnerModule
  ],
  template: `
    <div class="page-wrapper">
      <div *ngIf="loading" class="loading-section">
        <mat-spinner></mat-spinner>
        <p>Loading donation details...</p>
      </div>

      <div *ngIf="!loading && !donation" class="error-section">
        <img src="https://images.weserv.nl/?url=holyghostcharity.com/wp-content/uploads/sites/856/2017/03/Charity.jpg&w=300&h=200&fit=crop" alt="not found">
        <mat-icon class="error-icon">error_outline</mat-icon>
        <h3>Donation not found</h3>
        <button mat-raised-button color="primary" routerLink="/donations">
          <mat-icon>arrow_back</mat-icon>
          Back to Donations
        </button>
      </div>

      <div *ngIf="donation" class="details-container">
        <mat-card class="main-card">
          <div class="card-header">
            <img [src]="getImageForType(donation.donation_type)" 
                 alt="donation" class="header-image">
            <div class="header-overlay">
              <mat-chip-set>
                <mat-chip [class]="donation.priority === 'Urgent' ? 'urgent-chip' : 'normal-chip'">
                  <mat-icon>{{ donation.priority === 'Urgent' ? 'warning' : 'info' }}</mat-icon>
                  {{ donation.priority }}
                </mat-chip>
                <mat-chip [class]="getStatusClass(donation.status)">
                  <mat-icon>{{ getStatusIcon(donation.status) }}</mat-icon>
                  {{ donation.status }}
                </mat-chip>
              </mat-chip-set>
            </div>
          </div>

          <mat-card-content class="main-content">
            <div class="content-grid">
              <div class="left-section">
                <h1>{{ donation.donation_type }} Donation</h1>
                
                <div class="detail-section">
                  <h3><mat-icon>business</mat-icon> Organization</h3>
                  <div class="detail-item">
                    <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=50&h=50&fit=crop" alt="ngo" class="ngo-avatar">
                    <span>{{ donation.ngo_name }}</span>
                  </div>
                </div>

                <div class="detail-section">
                  <h3><mat-icon>location_on</mat-icon> Location & Pickup</h3>
                  <div class="detail-item">
                    <mat-icon>place</mat-icon>
                    <span>{{ donation.location }}</span>
                  </div>
                  <div class="detail-item">
                    <mat-icon>schedule</mat-icon>
                    <span>{{ donation.pickup_date_time | date:'EEEE, MMM d, y - h:mm a' }}</span>
                  </div>
                </div>

                <div class="detail-section">
                  <h3><mat-icon>inventory</mat-icon> Requirements</h3>
                  <div class="detail-item">
                    <mat-icon>{{ getTypeIcon(donation.donation_type) }}</mat-icon>
                    <span>{{ donation.quantity_or_amount }} units needed</span>
                  </div>
                </div>
              </div>

              <div class="right-section">
                <mat-card class="action-card">
                  <mat-card-header>
                    <mat-card-title>
                      <mat-icon>volunteer_activism</mat-icon>
                      Take Action
                    </mat-card-title>
                  </mat-card-header>
                  <mat-card-content>
                    <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&h=150&fit=crop" alt="help" class="action-image">
                    <p>Help make a difference by contributing to this cause.</p>
                  </mat-card-content>
                  <mat-card-actions>
                    <button mat-raised-button color="primary" 
                            *ngIf="role === 'Donor' && donation.status === 'Pending'"
                            [routerLink]="['/contribute', donation.id]">
                      <mat-icon>volunteer_activism</mat-icon>
                      Contribute Now
                    </button>
                    
                    <button mat-raised-button color="accent" 
                            *ngIf="role === 'NGO' && isMyDonation"
                            [routerLink]="['/ngo/edit-donation', donation.id]">
                      <mat-icon>edit</mat-icon>
                      Edit Request
                    </button>
                  </mat-card-actions>
                </mat-card>

                <mat-card class="info-card">
                  <mat-card-header>
                    <mat-card-title>
                      <mat-icon>info</mat-icon>
                      Impact Information
                    </mat-card-title>
                  </mat-card-header>
                  <mat-card-content>
                    <div class="impact-stats">
                      <div class="stat-item">
                        <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=60&h=60&fit=crop" alt="impact" class="impact-icon">
                        <div>
                          <strong>Lives Impacted</strong>
                          <p>This donation will help multiple families</p>
                        </div>
                      </div>
                      <div class="stat-item">
                        <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=60&h=60&fit=crop" alt="verified" class="impact-icon">
                        <div>
                          <strong>Verified NGO</strong>
                          <p>This organization is verified and trusted</p>
                        </div>
                      </div>
                    </div>
                  </mat-card-content>
                </mat-card>
              </div>
            </div>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .page-wrapper {
      padding: 80px 20px 40px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .loading-section, .error-section {
      text-align: center;
      padding: 3rem;
    }

    .loading-section p, .error-section p {
      margin-top: 1rem;
      color: #666;
    }

    .error-section img {
      width: 400px;
      height: 300px;
      object-fit: cover;
      border-radius: 12px;
      margin-bottom: 1rem;
    }

    .error-icon {
      font-size: 4rem;
      color: #f44336;
      margin-bottom: 1rem;
    }

    .main-card {
      border-radius: 16px;
      overflow: hidden;
    }

    .card-header {
      position: relative;
    }

    .header-image {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }

    .header-overlay {
      position: absolute;
      top: 16px;
      right: 16px;
    }

    .urgent-chip {
      background-color: #d32f2f !important;
      color: white !important;
    }

    .normal-chip {
      background-color: #1976d2 !important;
      color: white !important;
    }

    .status-pending {
      background-color: #ff9800 !important;
      color: white !important;
    }

    .status-confirmed {
      background-color: #4caf50 !important;
      color: white !important;
    }

    .status-completed {
      background-color: #2e7d32 !important;
      color: white !important;
    }

    .status-cancelled {
      background-color: #f44336 !important;
      color: white !important;
    }

    .main-content {
      padding: 2rem;
    }

    .content-grid {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 2rem;
    }

    .left-section h1 {
      font-size: 2.5rem;
      margin-bottom: 2rem;
      color: #1a1a1a;
    }

    .detail-section {
      margin-bottom: 2rem;
    }

    .detail-section h3 {
      color: #d32f2f;
      margin-bottom: 1rem;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .detail-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 0.75rem;
      font-size: 1.1rem;
    }

    .detail-item mat-icon {
      color: #d32f2f;
      font-size: 1.3rem;
    }

    .ngo-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
    }

    .right-section {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .action-card, .info-card {
      border-radius: 12px;
    }

    .action-image {
      width: 100%;
      height: 120px;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 1rem;
    }

    .action-card mat-card-actions {
      padding: 1rem;
    }

    .action-card button {
      width: 100%;
      margin-bottom: 0.5rem;
    }

    .impact-stats {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .stat-item {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
    }

    .impact-icon {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }

    .stat-item strong {
      display: block;
      margin-bottom: 0.25rem;
    }

    .stat-item p {
      color: #666;
      font-size: 0.9rem;
      margin: 0;
    }

    @media (max-width: 768px) {
      .content-grid {
        grid-template-columns: 1fr;
      }
      
      .left-section h1 {
        font-size: 2rem;
      }
    }
  `]
})
export class DonationDetailsComponent implements OnInit {
  donation: any = null;
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private token: TokenService,
    private router: Router
  ) {}

  get role() {
    return this.token.getRole();
  }

  get isMyDonation() {
    return this.role === 'NGO';
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.loadDonation(id);
  }

  loadDonation(id: string) {
    this.loading = true;

    this.api.get(`/donations/${id}`).subscribe({
      next: (res: any) => {
        this.donation = res;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.donation = null;
      }
    });
  }

  getStatusClass(status: string): string {
    return `status-${status.toLowerCase()}`;
  }

  getStatusIcon(status: string): string {
    const icons = {
      'Pending': 'hourglass_empty',
      'Confirmed': 'check_circle',
      'Completed': 'done_all',
      'Cancelled': 'cancel'
    };
    return icons[status as keyof typeof icons] || 'info';
  }

  getTypeIcon(type: string): string {
    const icons = {
      'Food': 'restaurant',
      'Clothes': 'checkroom',
      'Funds': 'attach_money',
      'Medicine': 'medical_services',
      'Other': 'category'
    };
    return icons[type as keyof typeof icons] || 'category';
  }

  getImageForType(type: string): string {
    const images = {
      'Food': 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=300&fit=crop',
      'Clothes': 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&h=300&fit=crop',
      'Funds': 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=300&fit=crop',
      'Medicine': 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=300&fit=crop',
      'Other': 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=300&fit=crop'
    };
    return images[type as keyof typeof images] || images['Other'];
  }
}