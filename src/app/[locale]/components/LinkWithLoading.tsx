"use client";

import Link from "next/link";
import { useEffect } from "react";
import { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
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

  const handleClick = (e: React.MouseEvent) => {
    if (pathname === href) {
      // Already on this page, do nothing
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
  const localePath = useLocalePath();
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
