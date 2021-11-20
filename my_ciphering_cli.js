const CipherClass = require("./utils/Cipher")

let config = null;
let input = null;
let output = null;

const args = {
  c: 0,
  i: 0,
  o: 0
};

for (let i = 2; i < process.argv.length; i++) {
  let arg = process.argv[i];
  if (arg === "-c" || arg === "--config") {
    if (args.c > 0) {
      console.log("Duplicate argument");
      process.exit(104);
    }
    let configRegExp = /^'?([CR][01]|A)(-([CR][01]|A))*'?$/;
    if (process.argv[i + 1] && configRegExp.test(process.argv[i + 1])) {
      config = process.argv[i + 1];
      args.c++;
    } else {
      console.log("Invalid config");
      process.exit(100);
    }
  }

  if (arg === "-i" || arg === "--input") {
    if (args.i > 0) {
      console.log("Duplicate argument");
      process.exit(104);
    }
    if (process.argv[i + 1]) {
      input = process.argv[i + 1];
      args.i++;
    } else {
      console.log("No input file");
      process.exit(101);
    }
  }


  if (arg === "-o" || arg === "--output") {
    if (args.o > 0) {
      console.log("Duplicate argument");
      process.exit(104);
    }
    if (process.argv[i + 1]) {
      output = process.argv[i + 1];
      args.o++;
    } else {
      console.log("No output file");
      process.exit(102);
    }
  }
}

const Cipher = new CipherClass(config, input, output);
Cipher.start();
