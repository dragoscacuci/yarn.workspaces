const validateNumber = require("validateNumber");

module.exports = function (a, b) {
  validateNumber(a);
  validateNumber(b);

  return a + b;
};
