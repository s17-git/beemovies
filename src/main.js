import { createApp } from 'vue'
import './assets/css/main.css'
import App from './App.vue'

//import router
import router from './routes'

import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json';

createApp(App)
.use(router)
.mount('#app')


