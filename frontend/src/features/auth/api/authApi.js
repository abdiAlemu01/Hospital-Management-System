import apiClient from "../../../services/apiClient";

/**
 * Auth API Service
 * Handles all authentication-related API calls
 */

export const authApi = {
  /**
   * Register a new user
   * @param {Object} userData - User registration data (name, email, password, role)
   * @returns {Promise} API response with user data and token
   */
  register: async (userData) => {
    const response = await apiClient.post("/auth/register", userData);
    return response.data;
  },

  /**
   * Login user
   * @param {Object} credentials - Email and password
   * @returns {Promise} API response with user data and token
   */
  login: async (credentials) => {
    const response = await apiClient.post("/auth/login", credentials);
    return response.data;
  },

  /**
   * Get current user profile
   * @returns {Promise} API response with user data
   */
  getMe: async () => {
    const response = await apiClient.get("/auth/me");
    return response.data;
  },

  /**
   * Logout user
   * @returns {Promise} API response
   */
  logout: async () => {
    const response = await apiClient.post("/auth/logout");
    return response.data;
  },
};
