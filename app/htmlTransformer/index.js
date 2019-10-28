/**
 * Transformer module
 *
 * Builds the whole html document with the select component
 * from contacts received in object mode
 */
const { Transform } = require('stream');
const { debuglog } = require('util');
const { head, footer, optionBuilder } = require('../view');

const debug = debuglog('front-loader html-transformer');

// html transformer
const htmlTransformer = function htmlTransformer() {
  const transformer = new Transform({
    writableObjectMode: true,
    readableObjectMode: false,

    // transform
    transform(data, encoding, callback) {
      try {
        this.push(optionBuilder(data));
      } catch (e) {
        debug(e);
      }

      callback();
    },

    // flush
    flush(callback) {
      this.push(footer);
      callback();
    },
  });

  transformer.on('error', (err) => {
    debug(err);
  });

  transformer.push(head);

  return transformer;
};

module.exports = htmlTransformer;
