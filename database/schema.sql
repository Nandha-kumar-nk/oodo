CREATE DATABASE globetrotter;
USE globetrotter;

-- USERS
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  email VARCHAR(150) UNIQUE,
  password VARCHAR(255),
  phone VARCHAR(20),
  city VARCHAR(100),
  country VARCHAR(100),
  role ENUM('user','admin') DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- TRIPS
CREATE TABLE trips (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  destination VARCHAR(150),
  start_date DATE,
  end_date DATE,
  status ENUM('ongoing','upcoming','completed'),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- CITIES
CREATE TABLE cities (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  country VARCHAR(100)
);

-- TRIP STOPS
CREATE TABLE trip_stops (
  id INT PRIMARY KEY AUTO_INCREMENT,
  trip_id INT,
  city_id INT,
  start_date DATE,
  end_date DATE,
  position INT,
  FOREIGN KEY (trip_id) REFERENCES trips(id) ON DELETE CASCADE,
  FOREIGN KEY (city_id) REFERENCES cities(id)
);

-- ACTIVITIES
CREATE TABLE activities (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  type VARCHAR(50),
  cost DECIMAL(10,2),
  duration INT
);

-- TRIP ACTIVITIES
CREATE TABLE trip_activities (
  id INT PRIMARY KEY AUTO_INCREMENT,
  trip_stop_id INT,
  activity_id INT,
  activity_date DATE,
  FOREIGN KEY (trip_stop_id) REFERENCES trip_stops(id) ON DELETE CASCADE,
  FOREIGN KEY (activity_id) REFERENCES activities(id)
);

-- BUDGET
CREATE TABLE budgets (
  id INT PRIMARY KEY AUTO_INCREMENT,
  trip_id INT,
  total_budget DECIMAL(10,2),
  FOREIGN KEY (trip_id) REFERENCES trips(id) ON DELETE CASCADE
);
CREATE TABLE community_posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  content TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE itineraries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  trip_id INT,
  day_number INT,
  activity TEXT,
  expense DECIMAL(10,2),
  FOREIGN KEY (trip_id) REFERENCES trips(id)
);
