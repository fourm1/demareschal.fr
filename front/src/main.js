import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import {FontAwesomeIcon} from '@/assets/fontawesome/font-awesome';
import {Icon} from '@iconify/vue'

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
// eslint-disable-next-line vue/multi-word-component-names
app.component('Icon', Icon)
app.use(router);
app.mount('#app');
