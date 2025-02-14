// src/store/auth.ts
import { create } from 'zustand';

type AuthState = {
  user: null | { id: string; email: string };
  isAuthenticated: boolean;
  login: (user: { id: string; email: string }) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: (user) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
}));