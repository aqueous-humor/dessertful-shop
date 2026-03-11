"use client"

import { useCartTotal } from "@/lib/store/cart-store";

export default function CartTotal() {
  const total = useCartTotal();

  return (
    <div className="flex justify-between ">
      <span className="text-rose-900">
        Order Total
      </span>

      <span className="text-total-price text-rose-900">
        ${total.toFixed(2)}
      </span>
    </div>
  )
}