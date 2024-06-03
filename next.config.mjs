import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  // disable: process.env.NODE_ENV === "development",
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
  },
  // ... other options you like
});

const nextConfig = {

};

export default withPWA(nextConfig);

