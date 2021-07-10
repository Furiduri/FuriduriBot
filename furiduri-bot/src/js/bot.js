const tmi = require('tmi.js');
import authTwitch from './private/credencials'
import commands from './CommandBot/index'
import store from '../Store/index'
  // Create a client with our options
  const client = new tmi.client(authTwitch);
  
  // Register our event handlers (defined below)
  client.on('message', onMessageHandler);
  client.on('connected', onConnectedHandler);
  client.on('disconnected', onDisconnectedHandler);
  client.on('cheer', onCheer);
  
  function onCheer(target, context, msg, self){
    if (self) { return; } // Ignore messages from the bot 
    
  }

  // Called every time a message comes in
  function onMessageHandler (target, context, msg, self) {
    if (self) { return; } // Ignore messages from the bot    
    
    // Remove whitespace from chat message
    const commandName = msg.trim();

    //Si inicia con !, entra a comando
    if(/^!/.test(commandName))
      commands(client, target, context, commandName);
  }
 
  // Called every time the bot connects to Twitch chat
  function onConnectedHandler (addr, port) {
    console.log(`* Connected to ${addr}:${port}`);    
    store.commit('ClientIs', true);
  }

  function onDisconnectedHandler (reason) {
    console.log(`* Is Disconnected to ${reason}`);    
    store.commit('ClientIs', false);
  }
  export default client