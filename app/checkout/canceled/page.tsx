import Link from "next/link";

export default function CheckoutCanceledPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div
        className="max-w-md w-full crayon-card p-8 text-center"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="text-7xl mb-4 wiggle-anim">😢</div>
        <h1
          className="text-3xl font-black mb-2"
          style={{ color: "#0D0D2B" }}
        >
          Checkout Canceled
        </h1>
        <p className="text-lg font-bold opacity-70 mb-6">
          No worries — your nails are still waiting for you! Come back
          whenever you&apos;re ready. 💅
        </p>

        <div
          className="rounded-xl p-4 mb-6"
          style={{ backgroundColor: "#FFF8F0", border: "2px solid #FFE500" }}
        >
          <p className="text-sm font-semibold">
            💡 <strong>Quick tip:</strong> All our sets include nail glue —
            no extra purchase needed!
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="crayon-btn px-6 py-3 text-center"
            style={{ backgroundColor: "#FF1F8F", color: "#fff" }}
          >
            💅 Back to Shop
          </Link>
          <Link
            href="/category/kits"
            className="crayon-btn px-6 py-3 text-center"
            style={{ backgroundColor: "#0D0D2B", color: "#FFE500" }}
          >
            🎁 Shop Kits
          </Link>
          <Link
            href="/category/bundles"
            className="crayon-btn px-6 py-3 text-center"
            style={{ backgroundColor: "#8B2BE2", color: "#fff" }}
          >
            💝 Shop Bundles
          </Link>
        </div>
      </div>
    </div>
  );
}
