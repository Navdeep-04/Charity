--donationnodejs

-- Users Table
CREATE TABLE users (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  role ENUM('Donor','NGO','Admin') NOT NULL DEFAULT 'Donor',
  contact_info VARCHAR(255) NOT NULL DEFAULT '',
  email VARCHAR(150) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  status ENUM('Approved','Pending') DEFAULT 'Approved',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  INDEX idx_email (email),
  INDEX idx_role (role)
);

-- Donations Table
CREATE TABLE donations (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    ngo_id BIGINT NOT NULL,
    donation_type ENUM('Food', 'Funds', 'Clothes', 'Medicine', 'Other') NOT NULL,
    quantity_or_amount DECIMAL(10,2) NOT NULL CHECK (quantity_or_amount > 0),
    location VARCHAR(255) NOT NULL,
    pickup_date_time DATETIME NOT NULL,
    status ENUM('Pending', 'Confirmed', 'Completed', 'Cancelled') DEFAULT 'Pending',
    images VARCHAR(500) NULL,
    priority ENUM('Normal', 'Urgent') DEFAULT 'Normal',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_donation_ngo
        FOREIGN KEY (ngo_id) REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
        
    INDEX idx_ngo_id (ngo_id),
    INDEX idx_status (status),
    INDEX idx_donation_type (donation_type),
    INDEX idx_priority (priority)
);

-- Contributions Table
CREATE TABLE contributions (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    donation_id BIGINT NOT NULL,
    donor_id BIGINT NOT NULL,
    contribution_quantity DECIMAL(10,2) NOT NULL CHECK (contribution_quantity > 0),
    pickup_date_time DATETIME NULL,
    notes TEXT NULL,
    status ENUM('Scheduled', 'PickedUp', 'Cancelled') DEFAULT 'Scheduled',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_contribution_donation
        FOREIGN KEY (donation_id) REFERENCES donations(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_contribution_donor
        FOREIGN KEY (donor_id) REFERENCES users(id)
        ON DELETE CASCADE,
        
    INDEX idx_donation_id (donation_id),
    INDEX idx_donor_id (donor_id),
    INDEX idx_status (status)
);

-- Insert sample data
INSERT INTO users (name, role, contact_info, email, password) VALUES
('Admin User', 'Admin', 'admin@example.com', 'admin@example.com', 'admin123'),
('Helping Hands NGO', 'NGO', '+91-9876543210', 'ngo@helpinghands.org', 'ngo123'),
('John Donor', 'Donor', '+91-9876543211', 'john@example.com', 'donor123'),
('Care Foundation', 'NGO', '+91-9876543212', 'care@foundation.org', 'ngo456'),
('Jane Smith', 'Donor', '+91-9876543213', 'jane@example.com', 'donor456');

INSERT INTO donations (ngo_id, donation_type, quantity_or_amount, location, pickup_date_time, priority) VALUES
(2, 'Food', 100, 'Mumbai, Andheri West', '2025-02-15 10:00:00', 'Urgent'),
(2, 'Clothes', 50, 'Mumbai, Bandra', '2025-02-20 14:00:00', 'Normal'),
(4, 'Medicine', 25, 'Delhi, CP', '2025-02-18 09:00:00', 'Urgent'),
(4, 'Funds', 5000, 'Bangalore, Koramangala', '2025-02-25 11:00:00', 'Normal');

INSERT INTO contributions (donation_id, donor_id, contribution_quantity, pickup_date_time, notes) VALUES
(1, 3, 30, '2025-02-15 09:30:00', 'Will bring fresh vegetables'),
(2, 5, 20, '2025-02-20 13:30:00', 'Winter clothes for children'),
(3, 3, 10, '2025-02-18 08:30:00', 'Basic medicines available');
