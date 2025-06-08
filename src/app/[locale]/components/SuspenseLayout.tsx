"use client";

import { Suspense } from "react";
import { NavigationEvents } from "./NavigationEvents";
import LoadingOverlay from "../loading";

export function SuspenseLayout({
  children,
  onRouteChange,
}: {
  children: React.ReactNode;
  onRouteChange?: (pathname: string, searchParams: URLSearchParams) => void;
}) {
  return (
    <>
      <Suspense fallback={<LoadingOverlay />}>
        <NavigationEvents onRouteChange={onRouteChange} />
        {children}
      </Suspense>
    </>
  );
}
