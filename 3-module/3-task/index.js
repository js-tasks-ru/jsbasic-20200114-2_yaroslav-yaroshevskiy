/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  let newStr = "";
  if (!str) return str;

  else {
    newStr = str
      .split("-")
      .map( (literal, index) => index > 0 ? literal[0].toUpperCase() + literal.slice(1) : literal)
      .join("")
  }
  return newStr
}
