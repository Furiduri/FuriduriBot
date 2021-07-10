<template>
    <b-navbar class="mb-3">
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ name: 'home' }">
                <h1 class="title">
                    Furiduri bot                
                </h1> 
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item tag="router-link" :to="{ name: 'home' }">
                Home
            </b-navbar-item>
            <b-navbar-item  tag="router-link" :to="{ name: 'about' }">
                    About
            </b-navbar-item>
        </template>

        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-is-primary" 
                    @click="googleSignOut">
                        Cerrar sesion
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>
<script>
import firebase from 'firebase/app'
require('firebase/auth')
export default {
    name: "FNavbar",
    data(){
        return {
            
        }
    },
    methods: {
        googleSignOut: function() {
            firebase
                .auth()
                .signOut()
                .then(() => {
                alert("Successfully signed out.");
                this.$router.replace({ name: "login" });
                this.$store.commit('onClientDisconnect');
                });
        }
    }
}
</script>

<style>

</style>