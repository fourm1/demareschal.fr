import { createApp } from 'vue'
import App from './App.vue'
import {FontAwesomeIcon} from "@/assets/fontawesome/font-awesome";

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
