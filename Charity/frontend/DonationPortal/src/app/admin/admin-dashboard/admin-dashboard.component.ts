import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { NgIf, NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [NgIf, NgFor, MatCardModule, MatIconModule, MatProgressSpinnerModule, MatButtonModule],
  template: `
    <div class="page-wrapper">
      <div class="header-section">
        <h1>Admin <span class="highlight">Dashboard</span></h1>
        <p>Monitor platform statistics and manage the donation ecosystem</p>
      </div>

      <div *ngIf="loading" class="loading-section">
        <mat-spinner></mat-spinner>
        <p>Loading dashboard data...</p>
      </div>

      <div *ngIf="!loading && stats" class="dashboard-content">
        <div class="stats-grid">
          <mat-card class="stat-card">
            <div class="stat-content">
              <mat-icon class="stat-icon">people</mat-icon>
              <div class="stat-info">
                <h3>{{ stats?.donors || 0 }}</h3>
                <span>Total Donors</span>
              </div>
            </div>
          </mat-card>

          <mat-card class="stat-card">
            <div class="stat-content">
              <mat-icon class="stat-icon">business</mat-icon>
              <div class="stat-info">
                <h3>{{ stats?.ngos || 0 }}</h3>
                <span>Registered NGOs</span>
              </div>
            </div>
          </mat-card>

          <mat-card class="stat-card">
            <div class="stat-content">
              <mat-icon class="stat-icon">volunteer_activism</mat-icon>
              <div class="stat-info">
                <h3>{{ stats?.donations?.pending || 0 }}</h3>
                <span>Active Requests</span>
              </div>
            </div>
          </mat-card>

          <mat-card class="stat-card">
            <div class="stat-content">
              <mat-icon class="stat-icon">check_circle</mat-icon>
              <div class="stat-info">
                <h3>{{ stats?.donations?.completed || 0 }}</h3>
                <span>Completed Donations</span>
              </div>
            </div>
          </mat-card>
        </div>

        <div class="overview-grid">
          <mat-card class="overview-card">
            <mat-card-header>
              <mat-card-title>
                <mat-icon>analytics</mat-icon>
                Platform Overview
              </mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <div class="overview-stats">
                <div class="overview-item">
                  <span class="label">Total Contributions:</span>
                  <span class="value">{{ stats?.contributions || 0 }}</span>
                </div>
                <div class="overview-item">
                  <span class="label">Confirmed Donations:</span>
                  <span class="value">{{ stats?.donations?.confirmed || 0 }}</span>
                </div>
                <div class="overview-item">
                  <span class="label">Cancelled Requests:</span>
                  <span class="value">{{ stats?.donations?.cancelled || 0 }}</span>
                </div>
              </div>
            </mat-card-content>
          </mat-card>

          <mat-card class="overview-card">
            <mat-card-header>
              <mat-card-title>
                <mat-icon>trending_up</mat-icon>
                Impact Metrics
              </mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <div class="impact-visual">
                <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=200&fit=crop" 
                     alt="Impact" class="impact-image">
                <div class="impact-overlay">
                  <h4>Making a Difference</h4>
                  <p>Connecting hearts, changing lives through donations</p>
                </div>
              </div>
            </mat-card-content>
          </mat-card>
        </div>
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

    .loading-section {
      text-align: center;
      padding: 4rem 2rem;
    }

    .dashboard-content {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    }

    .stat-card {
      border-radius: var(--radius-lg);
      background: var(--surface);
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .stat-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-hover);
    }

    .stat-content {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1.5rem;
    }

    .stat-icon {
      font-size: 2.5rem !important;
      color: var(--primary-color);
    }

    .stat-info h3 {
      font-size: 2rem;
      font-weight: 700;
      color: var(--text-primary);
      margin: 0;
    }

    .stat-info span {
      color: var(--text-secondary);
      font-size: 0.9rem;
    }

    .overview-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 2rem;
    }

    .overview-card {
      border-radius: var(--radius-lg);
      background: var(--surface);
    }

    .overview-card mat-card-title {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--primary-color);
      font-weight: 600;
    }

    .overview-stats {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .overview-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem 0;
      border-bottom: 1px solid var(--border-color);
    }

    .overview-item:last-child {
      border-bottom: none;
    }

    .overview-item .label {
      color: var(--text-secondary);
    }

    .overview-item .value {
      font-weight: 600;
      color: var(--text-primary);
      font-size: 1.1rem;
    }

    .impact-visual {
      position: relative;
      border-radius: var(--radius);
      overflow: hidden;
    }

    .impact-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .impact-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(transparent, rgba(0,0,0,0.8));
      color: white;
      padding: 1.5rem;
    }

    .impact-overlay h4 {
      margin: 0 0 0.5rem 0;
      font-size: 1.25rem;
      font-weight: 600;
    }

    .impact-overlay p {
      margin: 0;
      opacity: 0.9;
    }

    @media (max-width: 768px) {
      .page-wrapper {
        padding: 80px 1rem 2rem;
      }
      
      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      
      .overview-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AdminDashboardComponent implements OnInit {
  stats: any = null;
  loading = false;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.loadDashboard();
  }

  loadDashboard() {
    this.loading = true;

    this.api.get('/dashboard/summary').subscribe({
      next: (res: any) => {
        this.stats = res.data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        if (typeof window !== 'undefined' && window.alert) {
          window.alert('Failed to load dashboard data');
        }
      }
    });
  }
}
