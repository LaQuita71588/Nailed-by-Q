import Link from "next/link";

const PLATFORM_BASE = "https://nailed-by-q.madethis.app";
const BUSINESS_SLUG = "onboarding-n975wwnz-1779306768780";

const categoryData: Record<
  string,
  {
    name: string;
    emoji: string;
    description: string;
    bg: string;
    color: string;
    products: Array<{
      id: string;
      name: string;
      price: string;
      emoji: string;
      desc: string;
    }>;
  }
> = {
  zodiac: {
    name: "Zodiac",
    emoji: "♊",
    description:
      "Your sign, your energy, your nails. All 12 zodiac signs available — custom sets, duo packs, and limited-edition holiday editions.",
    bg: "#8B2BE2",
    color: "#fff",
    products: [
      { id: "zodiac-aries", name: "Aries Set", price: "$18", emoji: "♈", desc: "Bold & fierce — just like you" },
      { id: "zodiac-taurus", name: "Taurus Set", price: "$18", emoji: "♉", desc: "Earthy tones, luxe vibes" },
      { id: "zodiac-gemini", name: "Gemini Set", price: "$18", emoji: "♊", desc: "Two moods, one set" },
      { id: "zodiac-cancer", name: "Cancer Set", price: "$18", emoji: "♋", desc: "Soft, pearlescent, ethereal" },
      { id: "zodiac-leo", name: "Leo Set", price: "$18", emoji: "♌", desc: "Main character energy" },
      { id: "zodiac-virgo", name: "Virgo Set", price: "$18", emoji: "♍", desc: "Clean lines, perfect finish" },
      { id: "zodiac-libra", name: "Libra Set", price: "$18", emoji: "♎", desc: "Balanced beauty, pink perfection" },
      { id: "zodiac-scorpio", name: "Scorpio Set", price: "$18", emoji: "♏", desc: "Dark, mysterious, iconic" },
      { id: "zodiac-sagittarius", name: "Sagittarius Set", price: "$18", emoji: "♐", desc: "Adventurous & vibrant" },
      { id: "zodiac-capricorn", name: "Capricorn Set", price: "$18", emoji: "♑", desc: "Boss energy, clean finish" },
      { id: "zodiac-aquarius", name: "Aquarius Set", price: "$18", emoji: "♒", desc: "Electric blues, futuristic" },
      { id: "zodiac-pisces", name: "Pisces Set", price: "$18", emoji: "♓", desc: "Dreamy pastels, ocean vibes" },
    ],
  },
  glow: {
    name: "Glow in the Dark",
    emoji: "🌙",
    description:
      "Shine bright — even at night. Our glow-in-the-dark nail sets, gems, crystals, and decals will make you the star of the room. Glow accessories come packaged in a cute bag!",
    bg: "#00C8FF",
    color: "#0D0D2B",
    products: [
      { id: "glow-nails-set", name: "Glow Press-On Set", price: "$20", emoji: "🌙", desc: "Nails that light up the night" },
      { id: "glow-zodiac-pack", name: "Glow Zodiac Pack", price: "$22", emoji: "✨", desc: "All 12 signs in glow edition" },
      { id: "glow-gems-bag", name: "Glow Gems Bag", price: "$10", emoji: "💎", desc: "Glowing crystal gems" },
      { id: "glow-crystals-bag", name: "Glow Crystals Bag", price: "$10", emoji: "🔮", desc: "Chunky glow crystals" },
      { id: "glow-decals-bag", name: "Glow Decals Bag", price: "$8", emoji: "🌟", desc: "Nail decals that glow" },
      { id: "glow-clear-box", name: "Glow Clear Nail Box", price: "$25", emoji: "📦", desc: "Full clear glow nail collection" },
    ],
  },
  occasions: {
    name: "Occasions & Events",
    emoji: "🎉",
    description:
      "Every occasion deserves the perfect nails. From birthday bashes to holiday parties — we got you covered.",
    bg: "#FF6B1A",
    color: "#fff",
    products: [
      { id: "occ-birthday", name: "Birthday Babe Set", price: "$20", emoji: "🎂", desc: "It's your birthday, slay!" },
      { id: "occ-valentines", name: "Valentine's Day Set", price: "$20", emoji: "💕", desc: "Love in every nail" },
      { id: "occ-halloween", name: "Halloween Set", price: "$20", emoji: "🎃", desc: "Spooky season ready" },
      { id: "occ-christmas", name: "Christmas Set", price: "$20", emoji: "🎄", desc: "Holiday glam" },
      { id: "occ-nye", name: "New Year's Eve Set", price: "$22", emoji: "🥂", desc: "Ring in the new year right" },
      { id: "occ-graduation", name: "Graduation Set", price: "$20", emoji: "🎓", desc: "Celebrate your glow-up" },
    ],
  },
  "liquid-dimensional": {
    name: "Liquid Dimensional",
    emoji: "💧",
    description:
      "3D textures, mesmerizing finishes, and next-level drip. These aren't just nails — they're wearable art.",
    bg: "#FF1F8F",
    color: "#fff",
    products: [
      { id: "ld-chrome", name: "Chrome Liquid Set", price: "$24", emoji: "🪞", desc: "Mirror chrome finish" },
      { id: "ld-jelly", name: "Jelly Dimensional Set", price: "$22", emoji: "🍬", desc: "Jelly-clear 3D effect" },
      { id: "ld-aurora", name: "Aurora 3D Set", price: "$26", emoji: "🌌", desc: "Color-shifting aurora art" },
      { id: "ld-gel", name: "Gel Dimensional Set", price: "$22", emoji: "💧", desc: "Glossy gel-look finish" },
    ],
  },
  "all-about-me": {
    name: "It's All About Me",
    emoji: "👑",
    description:
      "Because sometimes it really IS all about you. Custom personalized nail sets built around your vibe, your name, your energy.",
    bg: "#FFE500",
    color: "#0D0D2B",
    products: [
      { id: "aame-custom", name: "Custom Name Set", price: "$28", emoji: "✍️", desc: "Your name, your nails" },
      { id: "aame-vibe", name: "Custom Vibe Set", price: "$30", emoji: "👑", desc: "Tell us your vibe, we build it" },
      { id: "aame-selfie", name: "Selfie Set", price: "$32", emoji: "📸", desc: "Based on your aesthetic" },
    ],
  },
  "press-phones": {
    name: "Press Phones",
    emoji: "📱",
    description:
      "Match your nails to your phone! Coordinated phone accessories to complete your look from tip to case.",
    bg: "#FF1F8F",
    color: "#fff",
    products: [
      { id: "pp-zodiac", name: "Zodiac Phone Case", price: "$22", emoji: "♊", desc: "All 12 signs available" },
      { id: "pp-holiday", name: "Holiday Phone Case", price: "$22", emoji: "🎉", desc: "Seasonal limited editions" },
      { id: "pp-glow", name: "Glow Phone Case", price: "$24", emoji: "🌙", desc: "Glows in the dark!" },
      { id: "pp-custom", name: "Custom Match Set", price: "$45", emoji: "👑", desc: "Nails + matching case" },
    ],
  },
  kits: {
    name: "Kits",
    emoji: "🎁",
    description:
      "Everything you need in one box. Our kits include nail glue and all the tools to get started. Perfect for gifting!",
    bg: "#0D0D2B",
    color: "#FFE500",
    products: [
      { id: "kit-freestyle", name: "Freestyle Kit", price: "$35", emoji: "🎨", desc: "Full set + tools + glue included" },
      { id: "kit-starter", name: "Starter Kit", price: "$30", emoji: "🌟", desc: "Perfect for beginners + glue" },
      { id: "kit-teaching", name: "Teaching Kit", price: "$40", emoji: "📚", desc: "Learn to apply like a pro + glue" },
      { id: "kit-gift", name: "Gift Kit", price: "$45", emoji: "🎁", desc: "Gift-wrapped kit with full set" },
    ],
  },
  "add-ons": {
    name: "Add-Ons",
    emoji: "✨",
    description:
      "Elevate your set with our accessories. Gems, glue, tabs, decals, and more to complete your look.",
    bg: "#7FFF00",
    color: "#0D0D2B",
    products: [
      { id: "addon-gems", name: "Gem Pack", price: "$8", emoji: "💎", desc: "Crystal nail gems" },
      { id: "addon-glue", name: "Nail Glue", price: "$5", emoji: "🔧", desc: "Extra-hold nail glue" },
      { id: "addon-tabs", name: "Adhesive Tabs", price: "$6", emoji: "🏷️", desc: "No-damage tabs" },
      { id: "addon-decals", name: "Nail Decals Pack", price: "$7", emoji: "🌸", desc: "Mix & match decals" },
      { id: "addon-file", name: "Nail File Set", price: "$4", emoji: "💅", desc: "Shape & prep your nails" },
    ],
  },
  bundles: {
    name: "Bundles",
    emoji: "💝",
    description:
      "Save more, slay more. Our curated bundles combine your favorites at an unbeatable price.",
    bg: "#8B2BE2",
    color: "#fff",
    products: [
      { id: "bundle-trio", name: "Trio Bundle", price: "$48", emoji: "💝", desc: "Any 3 sets for less" },
      { id: "bundle-season", name: "Season Bundle", price: "$65", emoji: "🌈", desc: "4 seasonal sets" },
      { id: "bundle-zodiac-all", name: "All Zodiac Bundle", price: "$180", emoji: "✨", desc: "All 12 zodiac signs" },
      { id: "bundle-bff", name: "BFF Bundle", price: "$30", emoji: "👯", desc: "Two matching sets" },
    ],
  },
  "extended-sets": {
    name: "Extended Sets",
    emoji: "💅",
    description:
      "For the queens with longer nails — our XL and XXL sets are sized for extra length and extra drama.",
    bg: "#FF6B1A",
    color: "#fff",
    products: [
      { id: "ext-xl-classic", name: "XL Classic Set", price: "$22", emoji: "💅", desc: "Extended length, same great style" },
      { id: "ext-xxl-glam", name: "XXL Glam Set", price: "$26", emoji: "👸", desc: "Extra long, extra fabulous" },
      { id: "ext-xl-zodiac", name: "XL Zodiac Set", price: "$24", emoji: "♊", desc: "All signs in extended length" },
      { id: "ext-xxl-glow", name: "XXL Glow Set", price: "$28", emoji: "🌙", desc: "XL glow-in-the-dark set" },
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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h1 className="text-3xl font-black mb-4">Category Not Found</h1>
          <Link
            href="/"
            className="crayon-btn px-6 py-3"
            style={{ backgroundColor: "#FF1F8F", color: "#fff" }}
          >
            Back Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Category Header */}
      <section
        className="py-14 px-4 text-center"
        style={{ backgroundColor: cat.bg, color: cat.color }}
      >
        <div className="text-5xl mb-3">{cat.emoji}</div>
        <h1
          className="text-4xl md:text-5xl font-black mb-3"
          style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.2)" }}
        >
          {cat.name}
        </h1>
        <p className="text-base font-semibold max-w-xl mx-auto opacity-90">
          {cat.description}
        </p>
        <p
          className="mt-3 text-sm font-black opacity-80"
          style={{ color: cat.color }}
        >
          💅 All nail sets include nail glue!
        </p>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cat.products.map((product) => (
            <div
              key={product.id}
              className="crayon-card overflow-hidden"
              style={{ backgroundColor: "#fff" }}
            >
              <div
                className="h-44 flex items-center justify-center text-6xl"
                style={{
                  background: `linear-gradient(135deg, ${cat.bg}22 0%, ${cat.bg}44 100%)`,
                }}
              >
                {product.emoji}
              </div>
              <div className="p-4">
                <h3 className="font-black text-base mb-1">{product.name}</h3>
                <p className="text-xs font-semibold opacity-60 mb-3">
                  {product.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-black text-xl">{product.price}</span>
                  <a
                    href={`${PLATFORM_BASE}/checkout/${BUSINESS_SLUG}/${product.id}`}
                    className="crayon-btn px-4 py-2 text-sm"
                    style={{ backgroundColor: cat.bg, color: cat.color }}
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Back link */}
      <div className="text-center py-8">
        <Link
          href="/"
          className="crayon-btn px-6 py-3 inline-block"
          style={{ backgroundColor: "#0D0D2B", color: "#FFE500" }}
        >
          ← Back to All Categories
        </Link>
      </div>
    </div>
  );
}
