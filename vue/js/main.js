import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use( VueRouter );

const Home = Vue.extend({
  template: '<p>Hello world!</p>'
});

const App = Vue.extend({});

const router = new VueRouter();

router.map({
  '/': {
    component: Home
  }
});

router.start( App, '#app' );
