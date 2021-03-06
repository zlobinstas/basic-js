const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
    if (!Array.isArray(arr)) {
        throw Error;
    };
    let result = [];
    arr.forEach(item => result.push(item));
    result.filter(item => result[result.length - 1] == '--discard-next' || result[result.length - 1] == '--double-next' ? result.pop() : result);
    result.filter(item => result[0] == '--discard-prev' || result[0] == '--double-prev' ? result.shift() : result);
    for (let i = 0; i < result.length; i++) {
        if (result[i] == '--discard-next' && result[i+2] == '--discard-prev' || result[i] == '--discard-next' && result[i+2] == '--double-prev') {
            result.splice(i+2,1);
            i-=1;
        } else if (result[i] == '--discard-next') {
            result.splice(i,2);
            i -= 1;
        } else if (result[i] == '--discard-prev') {
            result.splice(i-1,2);
            i -= 1;
        } else if (result[i] == '--double-next') {
            result.splice(i,1,result[i+1]);
        } else if (result[i] == '--double-prev') {
            result.splice(i,1,result[i-1]);
        }
    };
    return result;
};

[1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]
