import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import App from './App.vue'
import router from './router'
import store from './Store/index'
import axios from 'axios'
import firebase from 'firebase/app'
import keyfirebase from './js/private/keyfire'

//Firebase

Vue.prototype.$axios = axios;
Vue.use(Buefy)
Vue.config.productionTip = false
let MainApp;
 
firebase.initializeApp(keyfirebase);
firebase.auth().onAuthStateChanged(user => { 
  console.log(user ? "Is login" : "No login"); 
  if (!MainApp) {
    MainApp = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
});



