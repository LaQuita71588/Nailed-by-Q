"use client";

import Link from "next/link";
import { useState } from "react";

const mainLinks = [
  { name: "Zodiac", href: "/category/zodiac" },
  { name: "Glow", href: "/category/glow" },
  { name: "Liquid Dimensional", href: "/category/liquid-dimensional" },
  { name: "Occasions", href: "/category/occasions" },
];

const moreLinks = [
  { name: "It's All About Me", href: "/category/all-about-me" },
  { name: "Press Phones", href: "/category/press-phones" },
  { name: "Kits", href: "/category/kits" },
  { name: "Add-Ons", href: "/category/add-ons" },
  { name: "Bundles", href: "/category/bundles" },
  { name: "Extended Sets", href: "/category/extended-sets" },
  { name: "Kiddie Collection", href: "/category/kiddie" },
];

const allLinks = [...mainLinks, ...moreLinks];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        backgroundColor: "rgba(10, 10, 10, 0.97)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(201, 169, 110, 0.18)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="flex items-center justify-between"
          style={{ height: "72px" }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', serif",
              color: "#C9A96E",
              fontSize: "1.2rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            NAILED BY Q
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: "#9E9E9E",
                  fontFamily: "var(--font-inter), 'Inter', sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#F5F0EB")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#9E9E9E")
                }
              >
                {link.name}
              </Link>
            ))}

            {/* Collections Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                style={{
                  color: "#9E9E9E",
                  fontFamily: "var(--font-inter), 'Inter', sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: 0,
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#F5F0EB")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#9E9E9E")
                }
              >
                Collections
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="currentColor"
                  style={{
                    transition: "transform 0.2s ease",
                    transform: dropdownOpen ? "rotate(180deg)" : "none",
                  }}
                >
                  <path d="M5 7L1 3h8L5 7z" />
                </svg>
              </button>

              {dropdownOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 16px)",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "220px",
                    backgroundColor: "#111111",
                    border: "1px solid rgba(201, 169, 110, 0.2)",
                    padding: "8px 0",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
                  }}
                >
                  {moreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setDropdownOpen(false)}
                      style={{
                        display: "block",
                        padding: "10px 20px",
                        color: "#9E9E9E",
                        fontFamily: "var(--font-inter), 'Inter', sans-serif",
                        fontSize: "0.72rem",
                        fontWeight: 500,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        textDecoration: "none",
                        transition: "color 0.2s ease, background 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#C9A96E";
                        e.currentTarget.style.background =
                          "rgba(201,169,110,0.05)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#9E9E9E";
                        e.currentTarget.style.background = "transparent";
                      }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/category/all-about-me"
            className="hidden lg:block btn-gold"
            style={{ padding: "10px 24px", fontSize: "0.65rem" }}
          >
            Shop Now
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex items-center justify-center"
            style={{
              color: "#C9A96E",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <line x1="17" y1="5" x2="5" y2="17" />
                <line x1="5" y1="5" x2="17" y2="17" />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <line x1="3" y1="6" x2="19" y2="6" />
                <line x1="3" y1="11" x2="19" y2="11" />
                <line x1="3" y1="16" x2="19" y2="16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: "#0F0F14",
            borderTop: "1px solid rgba(201,169,110,0.15)",
          }}
        >
          <div
            className="max-w-7xl mx-auto px-6 py-6"
            style={{ display: "flex", flexDirection: "column", gap: "2px" }}
          >
            {allLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  padding: "14px 0",
                  color: "#9E9E9E",
                  fontFamily: "var(--font-inter), 'Inter', sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(201,169,110,0.08)",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A96E")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#9E9E9E")}
              >
                {link.name}
              </Link>
            ))}
            <div style={{ paddingTop: "20px" }}>
              <Link
                href="/category/all-about-me"
                className="btn-gold"
                onClick={() => setMenuOpen(false)}
                style={{ display: "block", textAlign: "center", padding: "14px" }}
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
