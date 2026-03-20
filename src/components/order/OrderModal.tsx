"use client"

import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { useCartActions } from "@/lib/store/cart-store";
import { useUIStore } from "@/lib/store/ui-store";
import OrderSummary from "./OrderSummary";
import { Icon } from "@iconify/react";


export default function OrderModal() {
  const { clearCart } = useCartActions();
  const closeModal = useUIStore((s) => s.closeOrderModal);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  function handleRestart() {
    clearCart()
    closeModal()
  }

  // because of hydration issues with portals, we conditionally render the modal after the component has mounted
  if (!mounted) return null

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-end tablet:items-center justify-center bg-black/40 p-0 tablet:p-4">
      <div className="bg-white rounded-card w-full tablet:w-[89.58%] lg:w-[41.11%] h-171.25 max-h-[90vh] p-6 flex flex-col gap-8">

        <div className="flex flex-col gap-6 shrink-0">
          <Icon icon="carbon:checkmark-outline" width={48} height={48} className="text-green" />
          <div className="flex flex-col gap-2">
            <h2 className="text-confirm-title text-rose-900">
              Order Confirmed
            </h2>
            <p className="text-rose-400 text-small">
              We hope you enjoy your food!
            </p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <OrderSummary />
        </div>

        <div className="shrink-0">
          <button
            onClick={handleRestart}
            className="w-full rounded-pill bg-primary py-4 text-white font-semibold hover:cursor-pointer hover:bg-primary-overlay transition-colors"
          >
            Start New Order
          </button>
        </div>

      </div>
    </div>,
    document.body
  )
}