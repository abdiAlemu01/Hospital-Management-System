# Hospital Management System

A full-stack Hospital Management System built with the MERN stack (MongoDB, Express, React, Node.js) and Tailwind CSS.

## 🚀 Features

### Authentication (✅ Complete)
- User registration with role selection
- Secure login with JWT authentication
- Protected routes (frontend & backend)
- Role-based access control (RBAC)
- Persistent authentication with Zustand
- Password hashing with bcrypt
- Input validation
- Error handling

### User Roles
- **Patient** - Default role for patients
- **Doctor** - Medical staff
- **Reception** - Front desk staff
- **Admin** - System administrators

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express 5.2.1
- MongoDB
- Mongoose 9.5.0
- bcryptjs 3.0.3
- jsonwebtoken 9.0.3
- express-validator 7.3.2

### Frontend
- React 19.2.5
- React Router 7.14.2
- Zustand 5.0.12 (State Management)
- Axios 1.15.2
- Tailwind CSS 4.2.3
- Vite 8.0.9

---

## 📁 Project Structure

```
hospital-management-system/
├── backend/                 # Backend API
│   ├── src/
│   │   ├── config/         # Database configuration
│   │   ├── controllers/    # Request handlers
│   │   ├── middleware/     # Custom middleware
│   │   ├── models/         # Database models
│   │   ├── routes/         # API routes
│   │   ├── utils/          # Utility functions
│   │   ├── validations/    # Input validation
│   │   └── server.js       # Entry point
│   └── .env                # Environment variables
│
├── frontend/               # Frontend application
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── features/       # Feature modules
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services
│   │   ├── store/          # Zustand stores
│   │   └── App.jsx         # Main app component
│   └── .env                # Environment variables
│
└── docs/                   # Documentation
    ├── AUTH_SETUP_GUIDE.md
    ├── ZUSTAND_EXPLAINED.md
    ├── QUICK_START.md
    ├── ARCHITECTURE.md
    └── CHECKLIST.md
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (running locally or remote)
- npm or yarn

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd hospital-management-system
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create `.env` file in backend folder:
```env
MONGO_URI=mongodb://127.0.0.1:27017/hospital_db
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRES_IN=7d
PORT=5000
NODE_ENV=development
```

Start backend server:
```bash
npm run dev
```

Backend will run on http://localhost:5000

### 3. Setup Frontend

Open a new terminal:

```bash
cd frontend
npm install
```

Create `.env` file in frontend folder:
```env
VITE_API_URL=http://localhost:5000/api
```

Start frontend development server:
```bash
npm run dev
```

Frontend will run on http://localhost:5173

### 4. Access the Application

Open your browser and go to: http://localhost:5173

---

## 📖 Documentation

Comprehensive documentation is available:

- **[QUICK_START.md](QUICK_START.md)** - Get started in 3 steps
- **[AUTH_SETUP_GUIDE.md](AUTH_SETUP_GUIDE.md)** - Complete authentication guide
- **[ZUSTAND_EXPLAINED.md](ZUSTAND_EXPLAINED.md)** - Understanding Zustand state management
- **[ARCHITECTURE.md](ARCHITECTURE.md)** - System architecture and diagrams
- **[IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md)** - What has been implemented
- **[CHECKLIST.md](CHECKLIST.md)** - Implementation checklist

---

## 🧪 Testing the Application

### Register a New User
1. Go to http://localhost:5173/register
2. Fill in the registration form
3. Select a role (Patient, Doctor, Reception, Admin)
4. Click "Create Account"
5. You'll be redirected to the dashboard

### Login
1. Go to http://localhost:5173/login
2. Enter your email and password
3. Click "Sign in"
4. You'll be redirected to the dashboard

### Test Protected Routes
1. Logout from the dashboard
2. Try to access http://localhost:5173/
3. You'll be redirected to the login page

---

## 🔐 Security Features

- ✅ Password hashing with bcrypt
- ✅ JWT token authentication
- ✅ Token expiration (7 days)
- ✅ Protected routes (backend & frontend)
- ✅ Role-based access control
- ✅ Input validation (client & server)
- ✅ Centralized error handling
- ✅ Auto-logout on token expiration
- ✅ CORS configuration

---

## 📊 API Endpoints

### Authentication

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register new user | No |
| POST | `/api/auth/login` | Login user | No |
| GET | `/api/auth/me` | Get current user | Yes |
| POST | `/api/auth/logout` | Logout user | Yes |

---

## 🎯 Current Status

### Completed Features ✅
- User registration
- User login
- JWT authentication
- Protected routes
- Role-based access control
- Zustand state management
- Persistent authentication
- Modern UI with Tailwind CSS
- Comprehensive documentation

### Upcoming Features 🚧
- Forgot password
- Email verification
- Profile management
- Appointments management
- Patients management
- Doctors management
- Medical records
- Prescriptions
- Billing system
- Reports and analytics

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License.

---

## 👥 Authors

- Your Name - Initial work

---

## 🙏 Acknowledgments

- MERN Stack community
- Zustand for simple state management
- Tailwind CSS for beautiful styling
- All contributors and supporters

---

## 📞 Support

For questions or issues:
- Check the documentation in the `docs` folder
- Review code comments
- Open an issue on GitHub

---

## 🎉 Getting Started

Ready to start? Follow the [Quick Start Guide](QUICK_START.md) to get up and running in minutes!

**Happy coding!** 🚀
