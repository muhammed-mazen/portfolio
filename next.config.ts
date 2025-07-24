import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true, // important for static export
    },
    // basePath: '/your-repo-name', // Uncomment ONLY if not using a custom domain
};

export default withNextIntl(nextConfig);
