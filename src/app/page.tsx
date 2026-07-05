import React from 'react';
import type { Metadata } from "next";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/products";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Browse our handcrafted selection of desserts — from classic tiramisu to pistachio baklava. Order now for carbon-neutral delivery.",
  openGraph: {
    title: "Dessertful — Handcrafted Desserts Delivered to Your Door",
    description:
      "Browse our handcrafted selection of desserts. Order now for carbon-neutral delivery.",
  },
};

export default function DessertShopHome() {
  return (
    <div className="min-h-screen bg-white font-sans text-rose-900 overflow-hidden selection:bg-[#F05A61] selection:text-white">

      {/* ─── HERO SECTION ─── */}
      <section className="relative min-h-screen flex flex-col bg-linear-to-b from-[#FDF2F0] to-white">
        {/* Background Blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -left-32 w-md h-md bg-[#F5A3B7] rounded-full mix-blend-multiply filter blur-[100px] opacity-50 animate-float-slow" />
          <div className="absolute top-1/3 -right-32 w-lg h-lg bg-[#AEDB86] rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-float" />
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-[#F0676C] rounded-full mix-blend-multiply filter blur-[80px] opacity-30 animate-float-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-xl h-xl bg-[#FCE4EC] rounded-full mix-blend-multiply filter blur-[120px] opacity-40" />
        </div>

        {/* Animated Decor Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[18%] left-[8%] w-16 h-16 md:w-24 md:h-24 bg-[#F5A3B7] rounded-full opacity-30 blur-sm animate-float-slow" style={{ animationDelay: "0s" }} />
          <div className="absolute top-[30%] right-[12%] w-12 h-12 md:w-20 md:h-20 bg-[#AEDB86] rounded-full opacity-25 blur-sm animate-float" style={{ animationDelay: "1s" }} />
          <div className="absolute bottom-[28%] left-[15%] w-10 h-10 md:w-16 md:h-16 bg-[#F5D0A9] rounded-full opacity-30 blur-sm animate-float-slow" style={{ animationDelay: "2s" }} />
          <div className="absolute top-[15%] right-[25%] w-8 h-8 md:w-14 md:h-14 bg-[#F0676C] rounded-full opacity-20 blur-sm animate-float" style={{ animationDelay: "0.5s" }} />
          <div className="absolute bottom-[35%] right-[20%] w-14 h-14 md:w-20 md:h-20 bg-[#C8E6C9] rounded-full opacity-25 blur-sm animate-float-slow" style={{ animationDelay: "1.5s" }} />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex-1 flex items-center justify-center px-6">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <span className="inline-block text-xs md:text-sm font-semibold text-[#F05A61] tracking-widest uppercase bg-[#FFF0F2] px-5 py-2 rounded-full mb-8 border border-[#FDD8D6]">
              Handcrafted with Love
            </span>
            <h1 className="font-serif font-semibold text-[#743033] text-[2.65rem] md:text-6xl lg:text-[4rem] leading-[1.15] mb-6 tracking-tight">
              Delicious desserts,<br />delivered to your door
            </h1>
            <p className="text-[#8B7D7E] text-[17px] md:text-[1.15rem] max-w-120 mx-auto mb-10 leading-relaxed font-light">
              Choose from our handcrafted selection of treats, made fresh and delivered with care.
            </p>
            <a
              href="/shop"
              className="inline-block bg-linear-to-r from-[#F05F64] to-[#E3545A] text-white font-semibold text-[17px] px-10 py-4 rounded-full shadow-[0_8px_25px_rgba(227,84,90,0.3)] hover:shadow-[0_12px_30px_rgba(227,84,90,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Shop Desserts
            </a>
          </div>
        </div>
      </section>

      {/* ─── FEATURED PRODUCTS ─── */}
      <section className="relative w-full bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-14">
            <span className="text-xs md:text-sm font-semibold text-[#F05A61] tracking-widest uppercase">
              Bestsellers
            </span>
            <h2 className="text-3xl md:text-hero font-serif font-semibold text-[#743033] mt-3 mb-4">
              Featured Desserts
            </h2>
            <p className="text-[#8B7D7E] text-[15px] md:text-base max-w-xl mx-auto">
              Our most-loved treats, crafted fresh daily with premium ingredients
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/shop"
              className="inline-block text-[#743033] font-semibold text-[15px] border-2 border-[#E8D5D0] px-8 py-3 rounded-full hover:border-[#743033] hover:bg-rose-50 transition-all duration-300"
            >
              View All Desserts
            </a>
          </div>
        </div>
      </section>

      {/* ─── CATEGORY SHOWCASE ─── */}
      <section className="relative w-full bg-rose-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-14">
            <span className="text-xs md:text-sm font-semibold text-[#F05A61] tracking-widest uppercase">
              Browse By
            </span>
            <h2 className="text-3xl md:text-hero font-serif font-semibold text-[#743033] mt-3">
              Dessert Categories
            </h2>
          </div>

          {(() => {
            const categories = [...new Set(products.map((p) => p.category))];
            return (
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {categories.map((category) => (
                  <a
                    key={category}
                    href="/shop"
                    className="group relative flex flex-col items-center justify-center bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-[#F0E6E2]"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-linear-to-br from-[#FFF0F2] to-[#FCE4EC] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl md:text-3xl">
                        {category === "Waffle" && "🧇"}
                        {category === "Crème Brûlée" && "🍮"}
                        {category === "Macaron" && "🥠"}
                        {category === "Tiramisu" && "🍰"}
                        {category === "Baklava" && "🧁"}
                        {category === "Pie" && "🥧"}
                        {category === "Cake" && "🎂"}
                        {category === "Brownie" && "🍫"}
                        {category === "Panna Cotta" && "🍮"}
                      </span>
                    </div>
                    <span className="text-sm md:text-base font-semibold text-[#743033] text-center">
                      {category}
                    </span>
                    <span className="text-xs text-rose-400 mt-1">
                      {products.filter((p) => p.category === category).length} items
                    </span>
                  </a>
                ))}
              </div>
            );
          })()}
        </div>
      </section>

      {/* ─── BRAND STORY ─── */}
      <section className="relative w-full bg-white py-20 md:py-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFF0F2] rounded-full blur-[100px] opacity-60 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FCE4EC] rounded-full blur-[100px] opacity-50 -translate-x-1/2 translate-y-1/2 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <span className="text-xs md:text-sm font-semibold text-[#F05A61] tracking-widest uppercase">
                Our Promise
              </span>
              <h2 className="text-3xl md:text-hero font-serif font-semibold text-[#743033] mt-3 mb-6 leading-[1.2]">
                Handcrafted with<br />love, delivered with care
              </h2>
              <p className="text-[#8B7D7E] leading-relaxed mb-6">
                Every dessert at Dessertful is made from scratch using the finest ingredients.
                We source locally where possible, and our bakers pour their passion into every
                batch — because you deserve nothing less than perfection.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#E8F5E9] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-green text-lg">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-rose-900 text-sm">Premium Ingredients</h4>
                    <p className="text-rose-400 text-sm">Locally sourced, ethically produced, always fresh</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#E8F5E9] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-green text-lg">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-rose-900 text-sm">Carbon-Neutral Delivery</h4>
                    <p className="text-rose-400 text-sm">Every order is delivered with net-zero emissions</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#E8F5E9] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-green text-lg">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-rose-900 text-sm">Handcrafted in Small Batches</h4>
                    <p className="text-rose-400 text-sm">Made to order for maximum freshness and flavor</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-4/5 rounded-3xl bg-linear-to-br from-[#FFF0F2] to-[#FCE4EC] overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-7xl mb-6">🍪</div>
                  <p className="font-serif text-[#743033] text-lg italic">
                    "Baking is our love language"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="relative w-full bg-rose-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-14">
            <span className="text-xs md:text-sm font-semibold text-[#F05A61] tracking-widest uppercase">
              Loved by Customers
            </span>
            <h2 className="text-3xl md:text-hero font-serif font-semibold text-[#743033] mt-3">
              What People Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                quote: "The tiramisu was absolutely divine. Better than any Italian restaurant I've been to!",
                name: "Sarah M.",
                role: "Verified Buyer",
              },
              {
                quote: "Ordered a mix of macarons for a party — they were devoured in minutes. Will definitely order again!",
                name: "James K.",
                role: "Verified Buyer",
              },
              {
                quote: "The carbon-neutral delivery made me feel good about indulging. And the brownies? To die for.",
                name: "Emma L.",
                role: "Verified Buyer",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm border border-[#F0E6E2] hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, s) => (
                    <span key={s} className="text-[#F05A61] text-sm">★</span>
                  ))}
                </div>
                <p className="text-[#8B7D7E] leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-rose-900 text-sm">{testimonial.name}</p>
                  <p className="text-rose-400 text-xs">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER ─── */}
      <section className="relative w-full bg-linear-to-br from-[#743033] to-[#9C3B36] py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#F5A3B7] rounded-full mix-blend-soft-light filter blur-[80px] opacity-30" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#FCE4EC] rounded-full mix-blend-soft-light filter blur-[100px] opacity-20" />
        </div>
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <span className="inline-block text-xs md:text-sm font-semibold text-[#FDD8D6] tracking-widest uppercase mb-4">
            Stay in Touch
          </span>
          <h2 className="text-3xl md:text-hero font-serif font-semibold text-white mt-3 mb-4">
            Get 10% Off Your First Order
          </h2>
          <p className="text-[#E8D5D0] text-[15px] md:text-base max-w-lg mx-auto mb-8">
            Subscribe to our newsletter for exclusive offers, new arrivals, and dessert inspiration.
          </p>
          <NewsletterForm />
        </div>
      </section>

    </div>
  );
}