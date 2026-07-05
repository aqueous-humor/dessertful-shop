import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Dessertful — our mission to bring joy through handcrafted desserts with sustainable, carbon-neutral delivery.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#260F08] selection:bg-[#F05A61] selection:text-white">
      {/* ─── MINI HERO ─── */}
      <section className="relative flex flex-col items-center justify-center bg-gradient-to-b from-[#FDF2F0] to-white px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#F5A3B7] rounded-full mix-blend-multiply filter blur-[80px] opacity-30" />
          <div className="absolute -bottom-16 right-8 w-56 h-56 bg-[#AEDB86] rounded-full mix-blend-multiply filter blur-[70px] opacity-25" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <span className="inline-block text-xs md:text-sm font-semibold text-[#F05A61] tracking-widest uppercase bg-white/60 px-5 py-2 rounded-full mb-6 border border-[#FDD8D6]">
            Our Story
          </span>
          <h1 className="font-serif font-semibold text-[#743033] text-[2.5rem] md:text-[3.5rem] leading-[1.15] mb-5 tracking-tight">
            The sweetest treats,<br />made with purpose
          </h1>
          <p className="text-[#8B7D7E] text-[16px] md:text-[1.1rem] max-w-[28rem] mx-auto leading-relaxed">
            We believe dessert is more than sugar and flour — it&rsquo;s a moment of joy shared with the people you love.
          </p>
        </div>
      </section>

      {/* ─── BRAND STORY ─── */}
      <section className="relative w-full bg-white py-20 md:py-28">
        <div className="max-w-[72rem] mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <span className="text-xs md:text-sm font-semibold text-[#F05A61] tracking-widest uppercase">
                Since 2024
              </span>
              <h2 className="text-3xl md:text-[2.5rem] font-serif font-semibold text-[#743033] mt-3 mb-6 leading-[1.2]">
                Handcrafted with<br />love, delivered with care
              </h2>
              <p className="text-[#8B7D7E] leading-relaxed mb-5">
                Dessertful was born from a simple belief: that the best desserts come from passion,
                patience, and the finest ingredients. What started as a small kitchen experiment
                quickly grew into a mission to share beautifully crafted treats with everyone.
              </p>
              <p className="text-[#8B7D7E] leading-relaxed mb-6">
                Every recipe is developed in-house, tested to perfection, and made in small batches
                to ensure quality in every bite. From our kitchen to your door — with love.
              </p>
              <Link
                href="/shop"
                className="inline-block bg-gradient-to-r from-[#F05F64] to-[#E3545A] text-white font-semibold text-[15px] px-8 py-3.5 rounded-full shadow-[0_8px_20px_rgba(227,84,90,0.25)] hover:shadow-[0_12px_25px_rgba(227,84,90,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Explore Our Desserts
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-[#FFF0F2] to-[#FCE4EC] overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-7xl mb-6">🧁</div>
                  <p className="font-serif text-[#743033] text-lg italic">
                    &ldquo;Baking is where science meets soul&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="relative w-full bg-[#FCF8F6] py-20 md:py-28">
        <div className="max-w-[72rem] mx-auto px-6 md:px-8">
          <div className="text-center mb-14">
            <span className="text-xs md:text-sm font-semibold text-[#F05A61] tracking-widest uppercase">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-[2.5rem] font-serif font-semibold text-[#743033] mt-3">
              Our Values
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: "🥚",
                title: "Quality Ingredients",
                description:
                  "We source locally whenever possible, using free-range eggs, real butter, and premium chocolate. No shortcuts, no compromises.",
              },
              {
                icon: "🌱",
                title: "Sustainability",
                description:
                  "Carbon-neutral delivery, compostable packaging, and minimal food waste. Good for your taste buds and the planet.",
              },
              {
                icon: "👩‍🍳",
                title: "Artisan Craftsmanship",
                description:
                  "Every dessert is handcrafted in small batches by our skilled bakers. Consistency and care in every single order.",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm border border-[#F0E6E2] hover:shadow-md transition-shadow duration-300"
              >
                <span className="text-3xl md:text-4xl block mb-5">{value.icon}</span>
                <h3 className="font-semibold text-[#260F08] text-lg mb-3">{value.title}</h3>
                <p className="text-[#8B7D7E] text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative w-full bg-gradient-to-br from-[#743033] to-[#9C3B36] py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#F5A3B7] rounded-full mix-blend-soft-light filter blur-[80px] opacity-30" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#FCE4EC] rounded-full mix-blend-soft-light filter blur-[100px] opacity-20" />
        </div>
        <div className="relative text-center px-6">
          <h2 className="text-3xl md:text-[2.5rem] font-serif font-semibold text-white mb-4">
            Ready to indulge?
          </h2>
          <p className="text-[#E8D5D0] text-[15px] md:text-base max-w-lg mx-auto mb-8">
            Browse our full collection of handcrafted desserts and find your new favorite treat.
          </p>
          <Link
            href="/shop"
            className="inline-block px-10 py-4 rounded-full bg-white text-[#743033] font-semibold text-[15px] hover:bg-[#FFF0F2] transition-colors shadow-lg"
          >
            Start Shopping
          </Link>
        </div>
      </section>

    </main>
  );
}