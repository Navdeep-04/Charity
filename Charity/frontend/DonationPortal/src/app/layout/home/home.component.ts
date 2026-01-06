import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatCardModule, MatIconModule, NgFor],
  template: `
    <div class="hero-section">
      <div class="hero-container">
        <div class="hero-content">
          <h1>Connect Hearts, <span class="highlight">Change Lives</span></h1>
          <p>Join our platform to make meaningful donations and support verified NGOs in your community</p>
          <div class="hero-actions">
            <button mat-raised-button color="primary" routerLink="/donations">
              <mat-icon>volunteer_activism</mat-icon>
              Start Donating
            </button>
            <button mat-raised-button color="accent" routerLink="/signup">
              <mat-icon>person_add</mat-icon>
              Join 
            </button>
          </div>
        </div>
        <div class="hero-image">
          <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop" alt="Donation">
        </div>
      </div>
    </div>

    <div class="features-section">
      <div class="container">
        <h2>How It Works</h2>
        <div class="features-grid">
          <mat-card *ngFor="let feature of features" class="feature-card">
            <img [src]="feature.image" alt="feature" class="feature-image">
            <mat-card-content>
              <mat-icon class="feature-icon">{{ feature.icon }}</mat-icon>
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
            </mat-card-content>
          </mat-card>
        </div>
      </div>
    </div>

    <div class="gallery-section">
      <div class="container">
        <h2>Making a Difference</h2>
        <div class="gallery-grid">
          <div *ngFor="let image of galleryImages" class="gallery-item">
            <img [src]="image.url" [alt]="image.alt">
            <div class="overlay">
              <h4>{{ image.title }}</h4>
              <p>{{ image.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item">
            <mat-icon>people</mat-icon>
            <h3>500+</h3>
            <p>Active Donors</p>
          </div>
          <div class="stat-item">
            <mat-icon>business</mat-icon>
            <h3>50+</h3>
            <p>Verified NGOs</p>
          </div>
          <div class="stat-item">
            <mat-icon>favorite</mat-icon>
            <h3>1000+</h3>
            <p>Lives Impacted</p>
          </div>
          <div class="stat-item">
            <mat-icon>volunteer_activism</mat-icon>
            <h3>2500+</h3>
            <p>Donations Made</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .hero-section {
      background: linear-gradient(135deg, var(--primary-light) 0%, #fce4ec 100%);
      padding: 80px 0;
      margin-top: -64px;
      padding-top: 144px;
    }

    .hero-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .hero-content h1 {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 1.5rem;
      color: var(--text-primary);
    }

    .highlight {
      color: var(--primary-color);
      display: inline-block;
    }

    .hero-content p {
      font-size: 1.25rem;
      color: var(--text-secondary);
      margin-bottom: 2.5rem;
      line-height: 1.6;
    }

    .hero-actions {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .hero-image {
      position: relative;
    }

    .hero-image img {
      width: 100%;
      height: 400px;
      object-fit: cover;
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-hover);
    }

    .features-section {
      padding: 80px 0;
      background: var(--surface);
    }

    .features-section h2 {
      text-align: center;
      font-size: 2.5rem;
      font-weight: 600;
      margin-bottom: 3rem;
      color: var(--text-primary);
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .feature-card {
      text-align: center;
      padding: 2rem;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .feature-card:hover {
      transform: translateY(-8px);
    }

    .feature-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: var(--radius);
      margin-bottom: 1.5rem;
    }

    .feature-icon {
      font-size: 3rem !important;
      color: var(--primary-color);
      margin-bottom: 1rem;
    }

    .feature-card h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: var(--text-primary);
    }

    .feature-card p {
      color: var(--text-secondary);
      line-height: 1.6;
    }

    .gallery-section {
      padding: 80px 0;
      background: var(--background);
    }

    .gallery-section h2 {
      text-align: center;
      font-size: 2.5rem;
      font-weight: 600;
      margin-bottom: 3rem;
      color: var(--text-primary);
    }

    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .gallery-item {
      position: relative;
      border-radius: var(--radius-lg);
      overflow: hidden;
      height: 280px;
      cursor: pointer;
    }

    .gallery-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .gallery-item:hover img {
      transform: scale(1.05);
    }

    .overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(transparent, rgba(0,0,0,0.8));
      color: white;
      padding: 2rem 1.5rem 1.5rem;
      transform: translateY(100%);
      transition: transform 0.3s ease;
    }

    .gallery-item:hover .overlay {
      transform: translateY(0);
    }

    .overlay h4 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .stats-section {
      background: var(--primary-color);
      color: white;
      padding: 60px 0;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      text-align: center;
    }

    .stat-item mat-icon {
      font-size: 3rem !important;
      margin-bottom: 1rem;
      opacity: 0.9;
    }

    .stat-item h3 {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    .stat-item p {
      font-size: 1.1rem;
      opacity: 0.9;
    }

    @media (max-width: 768px) {
      .hero-container {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
        padding: 0 1rem;
      }
      
      .hero-actions {
        justify-content: center;
      }
      
      .features-grid,
      .gallery-grid,
      .stats-grid {
        padding: 0 1rem;
      }
    }
  `]
})
export class HomeComponent {
  features = [
    {
      icon: 'search',
      title: 'Browse Requests',
      description: 'Find donation requests from verified NGOs in your area',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=300&h=200&fit=crop'
    },
    {
      icon: 'favorite',
      title: 'Make Impact',
      description: 'Contribute food, funds, clothes or other essentials',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=300&h=200&fit=crop'
    },
    {
      icon: 'schedule',
      title: 'Schedule Pickup',
      description: 'Arrange convenient pickup times for your donations',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&h=200&fit=crop'
    }
  ];

  galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop',
      alt: 'Food donation',
      title: 'Food Distribution',
      description: 'Providing meals to families in need'
    },
    {
      url: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=300&fit=crop',
      alt: 'Clothing donation',
      title: 'Clothing Drive',
      description: 'Warm clothes for winter season'
    },
    {
      url: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop',
      alt: 'Community help',
      title: 'Community Support',
      description: 'Building stronger communities together'
    },
    {
      url: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop',
      alt: 'Education support',
      title: 'Education Aid',
      description: 'Supporting children\'s education'
    },
    {
      url: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=300&fit=crop',
      alt: 'Medical aid',
      title: 'Medical Support',
      description: 'Healthcare assistance for all'
    },
    {
      url: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=300&fit=crop',
      alt: 'Volunteer work',
      title: 'Volunteer Network',
      description: 'Join our volunteer community'
    }
  ];
}