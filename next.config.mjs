/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.pokemondb.net',
      },
      {
        protocol: 'https',
        hostname: 'https://vercel.app'
      }
    ],
  }
}

export default nextConfig;
