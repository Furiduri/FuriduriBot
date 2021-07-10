import rollDice  from "./RollDice";

const commands = (client, target, context, commandName) => {
    // If the command is known, let's execute it
    if ( /^!roll d[1-9][0-9]/.test(commandName)) {
        rollDice(client, target, context, commandName);    
    }
}

export default commands