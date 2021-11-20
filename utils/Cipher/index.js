const fs = require("fs");
const ReadStream = require("../streams/readStream");
const WriteStream = require("../streams/writeStream");
const TransformStream = require("../streams/transformStream");

class CipherClass {
  constructor(config, inputFile, outputFile) {
    this.config = config;
    this.inputFile = inputFile;
    this.outputFile = outputFile;
  }

  validateFiles(mode, filePath) {
    if (!fs.existsSync(filePath)) {
      console.log(`${mode} file doesn't`);
      process.exit(103);
    }
  }

  start() {
    const inputFile = this.inputFile;
    const outputFile = this.outputFile;
    let readStream;
    let writeStream;

    if (inputFile !== null) {
      this.validateFiles("Input", inputFile);
      readStream = new ReadStream(inputFile);
    } else {
      readStream = process.stdin;
    }

    if (outputFile !== null) {
      this.validateFiles("Output", outputFile);
      writeStream = new WriteStream(outputFile);
    } else {
      writeStream = process.stdout;
    }

    const transformStream = new TransformStream(this.config);

    readStream.pipe(transformStream).pipe(writeStream)
  }
}

module.exports = CipherClass;
