/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let result = 1;

  if ( n == 1 || n == 0 ) {
    return result;
  }
  else {
    for (i = n; i > 1; i--) {
      result *= i;
    }
    return result;
  }
}
