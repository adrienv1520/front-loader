/**
 * Stream helper
 *
 *    - getFileStream(path, options) -> Promise(ReadableStream or Error)
 */
const { createReadStream, stat: fsStat } = require('fs');
const { promisify, debuglog } = require('util');

const stat = promisify(fsStat);
const debug = debuglog('front-loader stream-helper');

// get a readable stream from a file
const getFileStream = async function getFileStream(path, options) {
  const stats = await stat(path);

  if (stats.isFile()) {
    const rstream = createReadStream(path, options);

    rstream.on('error', debug);

    if (rstream.readable) {
      return rstream;
    }

    throw new Error('stream not safely readable');
  } else {
    throw new Error(`no such file ${path}`);
  }
};

module.exports = {
  getFileStream,
};
