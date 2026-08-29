// next.config.ts
import type { NextConfig } from "next";
import { withSerwist } from "@serwist/turbopack";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gvtqwyvxtliklpooxrgk.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },

  reactStrictMode: true,
};

export default withSerwist(nextConfig);