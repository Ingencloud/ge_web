import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import { Animate, initTE } from 'tw-elements';
// import './index.css'
initTE({ Animate });
createApp(App).use(router).mount('#app')
