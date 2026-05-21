import Link from "next/link";

const categories = [
  { name: "Zodiac", href: "/category/zodiac" },
  { name: "Glow in the Dark", href: "/category/glow" },
  { name: "Occasions & Events", href: "/category/occasions" },
  { name: "Liquid Dimensional", href: "/category/liquid-dimensional" },
  { name: "It's All About Me", href: "/category/all-about-me" },
  { name: "Press Phones", href: "/category/press-phones" },
  { name: "Kits", href: "/category/kits" },
  { name: "Add-Ons", href: "/category/add-ons" },
  { name: "Bundles", href: "/category/bundles" },
  { name: "Extended Sets", href: "/category/extended-sets" },
];

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#0D0D2B", color: "#FFF8F0" }}
      className="mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3
              className="text-2xl font-black mb-3"
              style={{ color: "#FF1F8F", textShadow: "2px 2px 0px #8B2BE2" }}
            >
              💅 Nailed by Q
            </h3>
            <p className="text-sm leading-relaxed opacity-80">
              Press-on nails that hit different. Bold, vibrant, and made for
              queens who never compromise on their look. All nail sets include
              nail glue — ready to apply!
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                📸
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:scale-110 transition-transform"
                aria-label="TikTok"
              >
                🎵
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-black text-lg mb-3" style={{ color: "#FFE500" }}>
              Shop
            </h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.href}>
                  <Link
                    href={cat.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-pink-400 transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-black text-lg mb-3" style={{ color: "#00C8FF" }}>
              Info
            </h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>📦 Fast shipping on all orders</li>
              <li>💅 All sets include nail glue</li>
              <li>🌙 Glow accessories in a bag</li>
              <li>👑 Custom &quot;All About Me&quot; sets available</li>
              <li className="pt-2">
                <a
                  href="mailto:team@onboarding-n975wwnz-1779306768780.madethis.app"
                  className="hover:text-pink-400 transition-colors"
                >
                  ✉️ Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-10 pt-6 text-center text-xs opacity-50"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          © {new Date().getFullYear()} Nailed by Q. All rights reserved. 💅
        </div>
      </div>
    </footer>
  );
}
