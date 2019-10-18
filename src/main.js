
import routes from './router/routes.js'
import App from './App.vue.js'
import Doc from './Doc.vue.js'
import { store } from './store/store.js'

Vue.config.productionTip = false
Vue.config.devtools = true;
Vue.config.debug = true;

var app = new Vue({
	el: '#app',
	store,
	router:routes,
	components: {
		'App': App,
		'Doc': Doc		
	}
})