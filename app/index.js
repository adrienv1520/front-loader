const http = require('http');
const { debuglog, promisify } = require('util');
const path = require('path');
const fs = require('fs');
const stream = require('stream');
const JSONStream = require('JSONStream');
const { stream: { getFileStream }, object: { is } } = require('./helpers');
const htmlTransformer = require('./htmlTransformer');

const pipeline = promisify(stream.pipeline);
const port = process.env.PORT || 2000;
const debug = debuglog('front-loader app');
const contactsPath = path.join(__dirname, './contacts/index.json');
let hasContactsChanged;

// watch for contacts file changes used for caching
fs.watchFile(contactsPath, () => {
  debug('contacts file has changed, next time a new html document will be rendered');
  hasContactsChanged = true;
});

// server
const httpServer = http.createServer(async (request, response) => {
  request.on('error', (err) => {
    debug(err);
    response.statusCode = 400;
    response.end(`bad request: ${err.message}`);
  });

  response.on('error', debug);

  if (request.method === 'GET' && request.url === '/') {
    try {
      const json = await getFileStream(contactsPath);

      if (is(Boolean, hasContactsChanged) && !hasContactsChanged) {
        response.statusCode = 304;
        response.end();
      } else {
        hasContactsChanged = false;
        response.statusCode = 200;
        await pipeline(
          json,
          JSONStream.parse('*'),
          htmlTransformer(),
          response,
        );
      }
    } catch (err) {
      debug(err);
      response.statusCode = 500;
      response.end(`unable to generate index page: ${err.message}`);
    }
  } else {
    response.statusCode = 404;
    response.end('not found');
  }
});

// listening to http port
httpServer.listen(port, () => {
  debug(`http server listening on port ${port}`);
});
