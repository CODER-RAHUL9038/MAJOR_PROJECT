# 🌿 CAMELLIA | Airbnb-Style Premium Rental Platform

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=render)](https://major-project-zz1b.onrender.com)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-blue?style=for-the-badge&logo=github)](https://github.com/CODER-RAHUL9038/MAJOR_PROJECT)
[![Node.js Version](https://img.shields.io/badge/Node.js-v20.0.0+-339933?style=for-the-badge&logo=nodedotjs)](https://nodejs.org)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow?style=for-the-badge)](https://opensource.org/licenses/ISC)

CAMELLIA is a **production-ready, full-stack rental platform** inspired by Airbnb. It's built with a focus on **clean architecture, luxury UI/UX, and robust backend engineering**, providing a seamless experience for hosts and travelers alike.

---

## 📸 Visual Showcase

### 🏠 Discover Luxury Stays
![Home Page](./screenshots/home.jpg)

### 📱 Premium Mobile Experience
![Mobile View](./screenshots/mobile-view.jpg)

### 🗺️ Interactive Map Exploration
![Map Integration](./screenshots/map-view.png)

---

## ✨ Key Features

### 💎 Premium UI/UX (Airbnb Inspired)
- **Luxury Aesthetic:** A sophisticated slate and charcoal palette with "Playfair Display" and "Plus Jakarta Sans" typography.
- **Modern Toast System:** Fully custom, animated notification system replacing legacy alerts.
- **Polished Navigation:** Intelligently responsive navbar with a professional profile dropdown and unified avatar resolution.
- **Mobile-First Design:** Optimized specifically for high-end mobile UX, ensuring 0-gap alignment and perfect layering.

### 🔐 Advanced Security & Auth
- **Hybrid Authentication:** Seamlessly switch between local credentials and **Google OAuth 2.0**.
- **Smart Account Linking:** Automatically links Google logins to existing accounts via email to prevent duplicates.
- **Granular Authorization:** Multi-layer middleware ensuring only owners can modify their assets.

### 🏠 Property Management
- **Full CRUD:** Comprehensive lifecycle management for rental listings.
- **Cloud Storage:** Integrated with **Cloudinary** for high-performance image hosting and optimization.
- **Robust Validation:** Client and server-side validation using **Joi** and Bootstrap.

### ⭐ Engagement & Search
- **Smart Filters:** Category-based property filtering with a polished "Clear Filters" UI.
- **Text Search:** Fast, regex-powered search bar for finding properties by location or title.
- **Interactive Reviews:** Five-star rating system with user-specific ownership controls.

---

## 🛠️ Tech Stack

### Backend Engine
![NodeJS](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![ExpressJS](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Passport](https://img.shields.io/badge/Passport.js-34E27A?style=flat-square&logo=passport&logoColor=white)

### Frontend Surface
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=flat-square&logo=ejs&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white)

### Services & Tools
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=flat-square&logo=cloudinary&logoColor=white)
![MapTiler](https://img.shields.io/badge/MapTiler-00B2EE?style=flat-square&logo=maptiler&logoColor=white)
![Render](https://img.shields.io/badge/Render-000000?style=flat-square&logo=render&logoColor=white)

---

## 🧠 Architectural Overview

Camellia follows the **MVC (Model-View-Controller)** design pattern for maximum scalability:

- **Models:** Mongoose schemas defining robust data structures for Listings, Reviews, and Users.
- **Views:** Dynamic server-side rendering using EJS and custom partials.
- **Controllers:** Clean separation of business logic from route definitions.
- **Middleware:** Centralized authentication, authorization, and error-handling logic.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v20+)
- MongoDB Atlas Account
- Cloudinary Account
- MapTiler API Key

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/CODER-RAHUL9038/MAJOR_PROJECT.git
   cd MAJOR_PROJECT/CAMELLIA
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory:
   ```env
   CLOUD_NAME=your_cloudinary_name
   CLOUD_API_KEY=your_cloudinary_key
   CLOUD_API_SECRET=your_cloudinary_secret
   ATLASDB_URL=your_mongodb_atlas_url
   SESSION_SECRET=your_secure_secret
   MAP_TOKEN=your_maptiler_key
   GOOGLE_CLIENT_ID=your_google_id
   GOOGLE_CLIENT_SECRET=your_google_secret
   ```

4. **Run the application:**
   ```bash
   npm start
   ```

---

## 📁 Project Structure

```
CAMELLIA/
├── config/             # Configuration (Passport, Cloudinary)
├── controllers/        # Business Logic
├── init/               # Database Seeding Tools
├── models/             # Mongoose Schemas
├── public/             # Static Assets (CSS, JS, Images)
├── routes/             # RESTful Route Definitions
├── utils/              # Helper Classes & Error Handlers
├── views/              # EJS Templates & Layouts
├── app.js              # Application Entry Point
└── schema.js           # Joi Validation Schemas
```

---

## 👨‍💻 Credits

**Rahul Shaw**  
*Lead Developer & UI/UX Designer*

Highly motivated full-stack developer focused on building high-performance, real-world applications with clean, maintainable code.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/coder-rahul-shaw/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/CODER-RAHUL9038)

---

⭐ If you find this project valuable, please consider giving it a **star** on GitHub!
