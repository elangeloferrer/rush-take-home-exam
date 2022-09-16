import Vue from 'vue';
import VueRouter from 'vue-router';
import middleware from './middleware'

Vue.use(VueRouter);

const HomeComponent = () =>  import('../components/Home');
const LoginComponent = () =>  import('../components/Login');
const UsersComponent = () =>  import('../components/user/Users');
const AddNewUserComponent = () =>  import('../components/user/AddNewUser');
const EditUserComponent = () =>  import('../components/user/EditUser');
const NormalUserHomeComponent = () =>  import('../components/NormalUserHome');
const NotFoundComponent = () =>  import('../components/NotFound');


const routes = [
        {
            path: '*',
            name: 'NotFound',
            component: NotFoundComponent
        },
        {
            path: '/',
            name: 'Home',
            component: HomeComponent,
            beforeEnter: middleware.guest,
        },
        {
            path: '/login',
            name: 'Login',
            component: LoginComponent,
            beforeEnter: middleware.guest,
        },
        {
            path: '/users',
            name: 'Users',
            component: UsersComponent,
            beforeEnter: middleware.admin,
        },
        {
            path: '/users/add',
            name: 'AddNewUser',
            component: AddNewUserComponent,
            beforeEnter: middleware.admin,
        },
        {
            path: '/users/edit/:userId',
            name: 'EditUser',
            component: EditUserComponent,
            beforeEnter: middleware.admin,
        },
        {
            path: '/h/',
            name: 'NormalUserHome',
            component: NormalUserHomeComponent,
            beforeEnter: middleware.user,
        },
    ]

const router = new VueRouter({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ x: 0, y: 0 })
            }, 500) 
        })
    },
    base: process.env.BASE_URL,
    routes
})

export default router;