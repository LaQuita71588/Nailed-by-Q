"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

interface OrderDetails {
  id?: string;
  status?: string;
  total?: string;
  items?: string[];
}

export default function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [order, setOrder] = useState<OrderDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!sessionId) {
      setLoading(false);
      return;
    }

    const fetchOrder = async () => {
      try {
        const res = await fetch(
          `/api/order?session_id=${encodeURIComponent(sessionId)}`
        );
        if (res.ok) {
          const data = await res.json();
          setOrder(data);
        }
      } catch {
        // Order fetch failed silently — we still show success
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [sessionId]);

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
        {loading ? (
          <div
            style={{
              color: "#C9A96E",
              fontSize: "2rem",
              opacity: 0.6,
            }}
          >
            ◆
          </div>
        ) : (
          <>
            {/* Accent */}
            <div
              style={{
                color: "#C9A96E",
                fontSize: "2.5rem",
                marginBottom: "28px",
                lineHeight: 1,
              }}
            >
              ✦
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
              Order Confirmed
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
              Your nails are on their way. Expect something exceptional.
            </p>

            {sessionId && (
              <div
                style={{
                  background: "rgba(201,169,110,0.06)",
                  border: "1px solid rgba(201,169,110,0.15)",
                  padding: "12px 20px",
                  marginBottom: "28px",
                }}
              >
                <p
                  style={{
                    color: "#9E9E9E",
                    fontFamily: "var(--font-inter), 'Inter', sans-serif",
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    marginBottom: "4px",
                  }}
                >
                  Order Reference
                </p>
                <p
                  style={{
                    color: "#C9A96E",
                    fontFamily: "var(--font-inter), 'Inter', sans-serif",
                    fontSize: "0.8rem",
                    letterSpacing: "0.1em",
                  }}
                >
                  #{sessionId.slice(-8).toUpperCase()}
                </p>
              </div>
            )}

            {order && (
              <div
                style={{
                  background: "rgba(201,169,110,0.04)",
                  border: "1px solid rgba(201,169,110,0.12)",
                  padding: "16px 20px",
                  marginBottom: "28px",
                  textAlign: "left",
                }}
              >
                {order.status && (
                  <p
                    style={{
                      color: "#F5F0EB",
                      fontFamily: "var(--font-inter), 'Inter', sans-serif",
                      fontSize: "0.78rem",
                    }}
                  >
                    Status:{" "}
                    <span style={{ color: "#C9A96E" }}>{order.status}</span>
                  </p>
                )}
                {order.total && (
                  <p
                    style={{
                      color: "#F5F0EB",
                      fontFamily: "var(--font-inter), 'Inter', sans-serif",
                      fontSize: "0.78rem",
                      marginTop: "6px",
                    }}
                  >
                    Total:{" "}
                    <span style={{ color: "#C9A96E" }}>{order.total}</span>
                  </p>
                )}
              </div>
            )}

            <p
              style={{
                color: "rgba(158,158,158,0.7)",
                fontFamily: "var(--font-inter), 'Inter', sans-serif",
                fontSize: "0.75rem",
                lineHeight: 1.6,
                marginBottom: "32px",
              }}
            >
              Nail glue is available as a separate add-on. Check your email
              for shipping details.
            </p>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <Link href="/" className="btn-gold" style={{ textAlign: "center" }}>
                Continue Shopping
              </Link>
              <Link
                href="/category/zodiac"
                className="btn-outline"
                style={{ textAlign: "center" }}
              >
                Explore Zodiac Collection
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
