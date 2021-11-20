const cesar = (string, shift = 0) => {
  return string.split("").map(el => {
      const charCode = el.charCodeAt(0);
      if (charCode >= 65 && charCode <= 90) {
        let currChar = ((charCode - 65 + shift) % 26) + 65;
        if (shift === -1 && currChar < 65) {
          currChar = 90;
        }
        return String.fromCharCode(currChar);
      } else if (charCode >= 97 && charCode <= 122) {
        let currChar = ((charCode - 97 + shift) % 26) + 97;
        if (shift === -1 && currChar < 97) {
          currChar = 122;
        }
        return String.fromCharCode(currChar);
      }
      return el;
    }
  ).join("");
};

module.exports = cesar;
