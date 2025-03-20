import path from "path";
import { fileURLToPath } from "url";

// __dirname을 ESM에서 사용할 수 있도록 변환
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: { unoptimized: true },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/assets/styles")],
    prependData: `@import "_mixins.scss"; @import "_variables";`,
  },
};

export default nextConfig;
