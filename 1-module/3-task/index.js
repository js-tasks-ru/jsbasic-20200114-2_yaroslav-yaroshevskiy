/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  let result = str = undefined || str == '' ? '' :
               str.length == 1 ? str.toUpperCase() :
               str[0].toUpperCase() + str.slice(1);
  return result;
}