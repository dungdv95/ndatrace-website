import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev"],
  env: {
    NEXT_PUBLIC_BLOG_API:
      process.env.NEXT_PUBLIC_BLOG_API ?? "NEXT_PUBLIC_BLOG_API",
  },
  /* config options here */
};

export default nextConfig;
