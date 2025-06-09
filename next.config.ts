import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove any cookie dependencies for language switching
  i18n: undefined, // Disable legacy i18n to use new middleware approach
  images: {
    domains: ["localhost", "www.alogza.com"],
  },
};

export default nextConfig;
