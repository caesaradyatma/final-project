import UserDashboard from './views/UserDashboard.vue';
import CreatePost from './views/CreatePost.vue';
import UserSetting from './views/UserSetting.vue';
import PostSetting from './views/PostSetting.vue';
import Post from './views/Post.vue';
import Highlights from './components/sections/Highlights.vue';

const routes = [
  {
    path: '/user/:id',
    component: UserDashboard,
    meta: {
      auth: true,
    },
    children: [
      {
        path: 'setting',
        component: UserSetting,
      },
      {
        path: 'myposts',
        component: Highlights,
      },
    ],
  },
  {
    path: '/post/:id',
    name: 'post',
    component: Post,
  },
  {
    path: '/post/:id/update',
    name: 'updatepost',
    component: PostSetting,
    auth: true,
  },
  {
    path: '/post/create',
    name: 'create',
    component: CreatePost,
    auth: true,
  },
];

export default routes;
