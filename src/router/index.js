import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';
import Home from '@/views/Home.vue';
import Layout from '@/components/templates/Layout.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Layout,
    beforeEnter: async (to, from, next) => {
      await store.dispatch('shop/getProducts');
      await store.dispatch('common/getTemplate', 'home');
      next();
    },
    children: [
      {
        path: '',
        name: 'home',
        component: Home,
        meta: {
        },
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
