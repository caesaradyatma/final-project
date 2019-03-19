import UserDashboard from './views/UserDashboard.vue';
import CreatePost from './views/CreatePost.vue';
import UserSetting from './views/UserSetting.vue';
import PostSetting from './views/PostSetting.vue';

const routes = [
  {
    path: '/user',
    name: 'dashboard',
    component: UserDashboard,
    meta: {
      auth: true,
    },
    children: [
      {
        path: 'setting',
        component: UserSetting,
        meta: {
          auth: true,
        },
      },
      {
        path: 'create',
        component: CreatePost,
        meta: {
          auth: true,
        },
      },
      {
        path: 'update',
        component: PostSetting,
        meta: {
          auth: true,
        },
      },
    ],
  },
];

export default routes;
