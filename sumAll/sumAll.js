const sumAll = function(a, b) {
    let answer = 0;
    
if (Number.isInteger(a) === true && Number.isInteger(b) === true) {
    if (a < b && a >= 0){
        for (i = a ; i <= b; i++){
            answer += i;
            
            
            }
            return(answer);

        }
    if (a > b && b >= 0){ 
        for (i = b; i <= a; i++){
            answer += i;
            
            }
            return(answer);


    
    

    }
    else {
        return("ERROR");}
    
    
    }   
    else {
        return("ERROR");}
 }

module.exports = sumAll;
