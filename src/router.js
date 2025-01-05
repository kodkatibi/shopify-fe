import {createMemoryHistory, createRouter} from 'vue-router'
import Login from "@/view/Auth/Login.vue";
import Home from "@/components/WelcomeItem.vue";
import OrderList from "@/view/Orders/OrderList.vue";

const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/orders',component: OrderList}
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router