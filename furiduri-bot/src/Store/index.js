
import Vue from 'vue'
import Vuex from 'vuex'
import client from '../js/bot';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        globalError: "",
        clientOn: false
    },
    mutations: {
        setGlobalError (state, error) {
            state.globalError = error
        },
        onClient (state) {
            if(!state.clientOn)
                client.connect();            
        },
        onClientDisconnect(state){
            if(state.clientOn)
                client.disconnect();
        },
        ClientIs(state, value){
            state.clientOn = value;
        }
    },
    getters: {
        clientOn: state => {return state.clientOn}
    }
  });

export  default store;