const atbash = (string) => {
  return string.split("").map(el => {
    const charCode = el.charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {
      return String.fromCharCode(65 + (90 - charCode));
    } else if (charCode >= 97 && charCode <= 122) {
      return String.fromCharCode(97 + (122 - charCode));
    }
    return el;
  }).join("");
};

module.exports = atbash;
