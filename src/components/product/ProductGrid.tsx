import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section className="
    mx-auto
    justify-center
    h-765.75 
    tablet:h-255.25 
    lg:h-276.25 
    grid 
    grid-cols-[min(327px,100%)]
    gap-6 
    sm:gap-y-8 
    tablet:grid-cols-[repeat(3,213.33px)]
    tablet:grid-rows-[repeat(3,319px)]
    lg:grid-cols-[repeat(3,250.67px)] 
    lg:grid-rows-[repeat(3,347px)]">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  )
}
