import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Гарантирует сборку в статичные HTML/CSS/JS (папка out)
  images: {
    unoptimized: true, // Обязательно для статики, чтобы картинки собирались без Node.js-сервера
  },
};

export default nextConfig;
