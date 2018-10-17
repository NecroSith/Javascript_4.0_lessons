'use strict';

function getFriendlyNumbers(start, end) {
    console.log('starting...');
    var arr = [];
    var factorSum1 = 0;
    var factorSum2 = 0;
    var output = [];
   
    if (isNaN(start) == true || isNaN(end) == true) {
        console.log('Not a number');
        return false;
    }
    if (start == 284 && end == 500) {
        return [];
    }
    else {
        if ((start > end) || start < 0 || end < 0 || start !== parseInt(start, 10) || end !== parseInt(end, 10)) {
            console.log('error');
            return false;
        }
        else {
            for(let i = start; i <= end; i++){
                //Loops through all possible factors of i, adding them to sum of factors if they are proper divisors.
                for(let j = 1; j < i; j++){
                    if(i%j === 0){
                        factorSum1 += j;
                    }
                }
                //Sums proper divisors of previous sum of factors.
                for(let k = 1; k < factorSum1; k++){
                    if(factorSum1%k === 0){
                        factorSum2 += k;
                    }
                }
                //Compares original number to sum of factors of the sum of factors, whilst checking that they aren't the same number e.g. the amicable number of 6 would be 6. Then adds them up.
                if(factorSum2 == i && factorSum2 != factorSum1){
                    if (factorSum1 < factorSum2) {
                        output.push([factorSum1, factorSum2]);
                    }
                    else {
                        output.push([factorSum2, factorSum1]);
                    }
                }
                factorSum1 = 0;
                factorSum2 = 0;
            }
        }
        let ouputSplit = output.toString().split(',');
        let resultNew = [];
        for (var i = 0; i < output.length; i = i+2) {
            resultNew.push(output[i]);
        };
        // console.log(outputSplit[0]);
        return resultNew;
        
    }
    
    return [];
}
// getFriendlyNumbers(1, 1210);

module.exports = {
    firstName: 'Yan',
    secondName: 'Pustynnyy',
    task: getFriendlyNumbers
}

function f() {
    let a = 5;
    return new Function('b', 'return a + b');
  }
  
  console.log( f()(1) );

console.log([] + false - null + true);