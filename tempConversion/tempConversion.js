const ftoc = function(num) {
  let start = ((num - 32) * (5/9));
  answer = parseFloat(start.toFixed(1));
  return(answer);
  
};    

const ctof = function(num) {
  let start = num * 9 / 5 + 32; 
  answer = parseFloat(start.toFixed(1));
  return(answer);

};



module.exports = {
  ftoc,
  ctof
};
