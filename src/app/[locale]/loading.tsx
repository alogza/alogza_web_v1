"use client";

import { useEffect, useState, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";

function SearchParamsWrapper({
  onRouteChange,
}: {
  onRouteChange: (pathname: string, searchParams: URLSearchParams) => void;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    onRouteChange(pathname, searchParams);
  }, [pathname, searchParams, onRouteChange]);

  return null;
}

export default function LoadingOverlay() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    window.addEventListener("next:navigation-start", handleStart);
    window.addEventListener("next:navigation-end", handleComplete);

    return () => {
      window.removeEventListener("next:navigation-start", handleStart);
      window.removeEventListener("next:navigation-end", handleComplete);
    };
  }, []);

  const handleRouteChange = () => {
    setLoading(false);
  };

  if (!loading) return null;

  return (
    <>
      <Suspense>
        <SearchParamsWrapper onRouteChange={handleRouteChange} />
      </Suspense>
      <div className="fixed inset-0 z-300 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-md">
        <div className="flex flex-col items-center space-y-6">
          <div className="relative h-24 w-24">
            <Image
              src="/labels/Logo_White.png"
              alt="Alogza Logo"
              width={96}
              height={96}
              className="h-full w-full object-contain"
              priority
            />
            <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-[#eccc68]/20 to-[#eccc68]/20 blur-xl" />
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 animate-bounce rounded-full bg-[#eccc68] [animation-delay:-0.3s]" />
            <div className="h-2 w-2 animate-bounce rounded-full bg-[#eccc68] [animation-delay:-0.15s]" />
            <div className="h-2 w-2 animate-bounce rounded-full bg-[#eccc68]" />
          </div>
        </div>
      </div>
    </>
  );
}
