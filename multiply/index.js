const add = require("add");
const validateNumber = require("validateNumber");

module.exports = function (a, b) {
  validateNumber(a);
  validateNumber(b);

  let sum = 0;

  if (b >= 0) {
    for (let i = 0; i < b; i++){
      sum += a;
    }
  } else {
    for (let i = 0; i > b; i--){
      sum -= a;
    }
  }

  return sum;
};
