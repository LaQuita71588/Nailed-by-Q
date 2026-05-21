import Link from "next/link";

const PLATFORM_BASE = "https://nailed-by-q.madethis.app";
const BUSINESS_SLUG = "onboarding-n975wwnz-1779306768780";

const categoryData: Record<
  string,
  {
    name: string;
    description: string;
    products: Array<{
      id: string;
      name: string;
      price: string;
      desc: string;
    }>;
  }
> = {
  zodiac: {
    name: "Zodiac Collection",
    description:
      "Your sign, your energy, your nails. All 12 zodiac signs — custom sets, duo packs, and limited-edition editions crafted with intention.",
    products: [
      { id: "zodiac-aries", name: "Aries Set", price: "$18", desc: "Bold & fierce — just like you" },
      { id: "zodiac-taurus", name: "Taurus Set", price: "$18", desc: "Earthy tones, luxe finishes" },
      { id: "zodiac-gemini", name: "Gemini Set", price: "$18", desc: "Two moods, one impeccable set" },
      { id: "zodiac-cancer", name: "Cancer Set", price: "$18", desc: "Soft, pearlescent, ethereal" },
      { id: "zodiac-leo", name: "Leo Set", price: "$18", desc: "Main character energy, always" },
      { id: "zodiac-virgo", name: "Virgo Set", price: "$18", desc: "Clean lines, perfect finish" },
      { id: "zodiac-libra", name: "Libra Set", price: "$18", desc: "Balanced beauty, rose perfection" },
      { id: "zodiac-scorpio", name: "Scorpio Set", price: "$18", desc: "Dark, mysterious, iconic" },
      { id: "zodiac-sagittarius", name: "Sagittarius Set", price: "$18", desc: "Adventurous spirit, vibrant art" },
      { id: "zodiac-capricorn", name: "Capricorn Set", price: "$18", desc: "Boss energy, clean editorial finish" },
      { id: "zodiac-aquarius", name: "Aquarius Set", price: "$18", desc: "Electric blues, futuristic edge" },
      { id: "zodiac-pisces", name: "Pisces Set", price: "$18", desc: "Dreamy pastels, ocean-inspired" },
    ],
  },
  glow: {
    name: "Glow in the Dark",
    description:
      "Shine bright — even at night. Our glow-in-the-dark nail sets, gems, crystals, and decals will make you the star of every room. Glow accessories are packaged in a keepsake bag.",
    products: [
      { id: "glow-nails-set", name: "Glow Press-On Set", price: "$20", desc: "Nails that illuminate the night" },
      { id: "glow-zodiac-pack", name: "Glow Zodiac Pack", price: "$22", desc: "All 12 signs in glow edition" },
      { id: "glow-gems-bag", name: "Glow Gems Bag", price: "$10", desc: "Luminous crystal gems — keepsake bag" },
      { id: "glow-crystals-bag", name: "Glow Crystals Bag", price: "$10", desc: "Chunky glow crystals — keepsake bag" },
      { id: "glow-decals-bag", name: "Glow Decals Bag", price: "$8", desc: "Nail decals that glow — keepsake bag" },
      { id: "glow-clear-box", name: "Glow Clear Nail Box", price: "$25", desc: "The full luminous collection" },
    ],
  },
  occasions: {
    name: "Occasions & Events",
    description:
      "Every occasion deserves the perfect set. From birthday elegance to holiday luxury — curated collections for every milestone.",
    products: [
      { id: "occ-birthday", name: "Birthday Babe Set", price: "$20", desc: "It's your birthday — make it iconic" },
      { id: "occ-valentines", name: "Valentine's Day Set", price: "$20", desc: "Love in every detail" },
      { id: "occ-halloween", name: "Halloween Set", price: "$20", desc: "Dark glamour for spooky season" },
      { id: "occ-christmas", name: "Christmas Set", price: "$20", desc: "Holiday glam, elevated" },
      { id: "occ-nye", name: "New Year's Eve Set", price: "$22", desc: "Ring in the new year in style" },
      { id: "occ-graduation", name: "Graduation Set", price: "$20", desc: "Celebrate your glow-up" },
    ],
  },
  "liquid-dimensional": {
    name: "Liquid Dimensional",
    description:
      "3D textures, mesmerizing finishes, and next-level artistry. These aren't just nails — they're wearable sculpture.",
    products: [
      { id: "ld-chrome", name: "Chrome Liquid Set", price: "$24", desc: "Mirror chrome with dimensional depth" },
      { id: "ld-jelly", name: "Jelly Dimensional Set", price: "$22", desc: "Translucent jelly-clear 3D effect" },
      { id: "ld-aurora", name: "Aurora 3D Set", price: "$26", desc: "Color-shifting aurora artistry" },
      { id: "ld-gel", name: "Gel Dimensional Set", price: "$22", desc: "Glossy gel-look sculpted finish" },
    ],
  },
  "all-about-me": {
    name: "It's All About Me",
    description:
      "Because sometimes it really is all about you. Fully custom, personalized nail sets crafted around your vision, your name, your energy.",
    products: [
      { id: "aame-custom", name: "Custom Name Set", price: "$28", desc: "Your name, your nails — one of a kind" },
      { id: "aame-vibe", name: "Custom Vibe Set", price: "$30", desc: "Describe your aesthetic — we build it" },
      { id: "aame-selfie", name: "Selfie Set", price: "$32", desc: "Designed around your personal aesthetic" },
    ],
  },
  "press-phones": {
    name: "Press Phones",
    description:
      "The ultimate coordination — match your nails to your phone. Curated accessories to complete your look from tip to case.",
    products: [
      { id: "pp-zodiac", name: "Zodiac Phone Case", price: "$22", desc: "All 12 signs available" },
      { id: "pp-holiday", name: "Holiday Phone Case", price: "$22", desc: "Seasonal limited editions" },
      { id: "pp-glow", name: "Glow Phone Case", price: "$24", desc: "Luminous glow-in-the-dark" },
      { id: "pp-custom", name: "Custom Match Set", price: "$45", desc: "Nails + perfectly matched case" },
    ],
  },
  kits: {
    name: "Nail Kits",
    description:
      "Everything you need in one refined box. Curated kits with all the tools to get started — perfect for gifting or elevating your routine.",
    products: [
      { id: "kit-freestyle", name: "Freestyle Kit", price: "$35", desc: "Full set + tools — nail glue add-on available" },
      { id: "kit-starter", name: "Starter Kit", price: "$30", desc: "Perfect for beginners — nail glue add-on available" },
      { id: "kit-teaching", name: "Teaching Kit", price: "$40", desc: "Apply like a professional — nail glue add-on available" },
      { id: "kit-gift", name: "Gift Kit", price: "$45", desc: "Gift-wrapped with full set — curated presentation" },
    ],
  },
  "add-ons": {
    name: "Add-Ons & Accessories",
    description:
      "Elevate your set with our curated accessories. Gems, nail glue, tabs, decals, and more to complete your look.",
    products: [
      { id: "addon-gems", name: "Gem Pack", price: "$8", desc: "Crystal nail gems" },
      { id: "addon-glue", name: "Nail Glue", price: "$5", desc: "Professional-strength nail glue" },
      { id: "addon-tabs", name: "Adhesive Tabs", price: "$6", desc: "Damage-free adhesive tabs" },
      { id: "addon-decals", name: "Nail Decals Pack", price: "$7", desc: "Mix & match designer decals" },
      { id: "addon-file", name: "Nail File Set", price: "$4", desc: "Shape & prep your nails with precision" },
    ],
  },
  bundles: {
    name: "Curated Bundles",
    description:
      "Save more, slay more. Thoughtfully curated bundles that combine your favorites at an unbeatable investment.",
    products: [
      { id: "bundle-trio", name: "Trio Bundle", price: "$48", desc: "Any 3 sets — curated or your choice" },
      { id: "bundle-season", name: "Season Bundle", price: "$65", desc: "Four seasonal sets, one price" },
      { id: "bundle-zodiac-all", name: "All Zodiac Bundle", price: "$180", desc: "The complete 12-sign collection" },
      { id: "bundle-bff", name: "Duo Bundle", price: "$30", desc: "Two perfectly matched sets" },
    ],
  },
  "extended-sets": {
    name: "Extended Sets",
    description:
      "For the woman who commands extra length — our XL and XXL sets are designed for maximum drama and uncompromising style.",
    products: [
      { id: "ext-xl-classic", name: "XL Classic Set", price: "$22", desc: "Extended length, signature style" },
      { id: "ext-xxl-glam", name: "XXL Glam Set", price: "$26", desc: "Extra long, extra impactful" },
      { id: "ext-xl-zodiac", name: "XL Zodiac Set", price: "$24", desc: "All signs in extended length" },
      { id: "ext-xxl-glow", name: "XXL Glow Set", price: "$28", desc: "XL glow-in-the-dark collection" },
    ],
  },
  kiddie: {
    name: "Kiddie Collection",
    description:
      "Fun, bright, and safe for little hands. Our age-appropriate collection is designed with the little ones in mind — vibrant colors, playful designs, and safe materials.",
    products: [
      { id: "kiddie-unicorn", name: "Unicorn Dreams Set", price: "$12", desc: "Magical pastels for little queens" },
      { id: "kiddie-rainbow", name: "Rainbow Pop Set", price: "$12", desc: "Every color of the rainbow" },
      { id: "kiddie-princess", name: "Princess Glam Set", price: "$12", desc: "For your little royal" },
      { id: "kiddie-butterfly", name: "Butterfly Garden Set", price: "$12", desc: "Flutter & shine" },
      { id: "kiddie-mermaid", name: "Mermaid Dreams Set", price: "$14", desc: "Under the sea magic" },
      { id: "kiddie-stars", name: "Starlight Set", price: "$12", desc: "Sparkle like a star" },
    ],
  },
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(categoryData).map((slug) => ({ slug }));
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const cat = categoryData[slug];

  if (!cat) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#0A0A0A" }}
      >
        <div style={{ textAlign: "center", padding: "40px" }}>
          <div
            className="gold-divider"
            style={{ width: "60px", margin: "0 auto 40px" }}
          />
          <h1
            className="heading-display"
            style={{ fontSize: "2.5rem", marginBottom: "16px" }}
          >
            Collection Not Found
          </h1>
          <p
            style={{
              color: "#9E9E9E",
              fontFamily: "var(--font-inter), 'Inter', sans-serif",
              marginBottom: "36px",
            }}
          >
            This collection doesn&apos;t exist yet.
          </p>
          <Link href="/" className="btn-gold">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const isKiddie = slug === "kiddie";
  const isGlow = slug === "glow";
  const isLiquid = slug === "liquid-dimensional";
  const isZodiac = slug === "zodiac";

  /* ─── KIDDIE PAGE ─── */
  if (isKiddie) {
    return (
      <div style={{ backgroundColor: "#fff" }}>
        {/* Kiddie Header */}
        <section
          style={{
            background:
              "linear-gradient(135deg, #FF69B4 0%, #FF9BE8 40%, #FFB347 70%, #FFD700 100%)",
            padding: "80px 24px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "3.5rem", marginBottom: "16px" }}>🌈</div>
          <h1
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 800,
              color: "#fff",
              marginBottom: "16px",
              textShadow: "2px 3px 0 rgba(0,0,0,0.12)",
            }}
          >
            Kiddie Collection
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.95)",
              fontSize: "1.05rem",
              maxWidth: "520px",
              margin: "0 auto 16px",
              fontFamily: "var(--font-inter), 'Inter', sans-serif",
              fontWeight: 500,
              lineHeight: 1.6,
            }}
          >
            {cat.description}
          </p>
          <p
            style={{
              color: "#fff",
              fontSize: "0.85rem",
              fontWeight: 700,
              fontFamily: "var(--font-inter), 'Inter', sans-serif",
              letterSpacing: "0.05em",
            }}
          >
            ✨ Safe, fun, and sized for little hands!
          </p>
        </section>

        {/* Kiddie Products */}
        <section
          style={{
            background:
              "linear-gradient(180deg, #FFF0F8 0%, #FFF8FF 100%)",
            padding: "64px 24px",
          }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.products.map((product) => (
                <div key={product.id} className="kiddie-card overflow-hidden">
                  <div
                    style={{
                      height: "180px",
                      background:
                        "linear-gradient(135deg, #FFE5F3 0%, #FFF0FF 50%, #FFF5E0 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "4rem",
                    }}
                  >
                    ✨
                  </div>
                  <div style={{ padding: "20px 24px 24px" }}>
                    <h3
                      style={{
                        fontFamily:
                          "var(--font-playfair), 'Playfair Display', serif",
                        color: "#1a1a1a",
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        marginBottom: "6px",
                      }}
                    >
                      {product.name}
                    </h3>
                    <p
                      style={{
                        color: "#888",
                        fontSize: "0.8rem",
                        marginBottom: "18px",
                        fontFamily: "var(--font-inter), 'Inter', sans-serif",
                      }}
                    >
                      {product.desc}
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
                          color: "#FF69B4",
                          fontSize: "1.4rem",
                          fontWeight: 600,
                        }}
                      >
                        {product.price}
                      </span>
                      <a
                        href={`${PLATFORM_BASE}/checkout/${BUSINESS_SLUG}/${product.id}`}
                        className="kiddie-btn"
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

        {/* Back Link */}
        <div
          style={{
            textAlign: "center",
            padding: "48px 24px",
            background: "#FFF0F8",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#FF69B4",
              fontFamily: "var(--font-inter), 'Inter', sans-serif",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            ← Back to Main Shop
          </Link>
        </div>
      </div>
    );
  }

  /* ─── STANDARD DARK LUXURY PAGE ─── */

  // Determine accent colors per category
  const accentColor = isGlow ? "#8B5CF6" : isZodiac ? "#C9A96E" : "#C9A96E";
  const headerBg = isGlow
    ? "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(139,92,246,0.18) 0%, transparent 70%), #0A0A0A"
    : isLiquid
    ? "linear-gradient(135deg, #0A0A0A 0%, #0F0F14 50%, #0A0A0A 100%)"
    : isZodiac
    ? "linear-gradient(135deg, #0A0A0A 0%, #12100e 50%, #0A0A0A 100%)"
    : "#0F0F14";

  return (
    <div style={{ backgroundColor: "#0A0A0A" }}>
      {/* Category Header */}
      <section
        style={{
          background: headerBg,
          padding: "100px 24px 80px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid rgba(201,169,110,0.12)",
        }}
      >
        {/* Glow radial for glow page */}
        {isGlow && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(139,92,246,0.25) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
        )}

        {/* Shimmer overlay for liquid-dimensional */}
        {isLiquid && (
          <div
            className="shimmer-card-overlay"
            style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
          />
        )}

        <div style={{ position: "relative", zIndex: 1 }}>
          <span
            className={`section-label${isGlow ? " glow-text" : ""}`}
            style={{
              marginBottom: "20px",
              color: accentColor,
            }}
          >
            Nailed by Q
          </span>

          <h1
            className={`heading-display${isGlow ? " glow-text" : isLiquid ? " shimmer-text" : ""}`}
            style={{
              fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
              marginTop: "14px",
              marginBottom: "24px",
            }}
          >
            {cat.name}
          </h1>

          <p
            style={{
              color: "#9E9E9E",
              fontFamily: "var(--font-inter), 'Inter', sans-serif",
              fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
              lineHeight: 1.8,
              maxWidth: "600px",
              margin: "0 auto 28px",
            }}
          >
            {cat.description}
          </p>

          {slug === "kits" || slug === "add-ons" ? (
            <p
              style={{
                color: "rgba(201,169,110,0.8)",
                fontFamily: "var(--font-inter), 'Inter', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Nail glue available as a separate add-on
            </p>
          ) : slug === "glow" ? (
            <p
              style={{
                color: "rgba(139,92,246,0.8)",
                fontFamily: "var(--font-inter), 'Inter', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Glow accessories packaged in a keepsake bag
            </p>
          ) : null}
        </div>
      </section>

      {/* Products Grid */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cat.products.map((product) => (
              <div
                key={product.id}
                className={`luxury-card overflow-hidden${isGlow ? " glow-card" : ""}`}
                style={{
                  position: "relative",
                }}
              >
                {/* Product image area */}
                <div
                  style={{
                    height: "190px",
                    background: isGlow
                      ? "linear-gradient(135deg, #0d0d1a 0%, #0a0a14 100%)"
                      : isLiquid
                      ? "linear-gradient(135deg, #0f0f14 0%, #1a1a2e 50%, #0f0f14 100%)"
                      : isZodiac
                      ? "linear-gradient(135deg, #12100e 0%, #1a1508 100%)"
                      : "linear-gradient(135deg, #1a1a1a 0%, #0f0f14 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderBottom: `1px solid rgba(${isGlow ? "139,92,246" : "201,169,110"},0.1)`,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Shimmer layer for liquid-dimensional */}
                  {isLiquid && (
                    <div
                      className="shimmer-card-overlay"
                      style={{ position: "absolute", inset: 0, zIndex: 1 }}
                    />
                  )}
                  <span
                    style={{
                      color: isGlow ? "#8B5CF6" : "#C9A96E",
                      opacity: 0.2,
                      fontSize: "2.5rem",
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    {isGlow ? "○" : isLiquid ? "◇" : "◆"}
                  </span>
                </div>

                {/* Product info */}
                <div style={{ padding: "18px 20px 22px" }}>
                  <h3
                    style={{
                      fontFamily:
                        "var(--font-playfair), 'Playfair Display', serif",
                      color: "#F5F0EB",
                      fontSize: "0.97rem",
                      fontWeight: 600,
                      marginBottom: "6px",
                      lineHeight: 1.3,
                    }}
                  >
                    {product.name}
                  </h3>
                  <p
                    style={{
                      color: "#9E9E9E",
                      fontSize: "0.75rem",
                      lineHeight: 1.6,
                      fontFamily: "var(--font-inter), 'Inter', sans-serif",
                      marginBottom: "18px",
                    }}
                  >
                    {product.desc}
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
                        color: accentColor,
                        fontSize: "1.25rem",
                        fontWeight: 500,
                      }}
                    >
                      {product.price}
                    </span>
                    <a
                      href={`${PLATFORM_BASE}/checkout/${BUSINESS_SLUG}/${product.id}`}
                      className={isGlow ? "btn-outline" : "btn-gold"}
                      style={{
                        padding: "9px 18px",
                        fontSize: "0.6rem",
                        ...(isGlow
                          ? {
                              borderColor: "#8B5CF6",
                              color: "#8B5CF6",
                            }
                          : {}),
                      }}
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

      {/* Back Link */}
      <div
        style={{
          textAlign: "center",
          paddingBottom: "80px",
          paddingTop: "0",
        }}
      >
        <Link href="/" className="btn-ghost">
          ← Back to Collections
        </Link>
      </div>
    </div>
  );
}
