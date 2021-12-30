module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          "moduleName": "@env",
          "path": ".env",
        }
      ],
      [
        "formatjs",
        {
          "idInterpolationPattern": "[sha512:contenthash:base64:6]",
          "ast": true
        }
      ]
    ]
  };
};
