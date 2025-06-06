'use client';
import { create } from 'zustand';

type Store = {
  dark: boolean;
  toggle: () => void;
};

export const usethemeStore = create<Store>()((set) => ({
  dark: true,
  toggle: () => set((state) => ({ dark: !state.dark })),
}));
