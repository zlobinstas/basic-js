const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
  }
  encrypt(message, key) {
    message,
    key
    if (!message && key || message && !key || !message && !key) {
      throw Error;
    } else {
      let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
      let dec = [];
      for (let i = 0, j = 0; i < message.length; i++,j++) {
        if (message[i].match(/[^A-Z]/gi)) {
          dec.push(message[i]);
          j--;
          continue;
        } else if (key.length == j) {
          j = 0;
        }
        dec.push(alphabet[(alphabet.indexOf(message[i].toLowerCase()) + alphabet.indexOf(key[j].toLowerCase()))%alphabet.length].toUpperCase());
      } return this.mode == true ? dec.join("") : dec.reverse().join("");
    } 
  }   
  decrypt(message, key) {
    message,
    key
    if (!message && key || message && !key || !message && !key) {
      throw Error;
    } else {
      let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
      let undec = [];
      for (let i = 0, j = 0; i < message.length; i++, j++) {
        if (message[i].match(/[^A-Z]/gi)) {
          undec.push(message[i]);
          j--;
          continue;
        } else if (key.length == j) {
          j = 0;
        }        
        undec.push(alphabet[(alphabet.indexOf(message[i].toLowerCase()) - alphabet.indexOf(key[j].toLowerCase()) + 26)%alphabet.length].toUpperCase());
      } return this.mode == true ? undec.join("") : undec.reverse().join("");
    } 
  } 
}



module.exports = VigenereCipheringMachine;
