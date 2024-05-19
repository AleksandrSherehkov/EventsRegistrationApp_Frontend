/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eventsregistrationapp-backend.onrender.com',
        pathname: '/api/users/registrations/**',
      },
    ],
  },
};

export default nextConfig;
