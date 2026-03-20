import { create } from "zustand"

interface UIState {
  isOrderModalOpen: boolean
  openOrderModal: () => void
  closeOrderModal: () => void
}

export const useUIStore = create<UIState>((set) => ({
  isOrderModalOpen: false,

  openOrderModal: () => set({ isOrderModalOpen: true }),

  closeOrderModal: () => set({ isOrderModalOpen: false }),
}))