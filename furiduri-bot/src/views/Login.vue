<template>
  <div class="Login">
    <h3>Login</h3>    
    <div> 
      <button @click="googleSignIn"> Ingresar con Goolge</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
require('firebase/auth')
export default {
  data() {
    return {
     
    };
  },
  methods: {
    
      googleSignIn: function() {   
          let provider = new firebase.auth.GoogleAuthProvider();         
          firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                let user = result.user;
                
                if(user.email != 'jorge.furiduri@gmail.com'){
                  this.googleSignOut();
                }else{
                  this.$router.replace({ name: "home" });
                }
            })
            .catch((err) => {
              console.log(err); // This will give you all the information needed to further debug any errors
            });
      },
      googleSignOut: function() {
        firebase
          .auth()
          .signOut()
          .then(() => {
            alert("No Autorizado");
          });
      }
  }
}
</script>
