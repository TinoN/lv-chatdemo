
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// 170713: not working, problem with require
/**
 for future (170714, auch mit npm 5.3.0 funktioniet es nicht):

    npm -v shouldn't return 5.2 //not relevant actually
    rm -rf node_modules
    npm cache clear --force
    rm -rf package-lock.json
    npm install

    evtl nach dem ganzen spass einfach rechner neustarten...
	
**/
// Vue.component('example', require('./components/Example.vue'));
// Vue.component('chat-log', require('./components/ChatLog.vue'));
// Vue.component('chat-message', require('./components/ChatMessage.vue'));
// Vue.component('chat-composer', require('./components/ChatComposer.vue'));

//FIX:
import exampleT from './components/Example.vue';
import chatMessageT from './components/ChatMessage.vue';
import chatLogT from './components/ChatLog.vue';
import chatComposerT from './components/ChatComposer.vue';

Vue.component('example', exampleT);
Vue.component('chat-message', chatMessageT);
Vue.component('chat-log', chatLogT);
Vue.component('chat-composer', chatComposerT);

//root scope:
const app = new Vue({
    el: '#app',
    data: {
    	messagesGlobal: [
			{
				message: 'hey',
				user: 'john'
			},
			{
				message: 'hello',
				user: 'vivi'
			}
		]
	},
    methods: {
    	addMessage (message) {
    		//add to existing messages
    		this.messagesGlobal.push(message);
    		console.log ('message added');
    	}
    }
});

// const app = new Vue({
//     el: '.app',
//     components: [
//       'example'
//     ]
// });
