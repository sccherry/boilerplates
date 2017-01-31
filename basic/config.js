System.config({
  baseURL: 'js',
  defaultJSExtensions: true,
  paths: {
    'cdnjs:*': 'https://cdnjs.cloudflare.com/ajax/libs/*',
    'github:*': 'https://www.gitcdn.xyz/repo/*',
    'npm:*': 'https://unpkg.com/*'
  },
  map: {
    'babel': 'cdnjs:babel-core/5.8.34/browser.min',

    'jquery': 'cdnjs:jquery/3.1.1/jquery.min',

    /* Data visualization */
    'd3': 'cdnjs:d3/4.4.1/d3.min',

    /* UI */
    'bootstrap': 'cdnjs:twitter-bootstrap/3.3.7/js/bootstrap.min',
    'foundation-sites': 'cdnjs:foundation/6.3.0/js/foundation.min',
    'semantic-ui': 'cdnjs:semantic-ui/2.2.7/semantic.min',
    'muicss': 'cdnjs:muicss/0.9.8/js/mui.min',
    'material-design-lite': 'cdnjs:material-design-lite/1.3.0/material.min',
    'materialize-css': 'cdnjs:materialize/0.97.8/js/materialize.min',

    /* Functional (reactive) programming */
    'lodash': 'cdnjs:lodash.js/4.17.4/lodash.min',
    'lodash-fp': 'cdnjs:lodash-fp/0.10.4/lodash-fp.min',
    'ramda': 'cdnjs:ramda/0.23.0/ramda.min',
    'rxjs': 'cdnjs:rxjs/5.0.1/Rx.min',
    'underscore': 'cdnjs:underscore.js/1.8.3/underscore-min',

    /* Immutable data */
    'immutable': 'cdnjs:immutable/3.8.1/immutable.min',
    'mori': 'cdnjs:mori/0.3.2/mori.min',

    /* Storage */
    'localforage': 'cdnjs:localforage/1.4.3/localforage.min',
    'pouchdb': 'cdnjs:pouchdb/6.1.1/pouchdb.min',

    /* Application frameworks */
    'aurelia': 'github:aurelia/aurelia/tree/1.0.2/scripts/aurelia.min',
    'backbone': 'cdnjs:backbone.js/1.3.3/backbone-min',
    'react': 'cdnjs:react/15.4.2/react.min',
    'redux': 'cdnjs:redux/3.6.0/redux.min',
    'vue': 'cdnjs:vue/2.1.8/vue.min',

    /* Virtual DOM */
    'incremental-dom': 'cdnjs:incremental-dom/0.5.1/incremental-dom-min',
    'maquette': 'cdnjs:maquette/2.4.2/maquette.min',
    'morphdom': 'github:patrick-steele-idem/morphdom/v2.3.1/dist/morphdom-umd.min',
    'virtual-dom': 'github:Matt-Esch/virtual-dom/tree/v2.1.1/dist/virtual-dom'
  },
  meta: {
    'bootstrap': {
      deps: [
        'jquery'
      ]
    },
    'foundation-sites': {
      deps: [
        'jquery'
      ]
    },
    'materialize-css': {
      deps: [
        'jquery'
      ]
    },
    'semantic-ui': {
      deps: [
        'jquery'
      ]
    },

    'backbone': {
      deps: [
        'jquery',
        'underscore'
      ]
    }
  },
  transpiler: 'babel'
});
