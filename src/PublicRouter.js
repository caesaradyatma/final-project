import Home from './views/Home.vue';
import About from './views/About.vue';
import Authentication from './views/Authentication.vue';
import Post from './views/Post.vue';

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
    path: '/post/:id',
    name: 'post',
    component: Post,
  },
];

export default routes;
