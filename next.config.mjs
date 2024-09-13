/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                // You can add options here if needed
              },
            },
            'url-loader',
          ],
        });
    
        return config;
      },
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'firebasestorage.googleapis.com',
            port: '',
            pathname: '/v0/b/**',
          },
        ],
      },
};

export default nextConfig;
