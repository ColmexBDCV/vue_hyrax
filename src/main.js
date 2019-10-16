
import routes from './router/routes'
import App from './App.vue'
import { store } from './store/store'

Vue.config.productionTip = false
Vue.config.devtools = true;
Vue.config.debug = true;

var app = new Vue({
	el: '#app',
	store,
	router:routes,
	components: {
		'App': App,
		
	}
})