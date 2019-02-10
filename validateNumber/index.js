const NUMBER = 'number';

module.exports = function (n) {
  if (typeof n !== NUMBER) {
    throw new Error(`${n} is not a number.`);
  }
};
