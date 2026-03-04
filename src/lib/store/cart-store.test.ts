import { renderHook, act } from "@testing-library/react";
import { useCartStore, useCartTotal, useCartActions, useCartItems } from "./cart-store";

describe("Cart Store (Domain Logic & Selectors)", () => {
    // Reset the store state before every test to ensure isolation
    beforeEach(() => {
        act(() => {
            useCartStore.setState({ items: [] });
        });
    });

    const mockProduct = {
        id: "red-velvet-cake",
        name: "Red Velvet Cake",
        price: 4.50,
        category: "cake" as const,
    };

    it("should add an item to the cart and reflect in useCartItems", () => {
        const { result: items } = renderHook(() => useCartItems());
        const { result: store } = renderHook(() => useCartStore());

        act(() => {
            store.current.actions.addItem(mockProduct, 1);
        });

        expect(items.current).toHaveLength(1);
        expect(items.current[0]).toEqual({
            id: "red-velvet-cake",
            name: "Red Velvet Cake",
            price: 4.50,
            quantity: 1
        });
    });

    it("should increase quantity if item already exists", () => {
        const { result: items } = renderHook(() => useCartItems());
        const { result: store } = renderHook(() => useCartStore());

        act(() => {
            store.current.actions.addItem(mockProduct, 1);
            store.current.actions.addItem(mockProduct, 1); // Adding same ID again
        });

        expect(items.current).toHaveLength(1);
        expect(items.current[0].quantity).toBe(2);
    });

    it("should calculate total price correctly using useCartTotal selector", () => {
        const { result: total } = renderHook(() => useCartTotal());
        const { result: store } = renderHook(() => useCartStore());

        act(() => {
            store.current.actions.addItem(mockProduct, 1); // 4.50
            store.current.actions.addItem({
                ...mockProduct,
                id: "salted-caramel-brownie",
                price: 5.50,
            }, 1); // 5.50
        });

        // Verifying the actual selector output
        expect(total.current).toBe(10.00);
    });

    it("should remove item completely when decreasing quantity to 0", () => {
        const { result: items } = renderHook(() => useCartItems());
        const { result: store } = renderHook(() => useCartStore());

        act(() => {
            store.current.actions.addItem(mockProduct, 1);
            store.current.actions.decreaseQuantity("red-velvet-cake");
        });

        expect(items.current).toHaveLength(0);
    });

    it("should clear the entire cart via actions", () => {
        const { result: items } = renderHook(() => useCartItems());
        const { result: store } = renderHook(() => useCartStore());

        act(() => {
            store.current.actions.addItem(mockProduct, 1);
            store.current.actions.clearCart();
        });

        expect(items.current).toHaveLength(0);
    });
});
