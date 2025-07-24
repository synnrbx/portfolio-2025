"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import LoadingSpinner from "@/components/loading";

const UnsubscribeContent = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleUnsubscribe = async () => {
    if (!email) return;

    setStatus("loading");

    try {
      const response = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to unsubscribe");
      }

      setStatus("success");
    } catch (err) {
      console.error("Error unsubscribing:", err);
      setStatus("error");
    }
  };

  if (!email) {
    return (
      <div className="min-h-screen  items-center justify-center text-[4.9vw] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl flex ">
        <div className="xl:w-2/3 md:w-2/3 lg:w-2/3 sm:w-2/3 px-6 space-y-8 flex flex-col">
          <p>no email address provided.</p>
          <p>
            if you have problems unsubscribing, please contact me at{" "}
            <a href="mailto:hi@danielpetho.com">hi@danielpetho.com</a>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center text-[4.9vw] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl w-full">
      <div className="flex items-center gap-2">
        {status === "idle" && (
          <>
            <span>click here to</span>
            <button
              onClick={handleUnsubscribe}
              className="underline underline-offset-8 border-black hover:opacity-80"
            >
              unsubscribe
            </button>
          </>
        )}

        {status === "loading" && <LoadingSpinner />}

        {status === "success" && <span>done ✓</span>}

        {status === "error" && (
          <div className="w-full px-6 space-y-8 flex flex-col text-red-500 text-center items-center justify-center">
            <p>an error occurred while unsubscribing ⚠</p>
            <p>
              please contact me at{" "}
              <a
                href="mailto:hi@danielpetho.com"
                className="underline underline-offset-8"
              >
                hi@danielpetho.com
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default function UnsubscribePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-[4.9vw] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          <LoadingSpinner />
        </div>
      }
    >
      <UnsubscribeContent />
    </Suspense>
  );
}
