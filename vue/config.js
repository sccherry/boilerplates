System.config({
  baseURL: 'js',
  defaultJSExtensions: true,
  paths: {
    'cdnjs:*': 'https://cdnjs.cloudflare.com/ajax/libs/*',
    'github:*': 'https://www.gitcdn.xyz/repo/*'
  },
  map: {
    'babel': 'cdnjs:babel-core/5.8.34/browser.min',
    'vue': 'cdnjs:vue/1.0.26/vue.min',
    'vue-router': 'cdnjs:vue-router/0.7.13/vue-router.min',
    'vuex': 'cdnjs:vuex/0.8.2/vuex.min'
  },
  meta: {
  },
  transpiler: 'babel'
});
