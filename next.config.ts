import withNextIntl from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntlPlugin = withNextIntl('./src/i18n.ts');

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextIntlPlugin(nextConfig);
