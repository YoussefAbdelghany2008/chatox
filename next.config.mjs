import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
    dest: "public",
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    swcMinify: true,
    disable: process.env.NODE_ENV === "development",
    // disable: false,
    workboxOptions: {
        disableDevLogs: true,
    },
    // ... other options you like
});

const nextConfig = {
    reactStrictMode: false,
    async headers() {
      return [
        {
          // matching all API routes
          source: "/api/:path*",
          headers: [
            { key: "Access-Control-Allow-Credentials", value: "true" },
            { key: "Access-Control-Allow-Origin", value: "*" },
            { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
            { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
          ]
        }
      ]
    },
    env: {
      API_KEY: process.env.API_KEY,
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            // port: '',
            // pathname: '/account123/**',
          },
          {
            protocol: 'https',
            hostname: 'platform-lookaside.fbsbx.com',
          },
          {
            protocol: 'https',
            hostname: 'img.freepik.com',
          },
        ],
      },
};

export default withPWA(nextConfig);

