import Home from './views/Home.vue';
import About from './views/About.vue';
import Authentication from './views/Authentication.vue';
import Post from './views/Post.vue';
import NotFound from './views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/authentication',
    name: 'auth',
    component: Authentication,
  },
  {
    path: '*',
    name: 'notfoundjuga',
    component: NotFound,
  },
];

export default routes;
