import { createWebpackConfig } from 'haul';

export default {
  webpack: (env) => {
    const config = createWebpackConfig({
      entry: `./index.js`
    })(env);

    config.module.rules = [
      {
        test: /\.js?$/,
        loaders: ['babel-loader']
      },
      ...config.module.rules
    ];

    return config;
  }
};