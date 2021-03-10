const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');
const withFonts = require('next-fonts');

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // distDir: '../../dist/functions/next'
  assetPrefix: isProd ? 'beta/' : '',
};

module.exports = withPlugins(
  [
    [
      withOptimizedImages,
      {
        mozjpeg: {
          quality: 90,
        },
        webp: {
          preset: 'default',
          quality: 90,
        },
      },
    ],
    withFonts,
  ],
  nextConfig
);
