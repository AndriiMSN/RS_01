const fs = require("fs");
const cesar = require('./algoritms/cesar')
const atbash = require("./algoritms/atbash");

class CipherClass {
  constructor(config, inputFile, outputFile) {
    this.config = config;
    this.inputFile = inputFile;
    this.outputFile = outputFile;
    this.inputText = "";
    this.outputText = "";
  }

  cesar(string, shift = 1) {
   return cesar(string,shift)
  }

  atbash(string) {
   return atbash(string)
  }

  encode() {
    const arrayConfigs = this.config.split("-");
    for (let i = 0; i < arrayConfigs.length; i++) {
      switch (arrayConfigs[i]) {
        case "C1":
          this.outputText = this.cesar(this.inputText);
          this.inputText = this.outputText;
          break;
        case "C0":
          this.outputText = this.cesar(this.inputText, -1);
          this.inputText = this.outputText;
          break;
        case "A":
          this.outputText = this.atbash(this.inputText);
          this.inputText = this.outputText;
          break;
        case "R1":
        case "R0":
          this.outputText = this.cesar(this.inputText, 13);
          this.inputText = this.outputText;
          break;
        default:
          this.outputText = "";
      }
    }
    return this.outputText;
  }

  start() {
    const inputFile = this.inputFile;
    const outputFile = this.outputFile;

    if (outputFile !== null) {
      fs.writeFileSync(outputFile, "");
    }

    if (inputFile !== null) {
      if (!fs.existsSync(inputFile)) {
        console.log("Input file doesn't exist");
        process.exit(103);
      } else {
        const readStream = fs.createReadStream(inputFile, "utf-8");
        let writeStream = null;
        if (outputFile !== null) {
          writeStream = fs.createWriteStream(outputFile);
        }
        readStream.on("data", chunk => {
          this.inputText = chunk.toString();
          if (outputFile !== null) {
            writeStream.write(this.encode());
          } else {
            process.stdout.write(this.encode());
          }
        });
      }
    } else {
      process.stdin.on("data", data => {
        this.inputText = data.toString();
        this.outputText = "";
        if (outputFile === null) {
          process.stdout.write(this.encode());
        } else {
          const writeStream = fs.createWriteStream(outputFile);
          writeStream.write(this.encode());
        }
      });
    }
  }
}

module.exports = CipherClass;
