"use client"

import Link from "next/link"
import { Icon } from "@iconify/react"
import { useCartStore } from "@/lib/store/cart-store"
import { useUIStore } from "@/lib/store/ui-store"

export default function Header() {
  const totalUnits = useCartStore((s) => s.items.reduce((acc, i) => acc + i.quantity, 0))
  const openCart = useUIStore((s) => s.openCart)

  return (
    <header className="flex justify-between items-center px-6 md:px-12 py-4 md:py-6 bg-[#FFF0F2]/80 backdrop-blur-md text-[#743033] border-b border-[#FDD8D6]">
      <Link href="/" className="text-2xl md:text-3xl font-script tracking-tight hover:opacity-90 transition-opacity">
        Dessertful
      </Link>
      <div className="flex items-center gap-5 md:gap-8">
        <nav className="flex items-center space-x-5 md:space-x-8 text-sm md:text-base font-medium">
          <Link href="/shop" className="hover:text-[#F05A61] transition-colors">Shop</Link>
          <Link href="/about" className="hover:text-[#F05A61] transition-colors">About</Link>
        </nav>
        <button
          onClick={openCart}
          className="relative p-2 text-[#743033] hover:text-[#F05A61] transition-colors cursor-pointer"
          aria-label="Open cart"
        >
          <Icon icon="carbon:shopping-cart" width={22} height={22} />
          {totalUnits > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#F05A61] text-white text-[11px] font-bold flex items-center justify-center">
              {totalUnits > 9 ? "9+" : totalUnits}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}