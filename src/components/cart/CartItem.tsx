"use client"

import { Icon } from "@iconify/react";
import type { CartItem as CartItemType } from "@/types/cart";
import { useCartActions } from "@/lib/store/cart-store";
import Image from "next/image";

export default function CartItem({ item, isSummary = false }: { item: CartItemType, isSummary?: boolean }) {
    const { removeItem } = useCartActions();

    const subtotal = item.price * item.quantity

    return (
        <div className="flex justify-between items-center">

            <div className="flex flex-row gap-2">
                {isSummary && (
                    <Image
                    src={item.img}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="rounded "
                />)}
                <div className="flex flex-col gap-2">
                <p className="leading-default text-small font-semibold text-rose-900">
                    {item.name}
                </p>

                <p className="text-small text-rose-500 flex gap-2">
                    <span className="text-small font-semibold text-primary">
                        {item.quantity}x
                    </span>
                    <span>
                        @ ${item.price.toFixed(2)}
                    </span>
                    {!isSummary && (
                        <span className="text-small leading-default font-semibold text-rose-500">
                            ${subtotal.toFixed(2)}
                        </span>
                    )}
                </p>
            </div>
            </div>

            <div className="flex items-center gap-4">
                {isSummary ? (
                    <span className="text-body leading-subtitle font-semibold text-rose-900">
                        ${subtotal.toFixed(2)}
                    </span>
                ) : (
                    <button
                        onClick={() => removeItem(item.id)}
                        className="text-rose-400 hover:cursor-pointer hover:text-rose-900 hover:bg-primary-gradient"
                    >
                        <Icon icon="carbon:close-outline" width={20} height={20} />
                    </button>
                )}
            </div>

        </div>
    )
}