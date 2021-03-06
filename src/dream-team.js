const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    let Team = [];
    if (!(Array.isArray(members))) return false;
    members.forEach((item) => {
        if (typeof item === 'string') {
            Team.push(item.split(" ").join("")[0].toUpperCase());
        }
    })
    return Team.sort().join("");
};
