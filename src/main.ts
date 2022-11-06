import { createApp } from 'vue'
import App from './App.vue'

import VueFormattedNumberInputPlugin from 'vue-formatted-number-input';
// Optional import for native classes:
// import "vue-formatted-number-input/styles.css";

const app = createApp(App);

app.use(VueFormattedNumberInputPlugin)

app.mount('#app');
