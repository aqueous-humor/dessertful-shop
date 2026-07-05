"use client"

export default function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-[#E8D5D0] text-sm outline-none focus:bg-white/15 focus:border-white/40 transition-all"
      />
      <button
        type="submit"
        className="px-8 py-3.5 rounded-full bg-white text-[#743033] font-semibold text-sm hover:bg-[#FFF0F2] transition-colors shrink-0 cursor-pointer"
      >
        Subscribe
      </button>
    </form>
  )
}
