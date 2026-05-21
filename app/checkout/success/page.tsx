import { Suspense } from "react";
import SuccessContent from "./SuccessContent";

export default function CheckoutSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl float-anim">💅</div>
            <p className="text-xl font-black mt-4" style={{ color: "#FF1F8F" }}>
              Loading your order...
            </p>
          </div>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
