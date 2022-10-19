module.exports = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1Ijoicm9oaXQwMDkiLCJhIjoiY2w5ZWVxcXp1MGFpcDN2cHBndTZkbGYwMSJ9.xxZGAtwlSLAgA0ZvyheYvw",
  },
};
