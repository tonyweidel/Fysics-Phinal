var exports = module.exports = {};
//use this prototype to create the other functions
exports.distance= function(v,t){
  return v*t;
}
exports.velocity= function(d,t){
  return d/t;
}
exports.time= function(d,v){
  return d/v;
}
exports.acceleration= function(v,t){
  return v/t;
}
exports.distancefinal= function(a,t){
  return (1/2)*a*t*t
}
exports.velocityfinal= function(v,a,t){
  return v+a*t
}
exports.timefinal= function(vf,v,a){
  return vf-v/a
}
