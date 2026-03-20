"use client"

import { Fragment, useState } from "react";
import { useStore } from "@/lib/hooks/use-cart";
import { useCartStore, type CartState } from "@/lib/store/cart-store";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import OrderModal from "../order/OrderModal";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useUIStore } from "@/lib/store/ui-store";

export default function Cart() {
    const cartItems = useStore<CartState, CartState['items']>(
        useCartStore,
        (state) => state.items
    ) ?? [];

    const totalUnits = useStore<CartState, number>(
        useCartStore,
        (state) => state.items.reduce((acc, item) => acc + item.quantity, 0)
    ) ?? 0;

    const openModal = useUIStore((state) => state.openOrderModal)

    // const [showOrderModal, setShowOrderModal] = useState(false);

    // const isOpen = useUIStore((state) => state.isOrderModalOpen)
    // const close = useUIStore((state) => state.closeOrderModal)
    // const openOrderModal = useUIStore((state) => state.openOrderModal);

    return (
        <aside className="bg-white rounded-card p-[6.25%] flex flex-col gap-6">

            <h2 className="text-cart-title">
                Your Cart ({totalUnits})
            </h2>

            {cartItems.length === 0 ? (
                <div className="text-center flex flex-col items-center">
                    <Image
                        src="/images/empty-illustration.jpg"
                        alt="Empty cart cake"
                        width={121.03}
                        height={101.41}
                    />
                    <p className="mt-[29.59px] mb-4 text-small font-semibold text-rose-500 ">
                        Your added items will appear here
                    </p>
                </div>
            ) : (
                <>
                    <div className="flex flex-col gap-4 ">
                        {cartItems.map((item, index) => (
                            <Fragment key={item.id}>
                                <CartItem item={item}  />
                                {index !== cartItems.length - 1 && <div className="border-t border-rose-100" />}
                            </Fragment>

                        ))}
                    </div>

                    <div className="border-t border-rose-100" />

                    <CartTotal />

                    <div className="flex items-center justify-center gap-2 rounded-lg bg-rose-50 p-4 text-small text-rose-900 ">
                        <Icon icon="carbon:tree" className="text-green" />
                        <span>This is a <span className="font-semibold">carbon-neutral</span> delivery</span>
                    </div>

                    <button
                        onClick={openModal}
                        className="w-full rounded-pill bg-primary py-4 text-white font-semibold hover:cursor-pointer hover:bg-primary-overlay transition-colors "
                    >
                        Confirm Order
                    </button>
                </>
            )}
            {/* {showOrderModal && (
                // <OrderModal onClose={close} />
                <OrderModal onClose={() => setShowOrderModal(false)} />
            )} */}
        </aside>
    )
}