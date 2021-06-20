import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
export default new Router({
    mode: 'history',
    routes: [
        {
            path: "/dashboard/:page",
            name: "dashboard",
            component: () => import("../pages/pageDashboard.vue"),
        },
        {
            path: "/dashboard/:page/add/payment/:category",
            name: "addPayment",
            component: () => import("../pages/pageDashboard.vue"),
        },
        {
            path: "/dashboard/:page/add/payment*",
            name: "addPaymentManual",
            component: () => import("../pages/pageDashboard.vue"),
        },
        {
            path: "/about",
            name: "about",
            component: () => import("../pages/pageAbout.vue"),
        },
        {
            path: "*",
            name: "pageNoteFound",
            component: () => import("../pages/page404.vue"),
        }
    ]
})