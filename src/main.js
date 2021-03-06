import Vue from 'vue';
import App from './App';
import router from './router';
import { store } from './store/store.js';

import '@/style/_default.scss';

Vue.config.productionTip = false;

new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	render: (h) => h(App)
});
