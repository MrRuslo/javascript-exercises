const repeatString = function(a, b) {
    var answer = '';
    if (b < 0){
        return "ERROR";
    }
    for (i = 0 ; i < b; i++) {
        
    answer = answer + a;}
    return answer;
    
};

module.exports = repeatString;
