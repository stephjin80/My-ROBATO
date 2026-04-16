import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about",    destination: "/about-robato",     permanent: true },
      { source: "/programs", destination: "/inside-my-robato", permanent: true },
    ];
  },
};

export default nextConfig;
