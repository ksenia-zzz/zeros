module.exports = function zeros(expr) {
    var result = BigInt(1);
    var index = 0;
    var index2 = 0;
    var len = expr.length;

    //while there are '!' elements in expr
    while(index <= len && expr.indexOf('!', index)!==-1) {
        index = expr.indexOf('!', index); // var index gets index of '!'; starts with index
        if(len!==index+1 && expr.charAt(index+1)==='!') {
            result = BigInt(result * countDoubleFactorial(+expr.substring(index2, index)));
            index++;
        }
        else {
            result = BigInt(result * countFactorial(+expr.substring(index2, index)));
        }
        index+=2 // cause '*' should be skipped
        index2 = index; //index2 - beginning, index - position of '!'; number is between them
    }
    return countZeros(result.toLocaleString()); // toLocaleString returns a string with a language-sensitive representation of the number
}

function countDoubleFactorial(num) {
    var result = BigInt(1);
    var next;
    if(num%2 === 0) { // for even numbers
        next = BigInt(2);
        while(next <= num) {
            result = BigInt(result*next);
            next += BigInt(2);
        }
    }
    else { // for odd numbers
        next = BigInt(1);
        while(next <= num){
            result = BigInt(result*next);
            next += BigInt(2);
        }
    }
    return BigInt(result);
}

function countFactorial(num) {
    var result = BigInt(1);
    var next = BigInt(1);
    while(next <= num) {
        result = BigInt(result*next);
        next++;
    }
    return BigInt(result);
}

function countZeros(result) {
    var count = 0;
    var len = result.length;
    len--;
    while(result[len]==='0') { // going from the end, until meeting sth except zero
        len--;
        count++;
    }
    return count;
}