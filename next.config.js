/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // 如果您的仓库名是 username.github.io，保持下面这行注释
  // 如果不是，取消注释并修改为您的仓库名
  // basePath: '/your-repo-name',
}

module.exports = nextConfig
