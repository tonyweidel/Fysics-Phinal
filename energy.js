var exports = module.exports = {};
//use this prototype to create the other functions
exports.kineticEnergy = function(m,v){
  return (1/2)*m*v*v;
}
exports.velocity = function(ke,m){
  return Math.squareroot(2*ke)/m
}
exports.mass = function(ke,v){
  return (2*ke)/(v*v)
}
