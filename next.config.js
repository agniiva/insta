const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  latex: true,
  titleSuffix:
  "Creators, Platforms & Findings - Insights to grow on Instagram as a Creator",
})

module.exports = withNextra({
  basePath: '/grow-insta',
  assetPrefix: '/grow-insta',
})