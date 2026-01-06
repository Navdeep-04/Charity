// =====================================
//  USER
// =====================================
export interface User {
  id?: number;
  name: string;
  email: string;
  role: 'Donor' | 'NGO' | 'Admin';
  contact_info?: string;
  status?: 'Approved' | 'Pending';
  created_at?: string;
}

// =====================================
//  DONATION (NGO creates)
// =====================================
export interface Donation {
  id?: number;
  ngo_id: number;
  donation_type: 'Food' | 'Funds' | 'Clothes' | 'Medicine' | 'Other';
  quantity_or_amount: number;
  location: string;
  pickup_date_time: string;
  status?: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
  images?: string;
  priority?: 'Normal' | 'Urgent';
  created_at?: string;

  // useful join fields from API
  ngo_name?: string;
}

// =====================================
//  CONTRIBUTION (Donor confirms)
// =====================================
export interface Contribution {
  id?: number;
  donation_id: number;
  donor_id?: number;
  contribution_quantity: number;
  pickup_date_time?: string;
  notes?: string;
  status?: 'Scheduled' | 'PickedUp' | 'Cancelled';
  created_at?: string;

  // joined values
  donation_type?: string;
  location?: string;
  ngo_schedule?: string;
  donor_name?: string;
}

// =====================================
//  PICKUP VIEW (derived from contributions)
// =====================================
export interface Pickup {
  id?: number;
  donation_id: number;
  donor_id?: number;
  pickup_date_time: string;
  status: 'Scheduled' | 'PickedUp' | 'Cancelled';

  donation_type?: string;
  location?: string;
  donor_name?: string;
}

// =====================================
//  AUTH RESPONSES
// =====================================
export interface AuthResponse {
  message: string;
  token: string;
  role: 'Donor' | 'NGO' | 'Admin';
  name?: string;
  email?: string;
}

// =====================================
//  GENERIC API WRAPPER
// =====================================
export interface ApiResponse<T> {
  message?: string;
  data?: T;
  error?: string;
}
