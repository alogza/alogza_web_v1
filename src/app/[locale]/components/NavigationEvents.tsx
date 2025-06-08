"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function NavigationEvents({
  onRouteChange,
}: {
  onRouteChange?: (pathname: string, searchParams: URLSearchParams) => void;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (onRouteChange) {
      onRouteChange(pathname, searchParams);
    }
  }, [pathname, searchParams, onRouteChange]);

  return null;
}
