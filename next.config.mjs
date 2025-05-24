/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  distDir: process.env.DIST_DIR || '.next',
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config) {
    // Custom Webpack rules for component tagging (if needed)
    config.module.rules.push({
      test: /\.(jsx|tsx)$/,
      exclude: [/node_modules/],
      use: [{
        loader: '@dhiwise/component-tagger/nextLoader',
      }],
    });

    // Return updated config
    return config;
  },
  // Enable PWA (for push notifications)
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  // React Strict Mode and other configurations
  reactStrictMode: true,
};

export default nextConfig;
