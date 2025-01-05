import './assets/index.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

const axiosInstance = axios.create({
    headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
});

const app = createApp(App);

app.config.globalProperties.$apiUrl = "http://localhost/api";

app.config.globalProperties.$axios = axiosInstance;
app.use(VueAxios, axiosInstance);
app.use(router);
app.mount('#app');