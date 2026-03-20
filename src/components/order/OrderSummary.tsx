"use client"

import React from "react";
import { useStore } from "@/lib/hooks/use-cart";
import { useCartItems, useCartTotal, useCartStore, type CartState } from "@/lib/store/cart-store";
import CartItem from "../cart/CartItem";
import Image from "next/image";

export default function OrderSummary() {
    const cartItems = useStore<CartState, CartState['items']>(
        useCartStore,
        (state) => state.items
    ) ?? [];
    const total = useCartTotal();
    console.log(cartItems)

    return (
        <div className="flex flex-col gap-4 bg-rose-50 rounded-lg p-6">
            {cartItems.map((item, index) => (
                <React.Fragment key={item.id}>
                    <CartItem item={item} isSummary={true} />
                    {index !== cartItems.length - 1 && <div className="border-t border-rose-100" />}
                </React.Fragment>
            ))}

            <div className="border-t border-rose-100 pt-4 flex items-center justify-between text-rose-900">
                <span className="text-small leading-default">Order Total</span>
                <span className="text-total-price ">
                    ${total.toFixed(2)}
                </span>
            </div>
        </div>
    )
}