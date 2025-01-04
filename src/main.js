import './assets/index.css'


import {createApp} from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


const app = createApp(App);
app.config.globalProperties.$apiUrl = "http://localhost/api";
axios.AxiosHeaders = {
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
}
app.use(VueAxios, axios);
app.mount('#app');