import Vue from 'vue'
import Router from 'vue-router'
import routers from './routers'

import firebase from 'firebase/app';
import "firebase/auth";

Vue.use(Router)


const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routers
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  
  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;