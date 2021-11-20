const cesar = require("./algoritms/cesar");
const atbash = require("./algoritms/atbash");

const encode = (config, string) => {
  let modifiedString = string.toString();
  const arrayConfigs = config.split("-");
  for (let i = 0; i < arrayConfigs.length; i++) {
    switch (arrayConfigs[i]) {
      case "C1":
        modifiedString = cesar(modifiedString);
        break;
      case "C0":
        modifiedString = cesar(modifiedString, -1);
        break;
      case "A":
        modifiedString = atbash(modifiedString);
        break;
      case "R1":
      case "R0":
        modifiedString = cesar(modifiedString, 13);
        break;
      default:
        modifiedString = "";
    }
  }
  return modifiedString;
};

module.exports = encode;
