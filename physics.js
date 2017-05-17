const motion = require('./motion');
const energy = require('./energy');
const readline = require('readline');

const terminal = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

terminal.question("What type of equation are you looking for?(motion,energy)",function(str){
//you will configure your series of questions inside here.
  str.toLowerCase(str);
  if(str=="motion"){
    terminal.question("Which variable are you solving for?(d,v,a,t)",function(str){
      str.toLowerCase(str);
      if(str=="d")
        terminal.question("What are your numbers?",function(v,t){

        }
    }
  });

});
