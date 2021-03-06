const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    let calc = 0;
    matrix.forEach((item) => {
      item.map(item => item == "^^" ? calc += 1 : calc);
      });
      return calc;
};
