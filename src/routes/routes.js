import Home from '../components/Home.vue';
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue';


export const routes = [
    {
        path: '/', 
        component: Home,
        name: 'home',
        menu: false
    },
    {
        path: '/Login', 
        component: Login,
        name: 'login',
        menu: true
    },
    {
        path: '/SignUp', 
        component: SignUp,
        name: 'signup',
        menu: true
    },
    {
        path: '*',
        component: Home,
        menu: false
    }
]
