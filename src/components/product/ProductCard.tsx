"use client"

import Image from "next/image";
import { useCartActions, useCartItems } from "@/lib/store/cart-store";
import type { Product } from "@/types/product";
import { Icon } from '@iconify/react';

export default function ProductCard({ product }: { product: Product }) {
  const { addItem, increaseQuantity, decreaseQuantity } = useCartActions()
  const cartItem = useCartItems(
    (items) => items.find((item) => item.id === product.id)
  );


  //
  const isSelected = !!cartItem

  return (
    <div className="flex flex-col gap-9.5 ">
      {/* Image & Button Container */}
      <div className="relative ">
        <div
          className={`relative aspect-video tablet:aspect-square overflow-hidden rounded-card border-2 transition-colors duration-300 ${isSelected ? "border-primary" : "border-transparent"
            }`}
        >
          <Image
            src={product.img}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Floating Add to Cart / Quantity Selector */}
        <div className="absolute -bottom-5 left-1/2 w-40 -translate-x-1/2">
          {!isSelected ? (
            <button
              onClick={() => addItem(product, 1)}
              className="flex w-full items-center justify-center gap-2 rounded-pill border border-rose-400 bg-white py-2.75 text-small font-semibold text-rose-900 transition-all hover:cursor-pointer hover:border-primary hover:text-primary"
            >
              <Icon icon="carbon:shopping-cart-plus" className="text-primary h-5 w-5" />
              Add to Cart
            </button>
          ) : (
            <div className="flex w-full items-center justify-between rounded-pill bg-primary px-3 py-3 text-white">
              <button
                onClick={() => decreaseQuantity(product.id)}
                className="flex h-5 w-5 items-center justify-center rounded-full border border-white hover:cursor-pointer hover:bg-white hover:text-primary transition-colors"
                aria-label="Decrease quantity of items"
              >
                <Icon icon="carbon:subtract" className="h-5 w-5" />
              </button>

              <span className="text-small font-semibold">{cartItem.quantity}</span>

              <button
                onClick={() => increaseQuantity(product.id)}
                className="flex h-5 w-5 items-center justify-center rounded-full border border-white hover:cursor-pointer hover:bg-white hover:text-primary transition-colors"
                aria-label="Increase quantity of items"
              >
                <Icon icon="carbon:add" className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-1">
        <p className="text-small text-rose-500">{product.category}</p>
        <h3 className="text-product-name text-rose-900">{product.name}</h3>
        <p className="text-subtitle font-semibold text-primary">${product.price.toFixed(2)}</p>
      </div>
    </div>
  )
}
