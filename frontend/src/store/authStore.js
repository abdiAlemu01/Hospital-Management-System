import { create } from "zustand";
import { persist } from "zustand/middleware";

/**
 * Zustand Auth Store
 * Manages authentication state globally across the application
 * 
 * Why Zustand?
 * - Simple and lightweight (no boilerplate)
 * - Built-in persistence
 * - No Provider needed
 * - Better performance than Context API
 */

const useAuthStore = create(
  persist(
    (set) => ({
      // State
      user: null,
      token: null,
      isAuthenticated: false,
      loading: false,
      error: null,

      // Actions
      
      /**
       * Set user data after successful login/register
       */
      setUser: (user) =>
        set({
          user,
          isAuthenticated: !!user,
        }),

      /**
       * Set JWT token
       */
      setToken: (token) =>
        set({
          token,
        }),

      /**
       * Set loading state
       */
      setLoading: (loading) =>
        set({
          loading,
        }),

      /**
       * Set error message
       */
      setError: (error) =>
        set({
          error,
        }),

      /**
       * Login action - Store user and token
       */
      login: (userData, token) =>
        set({
          user: userData,
          token,
          isAuthenticated: true,
          error: null,
        }),

      /**
       * Register action - Store user and token
       */
      register: (userData, token) =>
        set({
          user: userData,
          token,
          isAuthenticated: true,
          error: null,
        }),

      /**
       * Logout action - Clear all auth data
       */
      logout: () =>
        set({
          user: null,
          token: null,
          isAuthenticated: false,
          error: null,
        }),

      /**
       * Clear error message
       */
      clearError: () =>
        set({
          error: null,
        }),
    }),
    {
      name: "auth-storage", // localStorage key
      partialize: (state) => ({
        // Only persist these fields
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);

export default useAuthStore;
