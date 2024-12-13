# SalonFlow - Salon Queue Management System

A web-based queue management system for beauty salons, built with PHP and MySQL. The application can be deployed as a standard web application or packaged as a desktop application using Electron.

## Features

- 🎫 Queue Management
  - Real-time queue tracking
  - Customer ticket generation
  - Service assignment
  - Specialist allocation

- 👩‍💼 Staff Management
  - Add/remove specialists
  - Track specialist workload
  - Service assignment

- 📺 Dual Display System
  - Admin management interface
  - Customer-facing queue display

- 🖨️ Ticket System
  - Print queue tickets
  - Customer information tracking
  - Service details

## Deployment Options

### 1. Web Application (Standard)
Deploy as a standard web application on your server:

1. Set up requirements:
   - PHP 7.4 or higher
   - MySQL 5.7 or higher
   - Web server (Apache/Nginx)

2. Installation:
   ```bash
   # Clone the repository
   git clone https://github.com/HassanSalah120/salonflow.git

   # Install PHP dependencies
   composer install

   # Configure database
   cp config.example.php config.php
   # Edit config.php with your database credentials
   ```

3. Configure your web server to point to the application directory

### 2. Desktop Application (Optional)
Package as a desktop application using Electron:

1. Requirements:
   - Node.js 14 or higher

2. Build steps:
   ```bash
   # Install Node.js dependencies
   npm install

   # Run as desktop app
   npm start

   # Build executable (optional)
   npm run dist
   ```

## Tech Stack

- **Backend**:
  - PHP with PDO
  - MySQL Database

- **Frontend**:
  - Bootstrap (UI Framework)
  - KTDatatables & DataTables
  - SweetAlert & Toastr

- **Desktop Packaging** (Optional):
  - Electron.js

## Development

### Setting Up Development Environment

1. Clone the repository:
```bash
git clone https://github.com/hassansalah120/salonflow.git
```

2. Install dependencies:
```bash
# PHP dependencies
composer install

# Node.js dependencies (only if using Electron)
npm install
```

3. Configure database:
   - Create MySQL database
   - Copy `config.example.php` to `config.php`
   - Update database credentials

4. Start development:
```bash
# For web development
php -S localhost:8000

# For desktop development
npm start
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- PHP/MySQL for robust backend
- Bootstrap for responsive design
- KTDatatables for data management
- SweetAlert2 and Toastr for notifications
- Electron.js for desktop packaging capabilities
