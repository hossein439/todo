import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/tailwind.css';
import router from './router'
import '@vuepic/vue-datepicker/dist/main.css'

if(localStorage.getItem('todos') === undefined) {
    localStorage.setItem('todos', JSON.stringify([]));
}
const app = createApp(App);
app.use(router);
app.mount('#app')
