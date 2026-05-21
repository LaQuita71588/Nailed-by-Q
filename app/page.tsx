import Link from "next/link";

const categories = [
  {
    name: "Zodiac",
    href: "/category/zodiac",
    emoji: "♊",
    desc: "All 12 signs, custom & sets",
    bg: "#8B2BE2",
    color: "#fff",
  },
  {
    name: "Glow in the Dark",
    href: "/category/glow",
    emoji: "🌙",
    desc: "Nails that shine at night",
    bg: "#00C8FF",
    color: "#0D0D2B",
  },
  {
    name: "Occasions & Events",
    href: "/category/occasions",
    emoji: "🎉",
    desc: "Holidays, birthdays & more",
    bg: "#FF6B1A",
    color: "#fff",
  },
  {
    name: "Liquid Dimensional",
    href: "/category/liquid-dimensional",
    emoji: "💧",
    desc: "3D texture, next-level drip",
    bg: "#FF1F8F",
    color: "#fff",
  },
  {
    name: "It's All About Me",
    href: "/category/all-about-me",
    emoji: "👑",
    desc: "Custom personalized sets",
    bg: "#FFE500",
    color: "#0D0D2B",
  },
  {
    name: "Press Phones",
    href: "/category/press-phones",
    emoji: "📱",
    desc: "Match your nails to your case",
    bg: "#FF1F8F",
    color: "#fff",
  },
  {
    name: "Kits",
    href: "/category/kits",
    emoji: "🎁",
    desc: "Everything you need to start",
    bg: "#0D0D2B",
    color: "#FFE500",
  },
  {
    name: "Add-Ons",
    href: "/category/add-ons",
    emoji: "✨",
    desc: "Gems, glue, decals & more",
    bg: "#7FFF00",
    color: "#0D0D2B",
  },
  {
    name: "Bundles",
    href: "/category/bundles",
    emoji: "💝",
    desc: "Save more, slay more",
    bg: "#8B2BE2",
    color: "#fff",
  },
  {
    name: "Extended Sets",
    href: "/category/extended-sets",
    emoji: "💅",
    desc: "XL & XXL nail sets",
    bg: "#FF6B1A",
    color: "#fff",
  },
];

const featuredProducts = [
  {
    name: "Scorpio Season Set",
    category: "Zodiac",
    price: "$18",
    emoji: "🦂",
    productId: "prod_zodiac_scorpio",
    badge: "Best Seller",
    badgeColor: "#FF1F8F",
  },
  {
    name: "Glow Glam Box",
    category: "Glow in the Dark",
    price: "$22",
    emoji: "✨",
    productId: "prod_glow_glam",
    badge: "New",
    badgeColor: "#00C8FF",
  },
  {
    name: "Birthday Babe Set",
    category: "Occasions",
    price: "$20",
    emoji: "🎂",
    productId: "prod_birthday_babe",
    badge: "Fan Fave",
    badgeColor: "#8B2BE2",
  },
  {
    name: "Freestyle Nail Kit",
    category: "Kits",
    price: "$35",
    emoji: "🎨",
    productId: "prod_freestyle_kit",
    badge: "Includes Glue",
    badgeColor: "#0D0D2B",
  },
];

const PLATFORM_BASE = "https://nailed-by-q.madethis.app";
const BUSINESS_SLUG = "onboarding-n975wwnz-1779306768780";

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section
        className="relative overflow-hidden py-20 px-4"
        style={{
          background:
            "linear-gradient(135deg, #FF1F8F 0%, #8B2BE2 50%, #00C8FF 100%)",
        }}
      >
        {/* Decorative circles */}
        <div
          className="absolute top-8 right-16 w-32 h-32 rounded-full opacity-20"
          style={{ backgroundColor: "#FFE500" }}
        />
        <div
          className="absolute bottom-8 left-8 w-20 h-20 rounded-full opacity-20"
          style={{ backgroundColor: "#7FFF00" }}
        />
        <div
          className="absolute top-1/2 right-8 w-12 h-12 rounded-full opacity-30"
          style={{ backgroundColor: "#FF6B1A" }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="text-6xl mb-4 float-anim inline-block">💅</div>
          <h1
            className="text-5xl md:text-7xl font-black text-white leading-tight mb-4"
            style={{ textShadow: "3px 3px 0px #0D0D2B" }}
          >
            Press-On Nails
            <br />
            <span style={{ color: "#FFE500" }}>That Hit Different</span>
          </h1>
          <p className="text-white text-xl font-bold mb-8 opacity-90">
            Bold. Vibrant. Made for Queens. ✨ All sets include nail glue!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/category/zodiac"
              className="crayon-btn px-8 py-3 text-lg"
              style={{ backgroundColor: "#FFE500", color: "#0D0D2B" }}
            >
              ♊ Shop Zodiac
            </Link>
            <Link
              href="/category/glow"
              className="crayon-btn px-8 py-3 text-lg"
              style={{ backgroundColor: "#0D0D2B", color: "#00C8FF" }}
            >
              🌙 Glow Sets
            </Link>
            <Link
              href="/category/kits"
              className="crayon-btn px-8 py-3 text-lg"
              style={{ backgroundColor: "#fff", color: "#FF1F8F" }}
            >
              🎁 Nail Kits
            </Link>
          </div>
        </div>
      </section>

      {/* ANNOUNCEMENT STRIP */}
      <div
        className="py-3 px-4 text-center font-black text-sm"
        style={{ backgroundColor: "#FFE500", color: "#0D0D2B", borderBottom: "2px solid #0D0D2B" }}
      >
        🎉 All nail sets come with nail glue included! &nbsp;|&nbsp; 📦 Fast
        shipping on all orders &nbsp;|&nbsp; 🌙 Glow accessories come in a cute
        bag!
      </div>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2
          className="text-4xl font-black text-center mb-2"
          style={{ color: "#0D0D2B" }}
        >
          Shop by Category
        </h2>
        <p className="text-center text-lg font-semibold opacity-60 mb-10">
          Find your vibe 💅
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="crayon-card flex flex-col items-center justify-center p-5 text-center transition-transform"
              style={{ backgroundColor: cat.bg, color: cat.color }}
            >
              <span className="text-4xl mb-2">{cat.emoji}</span>
              <span className="font-black text-sm leading-tight">{cat.name}</span>
              <span
                className="text-xs mt-1 opacity-80 font-semibold"
                style={{ color: cat.color }}
              >
                {cat.desc}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section
        className="py-16 px-4"
        style={{ backgroundColor: "#F5E6FF" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl font-black text-center mb-2"
            style={{ color: "#0D0D2B" }}
          >
            ✨ Fan Favorites
          </h2>
          <p className="text-center text-lg font-semibold opacity-60 mb-10">
            The sets everyone&apos;s obsessed with
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.productId}
                className="crayon-card overflow-hidden"
                style={{ backgroundColor: "#fff" }}
              >
                {/* Product image placeholder */}
                <div
                  className="h-48 flex items-center justify-center text-7xl"
                  style={{
                    background:
                      "linear-gradient(135deg, #FFF8F0 0%, #FFE5F3 100%)",
                  }}
                >
                  {product.emoji}
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-black text-base leading-tight">
                      {product.name}
                    </h3>
                    <span
                      className="text-xs font-black px-2 py-1 rounded-full whitespace-nowrap"
                      style={{
                        backgroundColor: product.badgeColor,
                        color: "#fff",
                      }}
                    >
                      {product.badge}
                    </span>
                  </div>
                  <p className="text-xs font-semibold opacity-60 mb-3">
                    {product.category}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-black text-lg">{product.price}</span>
                    <a
                      href={`${PLATFORM_BASE}/checkout/${BUSINESS_SLUG}/${product.productId}`}
                      className="crayon-btn px-4 py-2 text-sm"
                      style={{ backgroundColor: "#FF1F8F", color: "#fff" }}
                    >
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / VIBE SECTION */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="text-5xl mb-4">🌈</div>
        <h2
          className="text-4xl font-black mb-4"
          style={{ color: "#0D0D2B" }}
        >
          The Nailed by Q Vibe
        </h2>
        <p className="text-lg font-semibold opacity-70 leading-relaxed max-w-2xl mx-auto">
          We&apos;re not just nails — we&apos;re a whole mood. From your zodiac
          sign to your favorite holiday, from glow-in-the-dark nights to
          liquid dimensional art, every set is crafted so you can express
          exactly who you are. 💅
        </p>
        <div className="grid grid-cols-3 gap-6 mt-10">
          {[
            { icon: "💅", title: "Press & Go", desc: "Easy application, salon results" },
            { icon: "🔮", title: "Made for You", desc: "Custom sets that match your energy" },
            { icon: "📦", title: "Glue Included", desc: "Every set ships with nail glue" },
          ].map((item) => (
            <div
              key={item.title}
              className="crayon-card p-6 text-center"
              style={{ backgroundColor: "#fff" }}
            >
              <div className="text-4xl mb-2">{item.icon}</div>
              <h3 className="font-black text-sm mb-1">{item.title}</h3>
              <p className="text-xs opacity-60 font-semibold">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section
        className="py-14 px-4 text-center"
        style={{
          background: "linear-gradient(135deg, #0D0D2B 0%, #8B2BE2 100%)",
        }}
      >
        <h2
          className="text-4xl font-black text-white mb-4"
          style={{ textShadow: "2px 2px 0px #FF1F8F" }}
        >
          Ready to Level Up? 💅
        </h2>
        <p className="text-white opacity-80 font-bold text-lg mb-8">
          Shop all categories and find your perfect set today.
        </p>
        <Link
          href="/category/all-about-me"
          className="crayon-btn px-10 py-4 text-xl"
          style={{ backgroundColor: "#FF1F8F", color: "#fff" }}
        >
          👑 Shop Now
        </Link>
      </section>
    </div>
  );
}
