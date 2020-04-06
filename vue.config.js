const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(new CompressionPlugin({
        test: /\.js$|\.html$|\.css/,
        threshold: 10240,
        deleteOriginalAssets: false,
      }));
      config.externals = {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        vuex: 'Vuex',
        axios: 'axios',
        'vue-lazyload': 'VueLazyload',
      };
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        import: [
          './src/theme',
        ],
      },
    },
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true,
    },
  },
};
