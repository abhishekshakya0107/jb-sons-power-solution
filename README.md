# JB & Sons Power Solutions – Smart Electrical Contracting & Estimation Platform

A full-stack web application built on the **MERN Stack** designed to streamline industrial, commercial, and residential electrical contracting operations.

## Key Features
- **Real-Time Parametric Cost Estimator:** Calculates estimated project costs dynamically based on property type, carpet area, room count, and electrical fixture loads (lights, fans, heavy AC/geyser circuits).
- **Automated Quotation & Lead Pipeline:** Captures client inquiries directly into MongoDB with status lifecycle tracking (`New`, `Contacted`, `Quotation Sent`, `Approved`) and automated GST calculation.
- **Role-Based Admin Dashboard:** Secured with JWT authentication and bcrypt password hashing for managing leads, site notes, and project records.

## Tech Stack
- **Frontend:** React.js, Vite, Tailwind CSS, Lucide Icons
- **Backend:** Node.js, Express.js
- **Database & Auth:** MongoDB (Mongoose), JSON Web Tokens (JWT), bcryptjs

## Project Structure
- `/src` & `/public` – Frontend React application and UI components
- `/backend` – RESTful APIs, database schemas, and authentication middleware
