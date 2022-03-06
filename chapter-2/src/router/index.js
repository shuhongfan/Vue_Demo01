import Vue from 'vue'
import VueRouter from 'vue-router'
import content from "@/views/content";
import main from "@/views/main";
import shf from "@/views/shf";


Vue.use(VueRouter)

const routes = [
    {
        path: '/content',
        name: 'content',
        component: content
    }, {
        path: '/main',
        name: 'main',
        component: main
    }, {
        path: '/shf',
        name: 'shf',
        component: shf
    }
]

const router = new VueRouter({
    routes
})

export default router
