"use client";

import { Suspense, useState, useEffect, useRef } from "react";
import { NavigationEvents } from "./NavigationEvents";
import LoadingOverlay from "../loading";
import { usePathname, useSearchParams } from "next/navigation";

export function SuspenseLayout({
  children,
  onRouteChange,
}: {
  children: React.ReactNode;
  onRouteChange?: (pathname: string, searchParams: URLSearchParams) => void;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const loadingTimeout = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Clear any existing timeout
    if (loadingTimeout.current) {
      clearTimeout(loadingTimeout.current);
    }

    // Start a new timeout to show loading after a short delay (e.g., 100ms)
    // This prevents a flash of loader for very fast navigations
    loadingTimeout.current = setTimeout(() => {
      setIsLoading(true);
    }, 100);

    // Cleanup function: This runs when the component unmounts or before the effect runs again.
    // It will hide the loader once the new content is rendered.
    return () => {
      if (loadingTimeout.current) {
        clearTimeout(loadingTimeout.current);
      }
      setIsLoading(false);
    };
  }, [pathname, searchParams]); // Re-run effect whenever pathname or searchParams change

  return (
    <>
      {/* This Suspense is for initial data fetching. Our manual loader handles routing transitions. */}
      <Suspense fallback={<LoadingOverlay />}>
        <NavigationEvents onRouteChange={onRouteChange} />
        {children}
      </Suspense>
      {isLoading && <LoadingOverlay />}
    </>
  );
}
