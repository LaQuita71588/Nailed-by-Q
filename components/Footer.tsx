"use client";

import Link from "next/link";

const shopLinks = [
  { name: "Zodiac Collection", href: "/category/zodiac" },
  { name: "Glow in the Dark", href: "/category/glow" },
  { name: "Liquid Dimensional", href: "/category/liquid-dimensional" },
  { name: "Occasions & Events", href: "/category/occasions" },
  { name: "It's All About Me", href: "/category/all-about-me" },
  { name: "Press Phones", href: "/category/press-phones" },
  { name: "Kits", href: "/category/kits" },
  { name: "Bundles", href: "/category/bundles" },
  { name: "Kiddie Collection", href: "/category/kiddie" },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0A0A0A",
        borderTop: "1px solid rgba(201,169,110,0.15)",
        marginTop: 0,
      }}
    >
      <div
        className="max-w-7xl mx-auto px-6"
        style={{ paddingTop: "80px", paddingBottom: "48px" }}
      >
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                color: "#C9A96E",
                fontSize: "1.4rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                marginBottom: "16px",
              }}
            >
              NAILED BY Q
            </h3>
            <p
              style={{
                color: "#9E9E9E",
                fontSize: "0.85rem",
                lineHeight: 1.8,
                marginBottom: "28px",
                fontFamily: "var(--font-inter), 'Inter', sans-serif",
              }}
            >
              Luxury press-on nails for the woman who demands more. Handcrafted
              collections spanning 6 sizes, 7 shapes, and infinite style — from
              editorial zodiac sets to fully custom bespoke designs.
            </p>

            {/* Social Links */}
            <div style={{ display: "flex", gap: "20px" }}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#9E9E9E",
                  fontFamily: "var(--font-inter), 'Inter', sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A96E")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#9E9E9E")}
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#9E9E9E",
                  fontFamily: "var(--font-inter), 'Inter', sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A96E")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#9E9E9E")}
                aria-label="TikTok"
              >
                TikTok
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-inter), 'Inter', sans-serif",
                color: "#F5F0EB",
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              Collections
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {shopLinks.map((link) => (
                <li key={link.href} style={{ marginBottom: "12px" }}>
                  <Link
                    href={link.href}
                    style={{
                      color: "#9E9E9E",
                      fontFamily: "var(--font-inter), 'Inter', sans-serif",
                      fontSize: "0.8rem",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#C9A96E")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#9E9E9E")
                    }
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info + Newsletter */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-inter), 'Inter', sans-serif",
                color: "#F5F0EB",
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              The Details
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 32px 0",
              }}
            >
              {[
                "Nail glue available as a separate add-on",
                "Fast, discreet shipping on all orders",
                "Glow accessories arrive in a keepsake bag",
                "Custom “All About Me” sets by request",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    color: "#9E9E9E",
                    fontFamily: "var(--font-inter), 'Inter', sans-serif",
                    fontSize: "0.8rem",
                    lineHeight: 1.6,
                    marginBottom: "10px",
                    paddingLeft: "14px",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      color: "#C9A96E",
                    }}
                  >
                    ·
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <h4
              style={{
                fontFamily: "var(--font-inter), 'Inter', sans-serif",
                color: "#F5F0EB",
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              Stay in the Loop
            </h4>
            <form style={{ display: "flex", gap: "0" }}>
              <input
                type="email"
                placeholder="Your email address"
                style={{
                  flex: 1,
                  backgroundColor: "#111111",
                  border: "1px solid rgba(201,169,110,0.25)",
                  borderRight: "none",
                  color: "#F5F0EB",
                  padding: "12px 16px",
                  fontFamily: "var(--font-inter), 'Inter', sans-serif",
                  fontSize: "0.75rem",
                  outline: "none",
                  minWidth: 0,
                }}
              />
              <button
                type="submit"
                className="btn-gold"
                style={{ padding: "12px 20px", fontSize: "0.65rem", flexShrink: 0 }}
              >
                Join
              </button>
            </form>

            <div style={{ marginTop: "20px" }}>
              <a
                href="mailto:team@onboarding-n975wwnz-1779306768780.madethis.app"
                style={{
                  color: "#9E9E9E",
                  fontFamily: "var(--font-inter), 'Inter', sans-serif",
                  fontSize: "0.75rem",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A96E")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#9E9E9E")}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="gold-divider"
          style={{ margin: "48px 0 28px" }}
        />

        {/* Copyright */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
          }}
        >
          <p
            style={{
              color: "#9E9E9E",
              fontFamily: "var(--font-inter), 'Inter', sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.08em",
            }}
          >
            © {new Date().getFullYear()} Nailed by Q. All rights reserved.
          </p>
          <p
            style={{
              color: "rgba(158,158,158,0.5)",
              fontFamily: "var(--font-inter), 'Inter', sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.08em",
            }}
          >
            Luxury Press-On Nail Boutique
          </p>
        </div>
      </div>
    </footer>
  );
}
