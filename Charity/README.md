# Donation & Charity Management Portal

A full-stack web application connecting donors with verified NGOs for transparent donation management.

## Features

- **Role-based Access**: Donor, NGO, and Admin roles with specific permissions
- **Donation Management**: Create, browse, and manage donation requests
- **Contribution Tracking**: Schedule pickups and track donation history
- **Interactive UI**: Modern Angular Material design with rose-red theme
- **Real-time Updates**: Live status tracking and notifications
- **Secure Authentication**: JWT-based authentication with role-based guards

## Tech Stack

### Backend
- Node.js with TypeScript
- Express.js framework
- MySQL database with proper indexing
- JWT authentication
- Email notifications via Nodemailer
- Input validation and sanitization

### Frontend
- Angular 18 with standalone components
- Angular Material (Rose-red theme)
- Responsive design
- Route guards for security
- HTTP interceptors for authentication

## Project Structure

```
DCP/
├── Backend/
│   ├── src/
│   │   ├── db/connection.ts
│   │   ├── routes/
│   │   ├── services/
│   │   ├── app.ts
│   │   └── server.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── table.sql
└── Frontend/DonationPortal/
    ├── src/app/
    │   ├── auth/
    │   ├── donations/
    │   ├── layout/
    │   ├── shared/
    │   └── admin/
    └── package.json
```

## Setup Instructions

### Prerequisites
- Node.js (v18+)
- MySQL (v8+)
- Angular CLI (`npm install -g @angular/cli`)

### Backend Setup

1. Navigate to backend directory:
```bash
cd Backend
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment:
```bash
cp .env.example .env
# Edit .env with your database and email credentials
```

4. Setup database:
```bash
mysql -u root -p
CREATE DATABASE donation_portal;
USE donation_portal;
source table.sql;
```

5. Start development server:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd Frontend/DonationPortal
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
ng serve
```

4. Open browser to `http://localhost:4200`

## API Endpoints

### Authentication
- `POST /user/signup` - User registration
- `POST /user/login` - User login
- `POST /user/forgotPassword` - Password recovery
- `GET /user/checkToken` - Token validation
- `POST /user/changePassword` - Change password

### Donations
- `GET /donations` - List all donations
- `GET /donations/mine` - NGO's own donations
- `GET /donations/:id` - Single donation details
- `POST /donations` - Create donation (NGO only)
- `PUT /donations/:id` - Update donation (NGO only)
- `PATCH /donations/:id/cancel` - Cancel donation (NGO only)

### Contributions
- `POST /contributions` - Create contribution (Donor only)
- `GET /contributions/donor/me` - Donor's contribution history
- `GET /contributions/donation/:id` - Contributions for a donation (NGO only)
- `PUT /contributions/:id/status` - Update contribution status

### Dashboard
- `GET /dashboard/summary` - Admin dashboard statistics

### Pickups
- `POST /pickups/schedule` - Schedule pickup (Donor only)
- `GET /pickups/donor/me` - Donor's pickup list
- `GET /pickups/ngo/:donationId` - NGO's pickup list for donation
- `PUT /pickups/:id/status` - Update pickup status

## User Roles & Permissions

### Donor
- Browse and filter donation requests
- Contribute to donations
- Schedule pickups
- View contribution history
- Update profile

### NGO
- Create and manage donation requests
- View contributions for their donations
- Track pickup schedules
- Update request status
- Manage organization profile

### Admin
- View platform statistics
- Monitor all donations and contributions
- User management
- System configuration

## Database Schema

### Users Table
- `id` (Primary Key)
- `name`, `email`, `password`
- `role` (Donor/NGO/Admin)
- `contact_info`, `status`
- `created_at`

### Donations Table
- `id` (Primary Key)
- `ngo_id` (Foreign Key to Users)
- `donation_type`, `quantity_or_amount`
- `location`, `pickup_date_time`
- `status`, `priority`, `images`
- `created_at`

### Contributions Table
- `id` (Primary Key)
- `donation_id` (Foreign Key to Donations)
- `donor_id` (Foreign Key to Users)
- `contribution_quantity`, `pickup_date_time`
- `notes`, `status`, `created_at`

## Security Features

- JWT-based authentication
- Role-based access control
- Input validation and sanitization
- SQL injection prevention
- XSS protection
- CORS configuration
- Password security (consider bcrypt for production)

## Development

### Backend Commands
```bash
npm run dev      # Development with nodemon
npm run build    # Build TypeScript
npm start        # Production server
```

### Frontend Commands
```bash
ng serve         # Development server
ng build         # Production build
ng test          # Run tests
ng lint          # Code linting
```

## Production Deployment

### Backend
1. Set `NODE_ENV=production` in .env
2. Use strong JWT secret and database passwords
3. Configure proper CORS origins
4. Use HTTPS in production
5. Set up proper logging
6. Consider using bcrypt for password hashing

### Frontend
1. Build for production: `ng build --prod`
2. Deploy `dist/` folder to web server
3. Configure environment.prod.ts with production API URL
4. Set up proper error handling and logging

## Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature-name`
3. Follow coding standards and add tests
4. Commit changes: `git commit -am 'Add feature'`
5. Push to branch: `git push origin feature-name`
6. Submit pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact the development team or create an issue in the repository.