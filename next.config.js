/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: (config, context) => {
    // Existing plugin configuration
    if (config.plugins) {
      config.plugins.push(
        new context.webpack.IgnorePlugin({
          resourceRegExp: /^(lokijs|pino-pretty|encoding)$/,
        })
      );
    }

    // New fallback configuration
    config.resolve = config.resolve || {};
    config.resolve.fallback = {
      ...(config.resolve.fallback || {}),
      fs: false,
      net: false,
      tls: false,
    };

    return config;
  },
};

module.exports = nextConfig;
