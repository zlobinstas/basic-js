const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (date === undefined || date === null) {
        return "Unable to determine the time of year!"
    } else if ( Object.prototype.toString.call(date) != '[object Date]') {
        throw Error;
    } else if(date.getMonth() >= 0 && date.getMonth() < 2 || date.getMonth() == 11) {
        return season[0];
    } else if (date.getMonth() >= 2 && date.getMonth() < 5) {
        return season[1];
    } else if (date.getMonth() >= 5 && date.getMonth() < 8) {
        return season[2];
    } else if (date.getMonth() >= 8 && date.getMonth() < 11) {
        return season[3];
    }

};

const season = ['winter', 'spring', 'summer', 'autumn'];


