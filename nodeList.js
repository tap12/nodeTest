var readline = require("readline");
var rl = readline.createInterface(process.stdin,process.stdout);
var data = [];
 
rl.setPrompt("--> ");
rl.prompt();
 
rl.on("line",function(text){
  var words = text.split(" ");
  var action = words.shift();
  var finalText = words.join(" ");
 
  switch(action){
    case "view":
      console.log("list items",data);
      break;
    case "add":
      console.log("adding",finalText);
      data.push(finalText);
      break;
    case "remove":
      if(data.indexOf(finalText) > -1){
        var removeIndex = data.indexOf(finalText);
        data.splice(removeIndex,1);
        console.log("removing",finalText);
      } else {
        console.log("item not found");
      }
      break;
    default:
      console.log("unknown action");
      break;
  }
 
  rl.prompt();
})