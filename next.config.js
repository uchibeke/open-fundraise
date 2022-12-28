const webpack = require("webpack");

// Needed for render.com deployment
const { parsed: myEnv } = require("dotenv").config(
  process.env.NODE_ENV === "development"
    ? null
    : {
        path: "/etc/secrets/.env",
      }
);

// Extend your Next config for advanced behavior
// See https://nextjs.org/docs/api-reference/next.config.js/introduction
const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
];

let nextConfig = {
  webpack: (config) => {
    config.plugins.push(new webpack.EnvironmentPlugin(myEnv));
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
