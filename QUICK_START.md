# 🚀 Quick Start Guide - Hospital Management System

## ✅ All Issues Fixed!

Both Login.jsx and Register.jsx files have been recreated and are now working properly.

---

## 🏃 How to Run

### 1. Start MongoDB
Make sure MongoDB is running on your system:
```bash
# Windows
net start MongoDB

# macOS/Linux
sudo service mongod start
```

### 2. Start Backend Server
```bash
cd backend
npm run dev
```

**Expected Output:**
```
🚀 Server running on port 5000
✅ MongoDB Connected: 127.0.0.1
```

### 3. Start Frontend Development Server
Open a **new terminal** and run:
```bash
cd frontend
npm run dev
```

**Expected Output:**
```
VITE v8.x.x  ready in xxx ms
➜  Local:   http://localhost:5173/
```

### 4. Open Your Browser
Go to: **http://localhost:5173**

---

## 🧪 Test the System

### Register a New User
1. Click "Create account" or go to `/register`
2. Fill in the form:
   - **Name:** John Doe
   - **Email:** john@example.com
   - **Role:** Select any role (Patient, Doctor, Reception, Admin)
   - **Password:** Password123
   - **Confirm Password:** Password123
3. Click "Create account"
4. You'll be redirected to the dashboard ✅

### Login
1. Go to `/login`
2. Enter:
   - **Email:** john@example.com
   - **Password:** Password123
3. Click "Sign in"
4. You'll be redirected to the dashboard ✅

### Test Protected Routes
1. Logout from the dashboard
2. Try to access http://localhost:5173/
3. You'll be redirected to login page ✅

---

## 📁 Project Structure

```
HMS/
├── backend/
│   ├── src/
│   │   ├── config/          # Database configuration
│   │   ├── controllers/     # Request handlers
│   │   ├── middleware/      # Auth & error handling
│   │   ├── models/          # Database models
│   │   ├── routes/          # API routes
│   │   ├── utils/           # Utilities (JWT)
│   │   ├── validations/     # Input validation
│   │   └── server.js        # Entry point
│   ├── .env                 # Environment variables
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── features/
│   │   │   └── auth/        # Auth feature
│   │   ├── pages/           # Page components
│   │   ├── services/        # API client
│   │   ├── store/           # Zustand store
│   │   └── App.jsx          # Main app
│   ├── .env                 # Environment variables
│   └── package.json
│
└── AUTHENTICATION_GUIDE.md  # Complete documentation
```

---

## 🔑 Environment Variables

### Backend (.env)
```env
MONGO_URI=mongodb://127.0.0.1:27017/hospital_db
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRES_IN=7d
PORT=5000
NODE_ENV=development
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000/api
```

---

## 🎯 Features Implemented

### Backend
✅ User authentication with JWT
✅ Password hashing with bcrypt
✅ Input validation
✅ Protected routes
✅ Role-based access control
✅ Error handling

### Frontend
✅ Login page
✅ Register page
✅ Dashboard
✅ Zustand state management
✅ Protected routes
✅ Form validation
✅ Password strength indicator
✅ Loading states
✅ Error handling
✅ Responsive design

---

## 🔒 User Roles

The system supports 4 roles:
- **admin** - Full system access
- **doctor** - Medical staff
- **reception** - Front desk staff
- **patient** - Default role

---

## 📡 API Endpoints

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/auth/register` | Register user | No |
| POST | `/api/auth/login` | Login user | No |
| GET | `/api/auth/me` | Get current user | Yes |
| POST | `/api/auth/logout` | Logout user | Yes |

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5000 (backend)
npx kill-port 5000

# Kill process on port 5173 (frontend)
npx kill-port 5173
```

### MongoDB Connection Error
- Make sure MongoDB is running
- Check MONGO_URI in backend/.env
- Verify MongoDB is accessible at 127.0.0.1:27017

### CORS Error
- Make sure backend is running
- Check VITE_API_URL in frontend/.env
- Verify it points to http://localhost:5000/api

### Module Not Found
```bash
# Reinstall dependencies
cd backend && npm install
cd frontend && npm install
```

### Clear Browser Cache
- Press Ctrl+Shift+R (Windows/Linux)
- Press Cmd+Shift+R (macOS)
- Or clear browser cache manually

---

## 📚 Documentation

For detailed documentation, see:
- **AUTHENTICATION_GUIDE.md** - Complete authentication guide
- **README.md** - Project overview

---

## 🎉 You're All Set!

Your Hospital Management System authentication is now fully functional!

**Next Steps:**
1. Test the login and registration
2. Explore the dashboard
3. Check the code structure
4. Start building additional features

---

**Happy coding!** 🚀
