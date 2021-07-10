
const routers = [
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/',
      name: 'home',
      meta: { requiresAuth: true },
      component: () => import('./views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    }
];

export default routers