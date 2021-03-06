const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let current = 0;
    let result = 0;
      if (Array.isArray(arr)) {
        for (let num of arr) {
            current = this.calculateDepth(num);
              current > result ? result = current : current = 0;
            } return result + 1;
        } else {
        return 0;
        } 
  }
};


