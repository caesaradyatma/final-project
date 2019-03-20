import Vue from 'vue';
import Router from 'vue-router';
import UserRouter from './UserRouter';
import PublicRouter from './PublicRouter';

Vue.use(Router);

let allRoutes = [];
allRoutes = allRoutes.concat(UserRouter, PublicRouter);

const routes = allRoutes;

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// const { vuexAuth } = this.$store.state;

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    console.log(localStorage.getItem('auth') == 1);
    if (localStorage.getItem('auth') == 1) {
      next();
    } else {
      next('/');
    }
  } else {
    next();
  }
});

export default router;

// export default new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: Home,
//     },
//     {
//       path: '/about',
//       name: 'about',
//       component: About,
//     },
//     {
//       path: '/authentication',
//       name: 'auth',
//       component: Authentication,
//     },
//     {
//       path: '/user',
//       name: 'dashboard',
//       component: UserDashboard,
//     },
//     {
//       path: '/post/:id',
//       name: 'post',
//       component: Post,
//     },
//     {
//       path: '/create',
//       name: 'createpost',
//       component: CreatePost,
//     },
//     {
//       path: '/update',
//       name: 'updatepost',
//       component: UpdatePost,
//     },
//     {
//       path: '/user/setting',
//       name: 'usersetting',
//       component: UserSetting,
//     },
//     {
//       path: '/post/:id/setting',
//       name: 'postsetting',
//       component: PostSetting,
//     },
//   ],
// });
