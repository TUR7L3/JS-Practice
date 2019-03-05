const ftoc = function(arg) {
  let result;
  result = (arg - 32) * (5/9);
  return Number(Math.round(result+'e1')+'e-1')
}

const ctof = function(arg) {
  let result;
  result = arg * (9/5) +32;
  return Number(Math.round(result+'e1')+'e-1')
}

module.exports = {
  ftoc,
  ctof
}
