import { createWebpackConfig } from 'haul';
import webpack from 'webpack';

export default {
  webpack: (env) => {
    const config = createWebpackConfig({
      entry: `./index.js`
    })(env);

    // By default, haul registers some plugins to generate source maps.
		// Webpack will ignore our devtool configuration if those plugins are present.
		const pluginBlacklist = new Set( [
			webpack.SourceMapDevToolPlugin,
			webpack.EvalSourceMapDevToolPlugin,
		] );
		config.plugins = config.plugins.filter( ( plugin ) => ! pluginBlacklist.has( plugin.constructor ) );

    config.module.rules = [
      {
        test: /\.js?$/,
        loaders: ['babel-loader']
      },
      ...config.module.rules
    ];
    config.devtool = false;

    return config;
  }
};