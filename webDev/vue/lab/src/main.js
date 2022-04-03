//corestuff
import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import './assets/tailwind.css'
// components
import Test from './components/test.vue'
import Comp from './components/parent-cmp-comp.vue'
import Clones from './components/addSponClones.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/test", 
            name: "Test", 
            component: Test
        },
        {
            path: "/comp", 
            component: Comp,
            props: {}
        },
        {path: "/clones", component: Clones},
    ],
})
const app = createApp(App)
app.use(router)
app.mount('#app')
