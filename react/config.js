System.config({
  baseURL: 'js',
  defaultJSExtensions: true,
  paths: {
    'cdnjs:*': 'https://cdnjs.cloudflare.com/ajax/libs/*',
    'github:*': 'https://www.gitcdn.xyz/repo/*'
  },
  map: {
    'babel': 'cdnjs:babel-core/5.8.34/browser.min',
    'react': 'cdnjs:react/15.2.1/react.min',
    'react-dom': 'cdnjs:react/15.2.1/react-dom.min',
    'react-redux': 'cdnjs:react-redux/4.4.5/react-redux.min',
    'react-router': 'cdnjs:react-router/2.7.0/ReactRouter.min',
    'react-router-redux': 'cdnjs:react-router-redux/4.0.5/ReactRouterRedux.min',
    'redux': 'cdnjs:redux/3.5.2/redux.min'
  },
  meta: {
  },
  transpiler: 'babel'
});
