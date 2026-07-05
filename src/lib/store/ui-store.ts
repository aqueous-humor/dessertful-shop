import { create } from "zustand"

interface UIState {
  isOrderModalOpen: boolean
  openOrderModal: () => void
  closeOrderModal: () => void
  isCartOpen: boolean
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
}

export const useUIStore = create<UIState>((set) => ({
  isOrderModalOpen: false,
  isCartOpen: false,

  openOrderModal: () => set({ isOrderModalOpen: true }),
  closeOrderModal: () => set({ isOrderModalOpen: false }),

  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
}))