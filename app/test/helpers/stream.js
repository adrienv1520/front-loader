const path = require('path');
const { expect } = require('../Common');
const { stream: { getFileStream } } = require('../../helpers');

const contactsPath = path.join(__dirname, './fixtures/contacts.json');

describe('#helpers stream', function() {
  context('when using getFileStream', function() {
    it('should return a stream if the file exists', function(done) {
      getFileStream(contactsPath)
        .then((fileStream) => {
          expect(fileStream.constructor.name).to.equal('ReadStream');
          done();
        })
        .catch((error) => {
          expect(error).to.be.undefined;
          done();
        });
    });

    it('should reject an error if the file doesn\'t exist', function(done) {
      expect(getFileStream()).to.be.rejected.notify(done);
    });
  });
});
