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

    // Fetch order details from platform API
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
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div
        className="max-w-md w-full crayon-card p-8 text-center"
        style={{ backgroundColor: "#fff" }}
      >
        {loading ? (
          <div className="text-5xl float-anim">⏳</div>
        ) : (
          <>
            <div className="text-7xl mb-4 float-anim">💅</div>
            <h1
              className="text-3xl font-black mb-2"
              style={{ color: "#FF1F8F" }}
            >
              Order Confirmed!
            </h1>
            <p className="text-lg font-bold opacity-70 mb-6">
              You&apos;re about to be SNATCHED. Your nails are on their way! ✨
            </p>

            {sessionId && (
              <div
                className="rounded-xl p-3 mb-6 text-xs font-mono opacity-60"
                style={{ backgroundColor: "#F5E6FF" }}
              >
                Order #{sessionId.slice(-8).toUpperCase()}
              </div>
            )}

            {order && (
              <div
                className="rounded-xl p-4 mb-6 text-left text-sm"
                style={{ backgroundColor: "#FFF8F0", border: "2px solid #FFE500" }}
              >
                {order.status && (
                  <p className="font-bold">
                    Status:{" "}
                    <span style={{ color: "#FF1F8F" }}>{order.status}</span>
                  </p>
                )}
                {order.total && (
                  <p className="font-bold mt-1">Total: {order.total}</p>
                )}
              </div>
            )}

            <div className="space-y-3">
              <p className="text-sm font-semibold opacity-60">
                📦 All nail sets include nail glue. Check your email for
                tracking info!
              </p>
              <div className="flex flex-col gap-3 mt-4">
                <Link
                  href="/"
                  className="crayon-btn px-6 py-3 text-center"
                  style={{ backgroundColor: "#FF1F8F", color: "#fff" }}
                >
                  💅 Keep Shopping
                </Link>
                <Link
                  href="/category/zodiac"
                  className="crayon-btn px-6 py-3 text-center"
                  style={{ backgroundColor: "#8B2BE2", color: "#fff" }}
                >
                  ♊ Shop Zodiac
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
