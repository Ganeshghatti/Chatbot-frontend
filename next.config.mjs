/** @type {import('next').NextConfig} */
const nextConfig = {
  // This site is no longer active, so keep every page out of search results.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
