const { Transform } = require("stream");
const encode = require("../Cipher/encode");

module.exports = class TransformStream extends Transform {
  constructor(config) {
    super();
    this.config = config;
  }

  _transform(chunk, _encoding, callback) {
    let data = encode(this.config, chunk.toString());
    this.push(data);
    callback();
  }
};
