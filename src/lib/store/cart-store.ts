import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface CartItem {
    id: string
    name: string
    price: number
    quantity: number
}

export interface CartState {
    items: CartItem[]
    // Grouping actions in a single stable object prevents rerenders when state changes
    actions: {
        addItem: (item: Omit<CartItem, "quantity">) => void
        removeItem: (id: string) => void
        increaseQuantity: (id: string) => void
        decreaseQuantity: (id: string) => void
        clearCart: () => void
    }
}

export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            items: [],
            actions: {
                addItem: (newItem) =>
                    set((state) => {
                        const existingIndex = state.items.findIndex((i) => i.id === newItem.id)
                        if (existingIndex > -1) {
                            const newItems = [...state.items]
                            newItems[existingIndex] = {
                                ...newItems[existingIndex],
                                quantity: newItems[existingIndex].quantity + 1
                            }
                            return { items: newItems }
                        }
                        return { items: [...state.items, { ...newItem, quantity: 1 }] }
                    }),

                removeItem: (id) =>
                    set((state) => ({
                        items: state.items.filter((i) => i.id !== id),
                    })),

                increaseQuantity: (id) =>
                    set((state) => ({
                        items: state.items.map((i) =>
                            i.id === id ? { ...i, quantity: i.quantity + 1 } : i
                        ),
                    })),

                decreaseQuantity: (id) =>
                    set((state) => ({
                        items: state.items
                            .map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
                            .filter((i) => i.quantity > 0),
                    })),

                clearCart: () => set({ items: [] }),
            },
        }),
        {
            name: "dessertful-cart",
            // Only persist the items, not the actions
            partialize: (state) => ({ items: state.items })
        }
    )
)

/** 
 * SELECTORS: Export individual hooks to prevent full-store subscriptions.
 * Components using only 'actions' will never rerender when 'items' change.
 */
export const useCartItems = () => useCartStore((state) => state.items)
export const useCartActions = () => useCartStore((state) => state.actions)

// Computed selector: Derived state should be calculated via a selector for efficiency
export const useCartTotal = () =>
    useCartStore((state) =>
        state.items.reduce((acc, item) => acc + item.price * item.quantity, 0)
    )
