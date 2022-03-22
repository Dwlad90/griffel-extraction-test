const {
  GriffelCSSExtractPlugin
} = require("@griffel/webpack-extraction-plugin");

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.unshift({
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        { loader: GriffelCSSExtractPlugin.loader },
        { loader: "@griffel/webpack-loader" },
      ]
    });
    config.plugins.push(new GriffelCSSExtractPlugin());

    return config;
  }
};
