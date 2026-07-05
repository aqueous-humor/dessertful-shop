import type { Metadata } from "next";
import ProductGrid from "@/components/product/ProductGrid";

export const metadata: Metadata = {
  title: "Shop Desserts",
  description:
    "Explore our full collection of handcrafted desserts. Tiramisu, macarons, cakes, pies, and more — made fresh daily.",
};

export default function Shop() {
  return (
    <main className="max-w-max">
      <div className="p-6 tablet:p-10 lg:px-[7.8%] lg:py-[6.1%]">
        {/* <h1 className="text-confirm-title mb-8 text-rose-900">Desserts</h1> */}
        <ProductGrid />
      </div>
    </main>
  )
}
