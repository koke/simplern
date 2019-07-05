module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['module:@haul-bundler/babel-preset-react-native'],
  };
};
