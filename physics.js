const motion = require('./motion');
const energy = require('./energy');
const readline = require('readline');

function distance(v,t){
  return v*t;
}
function velocity(d,t){
  return d/t;
}
function time(d,v){
  return d/v;
}

const terminal = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

terminal.question("What type of equation are you looking for?",function(str){

    //you will configure your series of questions inside here.


});
