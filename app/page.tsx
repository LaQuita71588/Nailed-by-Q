import Link from "next/link";

const heroParticles = [
  { size: 2, top: "88%", left: "7%", delay: "0s", duration: "9s" },
  { size: 3, top: "76%", left: "17%", delay: "-3s", duration: "11s" },
  { size: 1, top: "91%", left: "29%", delay: "-6s", duration: "7.5s" },
  { size: 2, top: "83%", left: "44%", delay: "-2s", duration: "13s" },
  { size: 4, top: "95%", left: "54%", delay: "-8s", duration: "9.5s" },
  { size: 2, top: "79%", left: "63%", delay: "-4s", duration: "11.5s" },
  { size: 1, top: "93%", left: "74%", delay: "-7s", duration: "8s" },
  { size: 3, top: "86%", left: "87%", delay: "-1s", duration: "14s" },
  { size: 2, top: "71%", left: "5%", delay: "-5s", duration: "10s" },
  { size: 1, top: "62%", left: "21%", delay: "-9s", duration: "7s" },
  { size: 2, top: "67%", left: "37%", delay: "-11s", duration: "10.5s" },
  { size: 3, top: "59%", left: "51%", delay: "-3.5s", duration: "15s" },
  { size: 1, top: "73%", left: "67%", delay: "-7.5s", duration: "8.5s" },
  { size: 2, top: "64%", left: "81%", delay: "-2.5s", duration: "12s" },
  { size: 4, top: "52%", left: "11%", delay: "-13s", duration: "9s" },
  { size: 2, top: "46%", left: "34%", delay: "-6.5s", duration: "12.5s" },
  { size: 1, top: "56%", left: "57%", delay: "-10s", duration: "8s" },
  { size: 3, top: "41%", left: "71%", delay: "-4.5s", duration: "10s" },
  { size: 2, top: "37%", left: "91%", delay: "-8.5s", duration: "13.5s" },
  { size: 1, top: "32%", left: "48%", delay: "-14s", duration: "9.5s" },
];

const mainCategories = [
  {
    name: "Zodiac",
    href: "/category/zodiac",
    symbol: "✦",
    desc: "All 12 signs — custom sets, duo packs, and limited-edition editions",
  },
  {
    name: "Glow in the Dark",
    href: "/category/glow",
    symbol: "○",
    desc: "Nails that illuminate the night — gems, crystals, and full sets",
  },
  {
    name: "Liquid Dimensional",
    href: "/category/liquid-dimensional",
    symbol: "◇",
    desc: "3D textures and mesmerizing finishes — wearable art",
  },
  {
    name: "Occasions & Events",
    href: "/category/occasions",
    symbol: "◆",
    desc: "From birthday glam to holiday luxury — perfect for every moment",
  },
  {
    name: "It's All About Me",
    href: "/category/all-about-me",
    symbol: "✦",
    desc: "Fully custom sets — your name, your vibe, your nails",
  },
  {
    name: "Kiddie Collection",
    href: "/category/kiddie",
    symbol: "★",
    desc: "Bright, safe, and age-appropriate for the little ones",
  },
];

const uspPoints = [
  {
    title: "6 Sizes",
    desc: "Precision-fitted to every nail bed — because your nails deserve a set that actually fits.",
  },
  {
    title: "7 Shapes",
    desc: "Almond, stiletto, coffin, square, oval, squoval, and ballerina.",
  },
  {
    title: "Custom Orders",
    desc: "Your vision, our craft. Fully bespoke sets built around your aesthetic.",
  },
  {
    title: "Premium Finishes",
    desc: "Chrome, liquid dimensional, glow, bling, and beyond — no compromises.",
  },
];

const featuredProducts = [
  {
    name: "Scorpio Season Set",
    category: "Zodiac Collection",
    price: "$18",
    productId: "prod_zodiac_scorpio",
    badge: "Best Seller",
  },
  {
    name: "Glow Glam Box",
    category: "Glow in the Dark",
    price: "$22",
    productId: "prod_glow_glam",
    badge: "New Arrival",
  },
  {
    name: "Birthday Babe Set",
    category: "Occasions",
    price: "$20",
    productId: "prod_birthday_babe",
    badge: "Fan Favorite",
  },
  {
    name: "Freestyle Nail Kit",
    category: "Kits",
    price: "$35",
    productId: "prod_freestyle_kit",
    badge: "Complete Kit",
  },
];

const PLATFORM_BASE = "https://nailed-by-q.madethis.app";
const BUSINESS_SLUG = "onboarding-n975wwnz-1779306768780";

export default function HomePage() {
  return (
    <div>
      {/* ─── HERO ─── */}
      <section
        className="relative overflow-hidden flex items-center justify-center"
        style={{ minHeight: "100vh" }}
      >
        {/* Hero Video Placeholder */}
        <div
          id="hero-video-placeholder"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, #0A0A0A 0%, #0F0F14 40%, #0A0A0A 100%)",
            zIndex: 0,
          }}
        >
          {/* Radial gold glow */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 75% 55% at 50% 55%, rgba(201,169,110,0.07) 0%, transparent 70%)",
            }}
          />

          {/* Floating gold particles */}
          {heroParticles.map((p, i) => (
            <div
              key={i}
              className="particle"
              style={{
                width: `${p.size}px`,
                height: `${p.size}px`,
                top: p.top,
                left: p.left,
                backgroundColor: i % 3 === 0 ? "#E8D5B7" : "#C9A96E",
                animationDelay: p.delay,
                animationDuration: p.duration,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div
          className="relative px-6 text-center"
          style={{ zIndex: 10, maxWidth: "860px", width: "100%" }}
        >
          {/* Eyebrow */}
          <span className="section-label" style={{ marginBottom: "28px" }}>
            Luxury Press-On Nails
          </span>

          {/* Gold line accent */}
          <div
            className="gold-divider"
            style={{ width: "48px", margin: "20px auto 36px" }}
          />

          {/* Main Headline */}
          <h1
            className="heading-display"
            style={{
              fontSize: "clamp(3.2rem, 9vw, 7.5rem)",
              marginBottom: "28px",
              letterSpacing: "0.04em",
            }}
          >
            NAILED BY Q
          </h1>

          {/* Tagline */}
          <p
            className="heading-sub"
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.45rem)",
              marginBottom: "48px",
              maxWidth: "580px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Luxury Press-On Nails for the Woman Who Demands More
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4 justify-center"
            style={{ marginBottom: "80px" }}
          >
            <Link href="/category/zodiac" className="btn-gold">
              Shop Collections
            </Link>
            <Link href="/category/all-about-me" className="btn-outline">
              Custom Nails
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute flex flex-col items-center gap-2"
          style={{
            bottom: "32px",
            left: "50%",
            transform: "translateX(-50%)",
            opacity: 0.5,
          }}
        >
          <span className="section-label" style={{ fontSize: "0.52rem" }}>
            Scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "44px",
              background: "linear-gradient(180deg, #C9A96E, transparent)",
            }}
          />
        </div>
      </section>

      {/* ─── ANNOUNCEMENT STRIP ─── */}
      <div
        style={{
          background: "#0F0F14",
          borderTop: "1px solid rgba(201,169,110,0.18)",
          borderBottom: "1px solid rgba(201,169,110,0.18)",
          padding: "13px 24px",
          overflow: "hidden",
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontFamily: "var(--font-inter), 'Inter', sans-serif",
            fontSize: "0.65rem",
            fontWeight: 500,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#9E9E9E",
          }}
        >
          Nail glue available as a separate add-on
          <span style={{ color: "rgba(201,169,110,0.5)", margin: "0 16px" }}>
            ·
          </span>
          Complimentary fast shipping on all orders
          <span style={{ color: "rgba(201,169,110,0.5)", margin: "0 16px" }}>
            ·
          </span>
          Glow accessories arrive in a keepsake bag
        </p>
      </div>

      {/* ─── FEATURED COLLECTIONS ─── */}
      <section
        style={{ backgroundColor: "#0A0A0A", padding: "100px 24px" }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {/* Section header */}
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <span className="section-label" style={{ marginBottom: "20px" }}>
              Shop the Collections
            </span>
            <h2
              className="heading-display"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                marginTop: "14px",
              }}
            >
              Every Set, A Statement
            </h2>
          </div>

          {/* Collections grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {mainCategories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="luxury-card"
                style={{
                  display: "block",
                  padding: "36px 28px",
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    color: "#C9A96E",
                    fontSize: "1.4rem",
                    marginBottom: "18px",
                    lineHeight: 1,
                  }}
                >
                  {cat.symbol}
                </div>
                <h3
                  style={{
                    fontFamily:
                      "var(--font-playfair), 'Playfair Display', serif",
                    color: "#F5F0EB",
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    marginBottom: "10px",
                    lineHeight: 1.3,
                  }}
                >
                  {cat.name}
                </h3>
                <p
                  style={{
                    color: "#9E9E9E",
                    fontSize: "0.78rem",
                    lineHeight: 1.65,
                    fontFamily: "var(--font-inter), 'Inter', sans-serif",
                  }}
                >
                  {cat.desc}
                </p>
                <div
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "#C9A96E",
                    fontSize: "0.65rem",
                    fontFamily: "var(--font-inter), 'Inter', sans-serif",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  Explore
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M2 7h10M8 3l4 4-4 4" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <Link href="/category/kits" className="btn-outline">
              View All Collections
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY NAILED BY Q ─── */}
      <section style={{ backgroundColor: "#0F0F14", padding: "100px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left — text */}
            <div>
              <span
                className="section-label"
                style={{ marginBottom: "20px" }}
              >
                The Standard
              </span>
              <h2
                className="heading-display"
                style={{
                  fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
                  marginTop: "14px",
                  marginBottom: "20px",
                }}
              >
                6 Sizes.
                <br />
                7 Shapes.
                <br />
                <span
                  style={{
                    color: "#C9A96E",
                    fontStyle: "italic",
                    fontWeight: 400,
                  }}
                >
                  Infinite Style.
                </span>
              </h2>
              <p
                className="heading-sub"
                style={{
                  fontSize: "1.1rem",
                  marginBottom: "40px",
                  color: "#9E9E9E",
                }}
              >
                Precision-designed for every nail bed. Because luxury should
                actually fit.
              </p>
              <Link href="/category/kits" className="btn-gold">
                Explore Nail Kits
              </Link>
            </div>

            {/* Right — USP grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {uspPoints.map((point) => (
                <div
                  key={point.title}
                  style={{
                    padding: "28px 24px",
                    background: "rgba(201,169,110,0.04)",
                    borderLeft: "2px solid rgba(201,169,110,0.35)",
                  }}
                >
                  <h3
                    style={{
                      fontFamily:
                        "var(--font-playfair), 'Playfair Display', serif",
                      color: "#C9A96E",
                      fontSize: "1rem",
                      fontWeight: 600,
                      marginBottom: "10px",
                    }}
                  >
                    {point.title}
                  </h3>
                  <p
                    style={{
                      color: "#9E9E9E",
                      fontSize: "0.78rem",
                      lineHeight: 1.65,
                      fontFamily: "var(--font-inter), 'Inter', sans-serif",
                    }}
                  >
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAN FAVORITES / BESTSELLERS ─── */}
      <section style={{ backgroundColor: "#0A0A0A", padding: "100px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {/* Section header */}
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <span className="section-label" style={{ marginBottom: "20px" }}>
              Our Best Sellers
            </span>
            <h2
              className="heading-display"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                marginTop: "14px",
              }}
            >
              Fan Favorites
            </h2>
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.productId}
                className="luxury-card overflow-hidden"
              >
                {/* Image placeholder */}
                <div
                  style={{
                    height: "210px",
                    background:
                      "linear-gradient(135deg, #1a1a1a 0%, #0f0f14 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderBottom: "1px solid rgba(201,169,110,0.08)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <span
                    style={{
                      color: "#C9A96E",
                      opacity: 0.22,
                      fontSize: "3rem",
                    }}
                  >
                    ◆
                  </span>
                </div>

                <div style={{ padding: "20px 22px 24px" }}>
                  {/* Badge + Title */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: "8px",
                      marginBottom: "8px",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily:
                          "var(--font-playfair), 'Playfair Display', serif",
                        color: "#F5F0EB",
                        fontSize: "0.97rem",
                        lineHeight: 1.3,
                        fontWeight: 600,
                      }}
                    >
                      {product.name}
                    </h3>
                    <span
                      style={{
                        background: "rgba(201,169,110,0.1)",
                        color: "#C9A96E",
                        border: "1px solid rgba(201,169,110,0.25)",
                        padding: "3px 8px",
                        fontSize: "0.58rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-inter), 'Inter', sans-serif",
                        fontWeight: 600,
                        flexShrink: 0,
                      }}
                    >
                      {product.badge}
                    </span>
                  </div>

                  <p
                    style={{
                      color: "#9E9E9E",
                      fontSize: "0.72rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      fontFamily: "var(--font-inter), 'Inter', sans-serif",
                      marginBottom: "18px",
                    }}
                  >
                    {product.category}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        fontFamily:
                          "var(--font-playfair), 'Playfair Display', serif",
                        color: "#C9A96E",
                        fontSize: "1.3rem",
                        fontWeight: 500,
                      }}
                    >
                      {product.price}
                    </span>
                    <a
                      href={`${PLATFORM_BASE}/checkout/${BUSINESS_SLUG}/${product.productId}`}
                      className="btn-gold"
                      style={{ padding: "10px 18px", fontSize: "0.62rem" }}
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE EXPERIENCE ─── */}
      <section
        style={{
          background:
            "linear-gradient(180deg, #0F0F14 0%, #0A0A0A 100%)",
          padding: "120px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "940px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span className="section-label" style={{ marginBottom: "20px" }}>
            The Nailed by Q Experience
          </span>

          <div
            className="gold-divider"
            style={{ width: "60px", margin: "20px auto 44px" }}
          />

          <h2
            className="heading-display"
            style={{
              fontSize: "clamp(2.2rem, 5.5vw, 4.2rem)",
              marginBottom: "32px",
            }}
          >
            Nails That Speak
            <br />
            Before You Do
          </h2>

          <p
            style={{
              color: "#9E9E9E",
              fontFamily: "var(--font-inter), 'Inter', sans-serif",
              fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)",
              lineHeight: 1.9,
              marginBottom: "64px",
              maxWidth: "700px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Every set is a statement. Every design is an intention. At Nailed
            by Q, we believe your nails should command the room — radiating
            confidence, sophistication, and the unmistakable energy of a woman
            who knows exactly who she is.
          </p>

          <div
            className="gold-divider"
            style={{ width: "100px", margin: "0 auto 64px" }}
          />

          {/* Feature trio */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                symbol: "✦",
                title: "Custom Orders",
                desc: "Your vision, our craft. Fully personalized sets built around your aesthetic — name, vibe, and energy.",
              },
              {
                symbol: "◆",
                title: "Premium Finishes",
                desc: "From chrome to liquid dimensional, every finish is executed with precision and artistry.",
              },
              {
                symbol: "◇",
                title: "Salon Quality",
                desc: "Press-on perfection with professional-grade results, on your schedule, on your terms.",
              },
            ].map((item) => (
              <div key={item.title} style={{ textAlign: "center" }}>
                <div
                  style={{
                    color: "#C9A96E",
                    fontSize: "1.8rem",
                    marginBottom: "20px",
                    lineHeight: 1,
                  }}
                >
                  {item.symbol}
                </div>
                <h3
                  style={{
                    fontFamily:
                      "var(--font-playfair), 'Playfair Display', serif",
                    color: "#F5F0EB",
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    marginBottom: "12px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: "#9E9E9E",
                    fontSize: "0.8rem",
                    lineHeight: 1.7,
                    fontFamily: "var(--font-inter), 'Inter', sans-serif",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ marginTop: "64px" }}>
            <Link href="/category/all-about-me" className="btn-gold">
              Design Your Custom Set
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
