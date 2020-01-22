/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let spam = str.toLowerCase();
  let result = spam.includes("1xbet") || str.includes("xxx") ? true : false;
  return result;
}
