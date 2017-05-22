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
}

function end(){
  terminal.close();
}

function convertToArray(strcma){
  strcma = strcma.split(',');
  for(let i=0;i<strcma.length;i++){
    strcma[i] = Number(strcma[i]);
  }
  return strcma;
}

terminal.question("What type of equation are you looking for?(motion,energy)",function(str){
  //you will configure your series of questions inside here.
  str.toLowerCase(str);
  if(str=="motion"){
    terminal.question("Which variable are you solving for?(d,v,a,t)",function(str){
      str.toLowerCase();
      if(str=="d"){
        printOptions()
        terminal.question("",function(a){
          a = convertToArray(a);
          if(Number.isNaN(a[2])){
            console.log(motion.distance(a[1],a[3]));
            end();
          }
          else{
            console.log(motion.distancefinal(a[2],a[3]));
            end();
          }
        });
      }
      else if(str=="v"){
        printOptions()
        terminal.question("",function(a){
          a = convertToArray(a);
          if(Number.isNaN(a[2])){
            console.log(motion.velocity(a[0],a[3]));
            end();
          }
          else{
            console.log(motion.velocityfinal(a[1],a[2],a[3]));
            end();
          }
        });
      }
      else if (str=="a"){
        a = convertToArray(a);
        console.log(motion.acceleration(a[1],a[3]));
        end();
      }
      else if(str=="t"){
        printOptions()
        terminal.question("",function(a){
          a = convertToArray(a);
          if(Number.isNaN(a[2])){
            console.log(motion.time(a[0],a[3]));
            end();
          }
          else{
            console.log(motion.timefinal(a[1],a[1],a[2]));
            end();
          }
        });
        else{
          console.log("That isn't one of the options")
          end();
        }
      }
    });
    else if(str=="energy"){
      terminal.question("Which variable are you solving for?(ke,m,v)",function(str){
        str.toLowerCase();
        if(str=="ke"){
          printOptions()
          terminal.question("",function(a){
            a = convertToArray(a);
            console.log(energy.kineticEnergy(a[4],a[1]));
            end();
          }
        }
        else if(str=="m"){
          printOptions()
          terminal.question("",function(a){
            a = convertToArray(a);
            console.log(energy.mass(a[5],a[1]));
            end();
          }
        }
        else if(str=="v"){
          printOptions()
          terminal.question("",function(a){
            a = convertToArray(a);
            console.log(energy.velocity(a[4],a[1]));
            end();
          }
        }
        else{
          console.log("That isn't one of the options")
          end();
        }
      });
    });
  });
