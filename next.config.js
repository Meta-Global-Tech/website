/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    distDir: 'out',
    output: "export",  // <=== enables static exports
    // reactStrictMode: true,
    // basePath: "/metaglobal-website-2-1",
    images: { unoptimized: true },
    experimental: { images: { unoptimized: true } },
}

module.exports = nextConfig
