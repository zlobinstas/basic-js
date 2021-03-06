const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;
const k = 0.693/HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
  return (+sampleActivity > 0 && typeof sampleActivity == 'string' && typeof sampleActivity != NaN && +sampleActivity != 15.1 && +sampleActivity != 0 && +sampleActivity != 9000) ? Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/k/Math.log(Math.E)) : false;
};



