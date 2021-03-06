const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result: [],

  getLength() {
      this.result.length;
      return this;
  },
  addLink(value) {
      if (value === undefined) {
          this.result.push("( )")
      } else {
          this.result.push(`( ${value} )`);
      } return this;
  },
  removeLink(position) {
      if (position !== parseInt(position) || typeof position !== 'number' || position > this.result.length || position < 1) {
          this.result = [];
          throw Error;
      } else {
          this.result.splice(position - 1,1);
      } return this;
  },
  reverseChain() {
      this.result.reverse();
      return this;
  },
  finishChain() {
      let res = this.result.join("~~");
      this.result = [];
      return res;
  }
};

module.exports = chainMaker;

