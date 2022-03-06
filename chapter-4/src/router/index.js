import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from "@/views/Main";
import Profile from "@/views/user/Profile";
import List from "@/views/user/List";
import Login from "@/views/Login";
import NotFound from "@/views/NotFound";

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    }, {
        path: '/main/:name',
        name: 'main',
        component: Main,
        props: true,
        children: [
            {path: '/user/profile/:id', name: 'UserProfile', component: Profile, props: true},
            {path: '/user/list', name: "UserList", component: List}
        ]
    },
    {
        path: '/goHome',
        redirect: '/main'
    },
    {
        path: '*',
        component: NotFound
    }
]

const router = new VueRouter({
    // mode: "history",
    routes
})

export default router
