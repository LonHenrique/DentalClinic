import Home from '../components/Home.vue';
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue';


export const routes = [
    {
        path: '/', 
        component: Home
    },
    {
        path: '/Login', 
        component: Login
    },
    {
        path: '/SignUp', 
        component: SignUp
    },
]
