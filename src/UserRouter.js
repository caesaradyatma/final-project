import UserDashboard from './views/UserDashboard.vue';
import CreatePost from './views/CreatePost.vue';
import UserSetting from './views/UserSetting.vue';
import PostSetting from './views/PostSetting.vue';
import Post from './views/Post.vue';

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
        path: 'create',
        component: CreatePost,
      },
      {
        path: 'update',
        component: PostSetting,
      },
    ],
  },
  {
    path: '/post/:id',
    name: 'post',
    component: Post,
  },
];

export default routes;
