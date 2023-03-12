import { create } from "zustand";

export const useSession = create(set => ({
  isLoggedIn: false,
  setIsLoggedIn: (boolean) => set(()=>({isLoggedIn: boolean})),
}));