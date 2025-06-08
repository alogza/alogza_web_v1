"use client";

import { Suspense } from "react";
import LoadingOverlay from "./LoadingOverlay";

export default function SuspenseWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<LoadingOverlay />}>{children}</Suspense>;
}
