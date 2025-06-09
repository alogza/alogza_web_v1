"use client";

import Link from "next/link";
import { useEffect } from "react";
import { LinkProps } from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useLocalePath } from "@/utils/localPath";

interface LinkWithLoadingProps extends LinkProps {
  className?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}

export default function LinkWithLoading({
  href,
  children,
  onClick,
  ...props
}: LinkWithLoadingProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const localePath = useLocalePath();

  const handleClick = (e: React.MouseEvent) => {
    // Parse the target href to get its pathname and search parameters
    const targetUrl = new URL(href as string, window.location.origin);
    const targetPathname = targetUrl.pathname.replace(/\/+$/, ""); // Remove trailing slash
    const targetSearchParams = targetUrl.searchParams;

    // Get current pathname and search parameters from hooks
    const currentPathname = pathname.replace(/\/+$/, ""); // Remove trailing slash
    const currentSearchParams = searchParams;

    // Check if the base path is the same and all query parameters match
    const isSamePath = currentPathname === targetPathname;
    let isSameSearchParams = true;
    if (isSamePath) {
      if (currentSearchParams.toString() !== targetSearchParams.toString()) {
        isSameSearchParams = false;
      }
    }

    if (isSamePath && isSameSearchParams) {
      // Already on this page with the same query params, do nothing
      e.preventDefault();
      return;
    }

    // Dispatch both event types for better compatibility
    window.dispatchEvent(new Event("navigationstart"));
    window.dispatchEvent(new Event("next:navigation-start"));

    // Call the original onClick if it exists
    if (onClick) {
      onClick(e);
    }
  };

  useEffect(() => {
    // When route changes, dispatch navigation end events
    const handleRouteComplete = () => {
      window.dispatchEvent(new Event("navigationend"));
      window.dispatchEvent(new Event("next:navigation-end"));
    };

    window.addEventListener("popstate", handleRouteComplete);
    return () => {
      window.removeEventListener("popstate", handleRouteComplete);
    };
  }, []);

  return (
    <Link href={localePath(href as string)} {...props} onClick={handleClick}>
      {children}
    </Link>
  );
}
