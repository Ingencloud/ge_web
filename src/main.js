import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueVideoPlayer from '@videojs-player/vue'
import 'video.js/dist/video-js.css'
import './assets/tailwind.css'
import { Animate, initTE } from 'tw-elements';

// Initialize tw-elements
initTE({ Animate });

// Create the Vue app and use the plugins
const app = createApp(App);
app.use(router);
app.use(VueVideoPlayer);
app.mount('#app');
