const add = function(a, b) {
	let answer = a + b;

  return answer;
};

const subtract = function(a, b) {
	let answer = a - b;
  return answer;
};

const sum = function(arg) {
  let answer = 0; 

	arg.forEach(function(element) {
  
    answer = answer + element;
 
  });
  return answer;
  
};

const multiply = function(arg) {
  let answer = 1; 
  
	arg.forEach(element => {
  
    answer = answer *= element;
  
 
  });
  
  return answer;
  
  
};

const power = function(a, b) {
	let answer = 0; 

	
  
    answer = a ** b;
   
    return answer;
  
};

const factorial = function(arg) {
	let answer = 1;
  for ( var i = arg; i >= 1; i--) {
    answer = answer *= i;
    
  } 
  return answer;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

factorial([8]);