"use client"

import { Fragment, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useStore } from "@/lib/hooks/use-cart";
import { useCartStore, type CartState } from "@/lib/store/cart-store";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useUIStore } from "@/lib/store/ui-store";

export default function Cart() {
    const isOpen = useUIStore((s) => s.isCartOpen)
    const closeCart = useUIStore((s) => s.closeCart)
    const openModal = useUIStore((s) => s.openOrderModal)

    const cartItems = useStore<CartState, CartState['items']>(
        useCartStore,
        (state) => state.items
    ) ?? [];

    const totalUnits = useStore<CartState, number>(
        useCartStore,
        (state) => state.items.reduce((acc, item) => acc + item.quantity, 0)
    ) ?? 0;

    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    const titleRow = (
        <div className="flex items-center justify-between">
            <h2 className="text-cart-title">
                Your Cart ({totalUnits})
            </h2>
            <button
                onClick={closeCart}
                className="p-2 text-rose-400 hover:text-rose-900 transition-colors"
                aria-label="Close cart"
            >
                <Icon icon="carbon:close" width={24} height={24} />
            </button>
        </div>
    )

    const content = cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <Image
                src="/images/empty-illustration.jpg"
                alt="Empty cart cake"
                width={121.03}
                height={101.41}
            />
            <p className="mt-[29.59px] mb-4 text-small font-semibold text-rose-500">
                Your added items will appear here
            </p>
        </div>
    ) : (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
                {cartItems.map((item, index) => (
                    <Fragment key={item.id}>
                        <CartItem item={item} />
                        {index !== cartItems.length - 1 && <div className="border-t border-rose-100" />}
                    </Fragment>
                ))}
            </div>

            <div className="border-t border-rose-100" />

            <CartTotal />

            <div className="flex items-center justify-center gap-2 rounded-lg bg-rose-50 p-4 text-small text-rose-900">
                <Icon icon="carbon:tree" className="text-green" />
                <span>This is a <span className="font-semibold">carbon-neutral</span> delivery</span>
            </div>

            <button
                onClick={() => { closeCart(); openModal() }}
                className="w-full rounded-pill bg-primary py-4 text-white font-semibold hover:cursor-pointer hover:bg-primary-overlay transition-colors"
            >
                Confirm Order
            </button>
        </div>
    )

    return createPortal(
        <div
            className={`fixed top-24 right-0 z-50 w-full sm:w-[400px] bg-white shadow-2xl border border-rose-100 rounded-bl-xl flex flex-col ${
                isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] max-h-[calc(100vh-8rem)]`}
        >
            <div className="shrink-0 px-6 pt-6 pb-2">
                {titleRow}
            </div>
            <div className="flex-1 overflow-y-auto px-6 pb-6">
                {content}
            </div>
        </div>,
        document.body
    )
}