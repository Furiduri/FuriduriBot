  
// Function called when the "dice" command is issued
const rollDice =  (client, target, context, commandName) => 
  {
    const sides = commandName.match(/([1-9])([0-9])/)[0];
    const num = Math.floor(Math.random() * sides) + 1;
    client.say(target, `Consegiste un ${num}`);
    //console.log(`* Executed ${commandName} command`);
  } 

export default rollDice