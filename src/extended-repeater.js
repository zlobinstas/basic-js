const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
    str = String(str);
    let arr = [];
    let arr_res = [];
    let qwer = "";
    (function addition(){
    if (String(options.addition)) {
        arr.push(String(options.addition));
        if (String(arr[0]) == 'undefined') {
          arr.pop();
        }
    }
    })();
    (function additionRepeatTimes() {
      if (options.additionRepeatTimes) {
        while (options.additionRepeatTimes) {
            arr_res.push(arr.concat());
            options.additionRepeatTimes--;
        } return arr = arr_res;
      }
    })(); 
    (function additionSeparator() {
        if (options.additionSeparator) {
            arr_res = arr.join(options.additionSeparator);
            arr = [];
        } else if (!options.additionSeparator && options.additionRepeatTimes == 0){
            arr_res = arr.join("|");
            arr = [];
        } 
        return arr.push(arr_res);
    })();

    (function separator() {
        arr.unshift(str);
        qwer = arr.join("");
        arr = [];
        if (options.separator && options.repeatTimes) {
            while (options.repeatTimes) {
                arr.push(qwer);
                options.repeatTimes--;
            } return qwer = arr.join(options.separator);
        } else if (options.repeatTimes) {
            while (options.repeatTimes) {
                arr.push(qwer);
                options.repeatTimes--;
            } return qwer = arr.join("+"); 
        } return qwer;
    })();
return qwer
};