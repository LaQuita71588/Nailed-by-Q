"use client";

import Link from "next/link";
import { useState } from "react";

const categories = [
  { name: "Zodiac", href: "/category/zodiac", emoji: "♊" },
  { name: "Glow in the Dark", href: "/category/glow", emoji: "🌙" },
  { name: "Occasions & Events", href: "/category/occasions", emoji: "🎉" },
  { name: "Liquid Dimensional", href: "/category/liquid-dimensional", emoji: "💧" },
  { name: "It's All About Me", href: "/category/all-about-me", emoji: "👑" },
  { name: "Press Phones", href: "/category/press-phones", emoji: "📱" },
  { name: "Kits", href: "/category/kits", emoji: "🎁" },
  { name: "Add-Ons", href: "/category/add-ons", emoji: "✨" },
  { name: "Bundles", href: "/category/bundles", emoji: "💝" },
  { name: "Extended Sets", href: "/category/extended-sets", emoji: "💅" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        backgroundColor: "#FF1F8F",
        borderBottom: "3px solid #0D0D2B",
      }}
      className="sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-black text-white text-xl tracking-tight"
            style={{ textShadow: "2px 2px 0px #0D0D2B" }}
          >
            💅 Nailed by Q
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {categories.slice(0, 5).map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="text-white font-bold text-sm px-3 py-1 rounded-full hover:bg-white hover:text-pink-600 transition-colors"
              >
                {cat.name}
              </Link>
            ))}
            <div className="relative group">
              <button className="text-white font-bold text-sm px-3 py-1 rounded-full hover:bg-white hover:text-pink-600 transition-colors">
                More ▾
              </button>
              <div
                className="absolute right-0 mt-1 w-48 rounded-xl shadow-lg invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all"
                style={{
                  backgroundColor: "#FFF8F0",
                  border: "3px solid #0D0D2B",
                  boxShadow: "4px 4px 0px #0D0D2B",
                }}
              >
                {categories.slice(5).map((cat) => (
                  <Link
                    key={cat.href}
                    href={cat.href}
                    className="flex items-center gap-2 px-4 py-2 font-bold text-sm hover:bg-pink-100 first:rounded-t-lg last:rounded-b-lg transition-colors"
                    style={{ color: "#0D0D2B" }}
                  >
                    <span>{cat.emoji}</span>
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white font-black text-2xl p-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="lg:hidden border-t-2"
          style={{ borderColor: "#0D0D2B", backgroundColor: "#FF1F8F" }}
        >
          <div className="max-w-7xl mx-auto px-4 py-3 grid grid-cols-2 gap-2">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 text-white font-bold text-sm py-2 px-3 rounded-xl hover:bg-white hover:text-pink-600 transition-colors"
              >
                <span>{cat.emoji}</span>
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
