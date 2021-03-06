const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  // optional
  lessVarsFilePath: './styles/styles.less',
  // optional
  lessVarsFilePathAppendToEndOfContent: false,
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},

  // Other Config Here...

  webpack(config) {
    return config;
  },

});