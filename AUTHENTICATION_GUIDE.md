# 🏥 Hospital Management System - Authentication Guide

## ✅ Complete Authentication System Implemented

This guide explains the full-stack authentication system built for your Hospital Management System following your exact folder structure and database schema.

---

## 📋 Table of Contents

1. [What's Been Built](#whats-been-built)
2. [Database Schema](#database-schema)
3. [Backend Architecture](#backend-architecture)
4. [Frontend Architecture](#frontend-architecture)
5. [How to Run](#how-to-run)
6. [Testing the System](#testing-the-system)
7. [Security Features](#security-features)
8. [API Documentation](#api-documentation)

---

## 🎯 What's Been Built

### Backend (Node.js + Express + MongoDB)
✅ User Model with your exact schema (name, email, password, role)
✅ JWT authentication with bcrypt password hashing
✅ Input validation using express-validator
✅ Protected routes middleware
✅ Role-based access control (RBAC)
✅ Centralized error handling
✅ Clean, modular architecture

### Frontend (React + Tailwind CSS + Zustand)
✅ Professional hospital-style UI/UX
✅ Login page with validation
✅ Register page with password strength indicator
✅ Zustand global state management
✅ Protected routes
✅ Reusable components (InputField, Button, Alert)
✅ Responsive design (mobile-first)
✅ Real-time form validation
✅ Loading states and error handling

---

## 🗄️ Database Schema

Your User model follows this exact schema:

```javascript
{
  name: String (required, min 2 characters),
  email: String (required, unique, valid email format),
  password: String (required, min 6 characters, hashed with bcrypt),
  role: String (enum: ["admin", "doctor", "reception", "patient"], default: "patient"),
  isActive: Boolean (default: true),
  createdAt: Date (auto-generated),
  updatedAt: Date (auto-generated)
}
```

**Password Requirements:**
- Minimum 6 characters
- Must contain uppercase letter
- Must contain lowercase letter
- Must contain number

---

## 🏗️ Backend Architecture

### Folder Structure
```
backend/src/
├── config/
│   └── db.js                    # MongoDB connection
├── controllers/
│   └── authController.js        # Authentication logic
├── middleware/
│   ├── auth.js                  # JWT verification & RBAC
│   └── errorHandler.js          # Centralized error handling
├── models/
│   └── User.js                  # User schema
├── routes/
│   └── authRoutes.js            # Auth API routes
├── utils/
│   └── jwt.js                   # JWT utilities
├── validations/
│   └── authValidation.js        # Input validation rules
└── server.js                    # Server entry point
```

### API Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register new user | No |
| POST | `/api/auth/login` | Login user | No |
| GET | `/api/auth/me` | Get current user | Yes |
| POST | `/api/auth/logout` | Logout user | Yes |

### Middleware

**1. protect** - Verifies JWT token
```javascript
// Usage in routes
router.get("/me", protect, getMe);
```

**2. authorize** - Role-based access control
```javascript
// Usage in routes
router.get("/admin-only", protect, authorize("admin"), adminController);
```

---

## 🎨 Frontend Architecture

### Folder Structure
```
frontend/src/
├── components/
│   ├── InputField.jsx           # Reusable input with floating labels
│   ├── Button.jsx               # Reusable button component
│   ├── Alert.jsx                # Alert/notification component
│   └── ProtectedRoute.jsx       # Route protection wrapper
├── features/
│   └── auth/
│       ├── api/
│       │   └── authApi.js       # Auth API calls
│       └── pages/
│           ├── Login.jsx        # Login page
│           └── Register.jsx     # Register page
├── pages/
│   └── Dashboard.jsx            # Main dashboard
├── services/
│   └── apiClient.js             # Axios configuration
├── store/
│   └── authStore.js             # Zustand auth store
└── App.jsx                      # Main app with routing
```

### Zustand Store

**State:**
```javascript
{
  user: null,              // User object
  token: null,             // JWT token
  isAuthenticated: false,  // Auth status
  loading: false,          // Loading state
  error: null              // Error messages
}
```

**Actions:**
- `login(userData, token)` - Store user and token
- `register(userData, token)` - Store user and token
- `logout()` - Clear all auth data
- `setLoading(bool)` - Set loading state
- `setError(message)` - Set error message

### Reusable Components

**1. InputField**
- Floating labels
- Show/hide password toggle
- Error states with icons
- Accessibility support

**2. Button**
- Multiple variants (primary, secondary, ghost, danger)
- Loading states with spinner
- Icon support
- Disabled states

**3. Alert**
- Multiple types (error, success, warning, info)
- Dismissible
- Smooth animations

---

## 🚀 How to Run

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (running locally or remote)
- npm or yarn

### Step 1: Install Dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

### Step 2: Configure Environment Variables

**Backend (.env):**
```env
MONGO_URI=mongodb://127.0.0.1:27017/hospital_db
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRES_IN=7d
PORT=5000
NODE_ENV=development
```

**Frontend (.env):**
```env
VITE_API_URL=http://localhost:5000/api
```

### Step 3: Start MongoDB

Make sure MongoDB is running:
```bash
# If using local MongoDB
mongod

# Or if using MongoDB service
sudo service mongod start
```

### Step 4: Start Backend Server

```bash
cd backend
npm run dev
```

Expected output:
```
🚀 Server running on port 5000
✅ MongoDB Connected: 127.0.0.1
```

### Step 5: Start Frontend Development Server

Open a new terminal:
```bash
cd frontend
npm run dev
```

Expected output:
```
VITE v8.x.x  ready in xxx ms
➜  Local:   http://localhost:5173/
```

### Step 6: Access the Application

Open your browser and go to: **http://localhost:5173**

---

## 🧪 Testing the System

### 1. Register a New User

1. Go to http://localhost:5173/register
2. Fill in the form:
   - **Name:** John Doe
   - **Email:** john@example.com
   - **Role:** Patient (or any role)
   - **Password:** Password123
   - **Confirm Password:** Password123
3. Click "Create account"
4. You'll be redirected to the dashboard

### 2. Check Zustand Store (Browser DevTools)

1. Open DevTools (F12)
2. Go to: Application → Local Storage → http://localhost:5173
3. Look for key: `auth-storage`
4. You'll see user and token stored

### 3. Logout

1. Click "Logout" button on dashboard
2. You'll be redirected to login page
3. Check localStorage - auth data is cleared

### 4. Login

1. Go to http://localhost:5173/login
2. Enter:
   - **Email:** john@example.com
   - **Password:** Password123
3. Click "Sign in"
4. You'll be redirected to dashboard

### 5. Test Protected Routes

1. Logout
2. Try to access http://localhost:5173/
3. You'll be redirected to login page

### 6. Test API Endpoints (Using Postman or curl)

**Register:**
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Smith",
    "email": "jane@example.com",
    "password": "Password123",
    "role": "doctor"
  }'
```

**Login:**
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "jane@example.com",
    "password": "Password123"
  }'
```

**Get Current User (Protected):**
```bash
curl -X GET http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

---

## 🔒 Security Features

### 1. Password Security
- **Hashing:** Passwords are hashed using bcrypt with 10 salt rounds
- **Never stored in plain text**
- **Automatic hashing** via Mongoose pre-save middleware

### 2. JWT Authentication
- **Secure token generation** with secret key
- **Token expiration** (7 days by default)
- **Token verification** on protected routes
- **Automatic token injection** in API requests

### 3. Input Validation
- **Server-side validation** using express-validator
- **Client-side validation** with real-time feedback
- **Email format validation**
- **Password strength requirements**

### 4. Protected Routes
- **Backend:** JWT verification middleware
- **Frontend:** ProtectedRoute component
- **Auto-redirect** if not authenticated

### 5. Role-Based Access Control (RBAC)
- **authorize middleware** for role checking
- **Flexible role configuration**
- **403 Forbidden** for unauthorized access

### 6. Error Handling
- **Centralized error handler**
- **Consistent error responses**
- **No sensitive data in error messages**
- **Proper HTTP status codes**

### 7. CORS Configuration
- **Configured for cross-origin requests**
- **Secure headers**

---

## 📚 API Documentation

### POST /api/auth/register

**Description:** Register a new user

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "Password123",
  "role": "patient"  // Optional: admin, doctor, reception, patient
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": "507f1f77bcf86cd799439011",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "patient"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

**Error Response (400):**
```json
{
  "success": false,
  "message": "User with this email already exists"
}
```

---

### POST /api/auth/login

**Description:** Login user

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "Password123"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "id": "507f1f77bcf86cd799439011",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "patient"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

**Error Response (401):**
```json
{
  "success": false,
  "message": "Invalid email or password"
}
```

---

### GET /api/auth/me

**Description:** Get current logged in user

**Headers:**
```
Authorization: Bearer YOUR_JWT_TOKEN
```

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "507f1f77bcf86cd799439011",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "patient"
    }
  }
}
```

**Error Response (401):**
```json
{
  "success": false,
  "message": "Not authorized, no token provided"
}
```

---

### POST /api/auth/logout

**Description:** Logout user (client-side token removal)

**Headers:**
```
Authorization: Bearer YOUR_JWT_TOKEN
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

---

## 🎨 UI/UX Features

### Design Principles
- **Hospital-style:** Professional, clean, trustworthy
- **Minimal:** No unnecessary elements
- **Accessible:** WCAG compliant
- **Responsive:** Mobile-first approach

### Key Features
1. **Floating Labels:** Modern input design
2. **Password Strength Indicator:** Real-time feedback
3. **Show/Hide Password:** Toggle visibility
4. **Role Selection:** Visual cards with icons
5. **Loading States:** Spinner during submission
6. **Error Handling:** Clear, helpful messages
7. **Success Feedback:** Smooth transitions
8. **Remember Me:** Persistent login option

---

## 🔧 Customization

### Change JWT Expiration
Edit `backend/.env`:
```env
JWT_EXPIRES_IN=30d  # 30 days
```

### Add New Role
Edit `backend/src/models/User.js`:
```javascript
role: {
  type: String,
  enum: ["admin", "doctor", "reception", "patient", "nurse"],  // Add "nurse"
  default: "patient",
}
```

### Change Password Requirements
Edit `backend/src/validations/authValidation.js`:
```javascript
body("password")
  .isLength({ min: 8 })  // Change minimum length
  .matches(/your-regex-here/)  // Custom regex
```

---

## 🐛 Troubleshooting

### Backend won't start
- ✅ Check if MongoDB is running
- ✅ Check if port 5000 is available
- ✅ Verify .env file exists with correct values

### Frontend won't start
- ✅ Check if port 5173 is available
- ✅ Verify .env file exists with VITE_API_URL

### Can't register/login
- ✅ Check if backend is running
- ✅ Check browser console for errors
- ✅ Verify MongoDB connection

### CORS errors
- ✅ Backend should have CORS enabled (already configured)
- ✅ Check if VITE_API_URL is correct

### Token not persisting
- ✅ Check browser localStorage
- ✅ Verify Zustand persist middleware is working
- ✅ Check browser console for errors

---

## 📈 Next Steps

### Phase 2 Features
1. **Forgot Password** - Email-based password reset
2. **Email Verification** - Verify email after registration
3. **Profile Update** - Edit user profile
4. **Change Password** - Update password
5. **Two-Factor Authentication** - Enhanced security

### Additional Modules
1. **Appointments Management**
2. **Patients Management**
3. **Doctors Management**
4. **Medical Records**
5. **Prescriptions**
6. **Billing System**

---

## 🎉 Summary

You now have a complete, production-ready authentication system with:

✅ **Secure backend** with JWT and bcrypt
✅ **Modern frontend** with professional UI/UX
✅ **Global state management** with Zustand
✅ **Protected routes** on both frontend and backend
✅ **Role-based access control**
✅ **Comprehensive validation**
✅ **Clean, modular code**
✅ **Following your exact folder structure**
✅ **Using your exact database schema**

The system is ready to use and can be extended with additional features!

---

**Happy coding!** 🚀