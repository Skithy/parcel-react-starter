const path = require('path')
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin')

module.exports = {
  stories: ['../src/**/*.stories.(tsx|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    '@storybook/addon-docs/register',
  ],
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: [
        require.resolve('babel-loader'),
        {
          loader: require.resolve('react-docgen-typescript-loader'),
          options: {
            tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
          },
        },
      ],
    })

    config.module.rules.push({
      test: /\.stories\.mdx$/,
      use: [
        require.resolve('babel-loader'),
        {
          loader: '@mdx-js/loader',
          options: {
            compilers: [createCompiler()],
          },
        },
      ],
    })

    config.module.rules.push({
      test: /\.stories.tsx?$/,
      loader: require.resolve('@storybook/source-loader'),
      exclude: /node_modules/,
      enforce: 'pre',
    })

    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve(__dirname, '../src'),
    }

    config.resolve.extensions.push('.ts', '.tsx')
    return config
  },
}
