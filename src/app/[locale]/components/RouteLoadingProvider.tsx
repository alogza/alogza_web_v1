"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { SuspenseLayout } from "./SuspenseLayout";

export default function RouteLoadingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  // Prefetch routes on hover
  useEffect(() => {
    const prefetchRoute = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      if (
        link?.href &&
        !link.href.startsWith("mailto:") &&
        !link.href.startsWith("tel:") &&
        !link.href.startsWith("#") &&
        !link.href.includes("calendly.com")
      ) {
        router.prefetch(link.href);
      }
    };

    document.addEventListener("mouseover", prefetchRoute);
    return () => {
      document.removeEventListener("mouseover", prefetchRoute);
    };
  }, [router]);

  return (
    <SuspenseLayout>
      {children}
    </SuspenseLayout>
  );
}
