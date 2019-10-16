import App from '../App.vue';
import helperbar from '../components/helperbar.vue'

var routes = [
  {
    path: '/',
    name: 'home',
    component: App
  },
  {
    path: '/order',
    name: 'order',
    component: helperbar
  }
]

var router = new VueRouter({
    routes: routes,
    base: '/'
});

export default router;
