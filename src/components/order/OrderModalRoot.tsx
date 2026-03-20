"use client"

import { useUIStore } from "@/lib/store/ui-store"
import OrderModal from "./OrderModal"

export default function OrderModalRoot() {
  const isOpen = useUIStore((s) => s.isOrderModalOpen)

  if (!isOpen) return null

  return <OrderModal />
}