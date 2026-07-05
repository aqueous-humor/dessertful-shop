import { Instagram, Facebook, Twitter } from "lucide-react"

const socialLinks = [
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "Facebook", icon: Facebook, href: "#" },
  { label: "Twitter", icon: Twitter, href: "#" },
]

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#260F08] text-[#CAAFA7]">
      <div className="max-w-[72rem] mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-script text-2xl text-white mb-4">Dessertful</h3>
            <p className="text-sm leading-relaxed text-[#AD8A85]">
              Handcrafted desserts made with love and delivered to your door with carbon-neutral shipping.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/shop" className="hover:text-white transition-colors">Shop All</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm">
              <li>hello@dessertful.com</li>
              <li>1-800-DESSERT</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {socialLinks.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-[#AD8A85]">
          &copy; {new Date().getFullYear()} Dessertful. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
