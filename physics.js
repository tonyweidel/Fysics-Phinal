const motion = require('./motion');
const energy = require('./energy');
const readline = require('readline');
const terminal = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function printOptions(){
    console.log("\nEnter the variables you know in a comma list.");
    console.log("If you do not know a variable, then type n");
    console.log("distance,velocity,acceleration,time,mass,energy");

terminal.question("What type of equation are you looking for?(motion,energy)",function(str){
//you will configure your series of questions inside here.
  str.toLowerCase(str);
  if(str=="motion"){
    terminal.question("Which variable are you solving for?(d,v,a,t)",function(str){
      str.toLowerCase(str);
      if(str=="d"){
        printOptions()
        terminal.question("",function(list){
          if(Number.isNaN()){}
          else{}
        }
      }
      else if(str=="v"){
        terminal.question("What are your 6 numbers?",function(d,t){

        }
      }
      else if (str=="a"){
        terminal.question("What are your 6 numbers?",function(v,t){

        }
      }
      else if(str=="t"){
        terminal.question("What are your 6 numbers?",function(d,v){

        }
      }
      else{

      }
    }
  });
  else if(str=="energy"){
    terminal.question("Which variable are you solving for?(ke,m,v)",function(str){
      str.toLowerCase(str);
      if(str=="ke"){
        terminal.question("What are your 6 numbers?",function(m,v){

        }
      }
      else if(str=="m"){
        terminal.question("What are your 6 numbers?",function(ke,m){

        }
      }
      else if(str=="v"){
        terminal.question("What are your 6 numbers?",function(ke,v){

        }
      }
      else{

      }
    }
  });
});
