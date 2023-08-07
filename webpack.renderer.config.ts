import type { Configuration } from 'webpack';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin'
import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';

rules.push({
  test: /\.css$/,
  use: [
    { loader: 'style-loader' },
    { loader: 'css-loader' },
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: [require("tailwindcss"), require("autoprefixer")],
        },
      },
    },
  ],
});

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  devtool: 'inline-source-map',
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    plugins: [new TsconfigPathsPlugin()]
  },
};
