import Vue from "vue";
import Router from "vue-router";

import PageDashboard from "../pages/pageDashboard.vue";
import PageAbout from "../pages/pageAbout.vue";
import Page404 from "../pages/page404.vue";


Vue.use(Router);
export default new Router({
    mode: 'history',
    routes: [
        {
            path: "/dashboard/:page",
            name: "dashboard",
            component: PageDashboard,
        },
        {
            path: "/about",
            name: "about",
            component: PageAbout
        },
        {
            path: "*",
            name: "pageNoteFound",
            component: Page404
        }
    ]
})