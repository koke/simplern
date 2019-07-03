import { createWebpackConfig } from 'haul';
import webpack from 'webpack';
import fs from 'fs';
import path from 'path';

export default {
  webpack: (env) => {
    env.disableHotReloading = true;
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
    config.plugins = [
      ...config.plugins,
      new webpack.EvalSourceMapDevToolPlugin({
        module: true,
      }),
      new webpack.SourceMapDevToolPlugin({
        test: /\.(js|css|(js)?bundle)($|\?)/i,
        filename: '[file].map',
      }),
    ]
    
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.js?$/,
        loaders: ['babel-loader']
      },
    ];
    config.devtool = false;

    fs.writeFileSync( path.resolve( 'results/haul.config.js' ), JSON.stringify( config, null, 2 ) )

    return config;
  }
};