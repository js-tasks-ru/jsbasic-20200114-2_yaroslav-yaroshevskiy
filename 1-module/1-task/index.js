/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
    let sum = 1;
    
    if ( n == 1 || n == 0 ) {
        return sum;
    }
    else {
        for ( let i = n; i != 1; --i) {
            sum *= i;
        }
        return sum;
    }
}
