import ProductGrid from "@/components/product/ProductGrid";
import Cart from "@/components/cart/Cart";

export default function Home() {
  return (
    <main className="max-w-max ">
      <div className="flex flex-col gap-8 lg:flex-row  p-6 tablet:p-10 lg:px-[7.8%] lg:py-[6.1%] ">
        <div className="">   
        <h1 className="text-confirm-title mb-8 text-rose-900 display-block text-left">Dessertful</h1>
          <ProductGrid />
        </div>
        
        <div className="w-full h-74.75 lg:w-[26.7%]">
          <Cart />
        </div>
      </div>
    </main>
  )
}
