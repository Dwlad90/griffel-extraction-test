// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const { GriffelCSSExtractionPlugin } = require('@griffel/webpack-extraction-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.optimization.splitChunks = config.optimization.splitChunks || {
      cacheGroups: {},
    };

    config.module.rules.push({
      test: /\.(js|ts|tsx)$/,
      // Apply "exclude" only if your dependencies **do not use** Griffel
      // exclude: /node_modules/,
      use: {
        loader: GriffelCSSExtractionPlugin.loader,
      },
    },
      // Add "@griffel/webpack-loader" if you use Griffel directly in your project
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: '@griffel/webpack-loader',
        },
      },
      // "css-loader" is required to handle produced CSS assets by Griffel
      // you can use "style-loader" or "MiniCssExtractPlugin.loader" to handle CSS insertion
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    );
    config.plugins.push(
      new MiniCssExtractPlugin({
        // without these Next.js will look for the generated stylesheets from the wrong place
        filename: "static/chunks/[chunkhash].css",
        chunkFilename: "static/chunks/[chunkhash].css",
        ignoreOrder: true,
      }),
      new GriffelCSSExtractionPlugin()
    );

    return config;
  }
};

module.exports = withNx(nextConfig);
