import type { NextConfig } from "next";
import {withIntlayer} from "next-intlayer/server";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.prismic.io"], // ✅ Allow images from Prismic
  },
};

export default withIntlayer(nextConfig);
