import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem } from "@/types/cart";
import type { Product } from "@/types/product";

export interface CartState {
    items: CartItem[]
    // Grouping actions in a single stable object prevents rerenders when state changes
    actions: {
        addItem: (product: Product, quantity: number) => void
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
                addItem: (product) =>
                    set((state) => {
                        const existing = state.items.find((i) => i.id === product.id)
                        if (existing) {
                            return {
                                items: state.items.map((i) =>
                                    i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
                                ),
                            }
                        }
                        return {
                            items: [
                                ...state.items,
                                {
                                    id: product.id,
                                    name: product.name,
                                    price: product.price,
                                    quantity: 1
                                }
                            ]
                        }
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
