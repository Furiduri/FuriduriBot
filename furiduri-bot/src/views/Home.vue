<template>
  <div class="home">
      <div class="level">
          <div class="level-left">

          </div>
          <div class="level-right">
            <b-button :class="{'is-success': clientOn}"  @click="onClient()"> 
                  {{clientOn ? "Chatbot Activo" : "Inicar chatbot"}} 
            </b-button>              
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
    methods: {
        onClient(){      
          // Connect to Twitch:
          if(this.clientOn){
            this.$store.commit('onClientDisconnect');
          }else{
            this.$store.commit('onClient');
          }
        }
    },
    computed: {
        clientOn () {          
        return this.$store.getters.clientOn;
      }
  }
}
</script>

<style>

</style>