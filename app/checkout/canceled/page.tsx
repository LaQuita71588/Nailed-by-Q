import Link from "next/link";

export default function CheckoutCanceledPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 py-20"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      <div
        style={{
          maxWidth: "480px",
          width: "100%",
          backgroundColor: "#111111",
          border: "1px solid rgba(201,169,110,0.2)",
          padding: "56px 48px",
          textAlign: "center",
        }}
      >
        {/* Accent */}
        <div
          style={{
            color: "rgba(201,169,110,0.4)",
            fontSize: "2.5rem",
            marginBottom: "28px",
            lineHeight: 1,
          }}
        >
          ◇
        </div>

        <h1
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            color: "#F5F0EB",
            fontSize: "2rem",
            fontWeight: 700,
            marginBottom: "12px",
          }}
        >
          Checkout Canceled
        </h1>

        <p
          style={{
            color: "#9E9E9E",
            fontFamily: "var(--font-inter), 'Inter', sans-serif",
            fontSize: "0.9rem",
            lineHeight: 1.7,
            marginBottom: "36px",
          }}
        >
          No worries — your favorites are still waiting. Come back whenever
          you&apos;re ready.
        </p>

        <div
          style={{
            background: "rgba(201,169,110,0.05)",
            border: "1px solid rgba(201,169,110,0.12)",
            padding: "18px 20px",
            marginBottom: "32px",
            textAlign: "left",
          }}
        >
          <p
            style={{
              color: "#C9A96E",
              fontFamily: "var(--font-inter), 'Inter', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "6px",
            }}
          >
            A Note
          </p>
          <p
            style={{
              color: "#9E9E9E",
              fontFamily: "var(--font-inter), 'Inter', sans-serif",
              fontSize: "0.8rem",
              lineHeight: 1.6,
            }}
          >
            Nail glue is available as a separate add-on at checkout. Every
            set is crafted with precision — whenever you&apos;re ready.
          </p>
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", gap: "12px" }}
        >
          <Link href="/" className="btn-gold" style={{ textAlign: "center" }}>
            Return to Shop
          </Link>
          <Link
            href="/category/kits"
            className="btn-outline"
            style={{ textAlign: "center" }}
          >
            Browse Nail Kits
          </Link>
          <Link
            href="/category/bundles"
            className="btn-outline"
            style={{ textAlign: "center" }}
          >
            View Curated Bundles
          </Link>
        </div>
      </div>
    </div>
  );
}
