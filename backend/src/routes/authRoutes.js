import express from "express";
import {
  register,
  login,
  getMe,
  logout,
} from "../controllers/authController.js";
import {
  registerValidation,
  loginValidation,
  validate,
} from "../validations/authValidation.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

/**
 * Public Routes
 */
// Register new user
router.post("/register", registerValidation, validate, register);

// Login user
router.post("/login", loginValidation, validate, login);

/**
 * Protected Routes (require authentication)
 */
// Get current user profile
router.get("/me", protect, getMe);

// Logout user
router.post("/logout", protect, logout);

export default router;
