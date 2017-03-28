System.config({
  baseURL: 'js',
  defaultJSExtensions: true,
  paths: {
    'cdnjs:*': 'https://cdnjs.cloudflare.com/ajax/libs/*',
    'github:*': 'https://www.gitcdn.xyz/repo/*'
  },
  map: {
    'babel': 'cdnjs:babel-core/5.8.34/browser.min',
  },
  meta: {
  },
  babelOptions: {
    stage: 1
  },
  transpiler: 'babel'
});
