// este es un esqueleto basico que realizo para las rutas
import Vue from 'vue';
import Router from 'vue-router';
import store from '../store/index';

Vue.use(Router);

const router = new Router({
    routes: [
        {
            name: "example",
            path: "/",
            component: () =>
                import(/* webpackChunkName: "login" */ "../components/ExampleComponent"),
        },
        // {
        //     name: "login",
        //     path: "/",
        //     component: () =>
        //         import(/* webpackChunkName: "login" */ "../components/auth/Login"),
        // },
        // {
        //     name: "layout",
        //     path: "/layout",
        //     meta: {
        //         requiresAuth: true
        //     },
        //     component: () =>
        //         import(/* webpackChunkName: "layout" */ "../components/layout/Layout"),
        //     children: [
        //         {
        //             name: "dashboard", 
        //             path: "/dashboard", 
        //             // meta: {
        //             //     checkRole: [2, 1]
        //             // },
        //             component: () =>
        //                 import(/* webpackChunkName: "user" */ "../components/layout/Dashboard"),
        //         }
        //     ]
        // }
    ],
    mode: "history",
    scrollBehavior(to, from, savedPosition) {
        // return desired position
        return { x: 0, y: 0 }
    }
});


// router.beforeEach((to, from, next) => {
//     // Consulta VUEX
//     const authUser = store.getters["auth/IS_AUTHENTICATED"];
//     const role = localStorage.getItem("role_id");
//     // CREACION META
//     const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//     const checkRole = to.matched.some(record => record.meta.checkRole);
   
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         // this route requires auth, check if logged in
//         // if not, redirect to login page.
//         if (!authUser) {
//             next({
//                 path: "/login",
//                 query: {
//                     redirect: to.fullPath
//                 }
//             });
//         } else {
//             console.log(to.meta.checkRole.includes(parseInt(role)))
//             if (to.meta.checkRole.includes(parseInt(role))) {
//                 next();
//             } else {
//                 router.push({
//                     name: "dashboard"
//                 });
//             }
//         }
//     } else {
//         next(); // make sure to always call next()!
//     }
// });
export default router;
