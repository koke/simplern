import { createWebpackConfig } from 'haul';
import webpack from 'webpack';
import merge from 'webpack-merge';

export default {
  webpack: (env) => {
		const defaultConfig = createWebpackConfig( {
			entry: `./index.js`,
		} )( env );

    // By default, haul registers some plugins to generate source maps.
		// Webpack will ignore our devtool configuration if those plugins are present.
		const pluginBlacklist = new Set( [
			webpack.SourceMapDevToolPlugin,
			webpack.EvalSourceMapDevToolPlugin,
		] );
		defaultConfig.plugins = defaultConfig.plugins.filter( ( plugin ) => ! pluginBlacklist.has( plugin.constructor ) );

		return merge(
			defaultConfig,
			{
				module: {
					rules: [
						{
							test: /\.js?$/,
							loaders: [ 'babel-loader' ],
						},
					],
				},
				plugins: [
					new webpack.SourceMapDevToolPlugin( {
						test: /\.(js|css|(js)?bundle)($|\?)/i,
						filename: '[file].map',
						publicPath: defaultConfig.output.publicPath,
						moduleFilenameTemplate: '[absolute-resource-path]',
					} ),
				],
				devtool: false,
			}
		);
  }
};