import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import("../layouts/MainLayout.vue"),
    children: [
      {
        path: "/",
        name: "Dashboard",
        meta: { roles: [1] },
        component: () => import("../views/AboutMe.vue"),
      },      
    ],
  },
  // {
  //   path: "/:catchAll(.*)",
  //   name: "Error404",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/Error404.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   //console.log('router beforeEach', to, from, store)
//   const user = useUser();

//   console.warn("route guard", user.ActiveUser, to);

//   if (to.fullPath !== "/")
//     Cookies.set("_t", "a", {
//       expires:
//         window.payroll.to !== undefined && window.payroll.to !== null
//           ? window.payroll.to
//           : "5m",
//     });
//   if (
//     to.meta.roles !== undefined &&
//     user.ActiveUser &&
//     to.meta.roles.indexOf(user.ActiveUser.AccessRoleID) === -1
//   )
//     next({ name: "Unauthorized" });
//   else next();
// });

export default router;
