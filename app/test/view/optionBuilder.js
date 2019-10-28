const { expect } = require('../Common');
const { optionBuilder } = require('../../view');

const contact = {
  name: 'Adrien',
  phone: '+330652971605',
  email: 'adrienvalcke@icloud.com',
};

describe('#view optionBuilder', function() {
  context('when using optionBuilder', function() {
    it('should return string with proper contact information', function() {
      expect(optionBuilder(contact)).to.equal('<option value="Adrien, +330652971605, adrienvalcke@icloud.com">Adrien, +330652971605, adrienvalcke@icloud.com</option>');
    });

    it('should throw an error if the contact param isn\'t the expected object', function() {
      expect(() => optionBuilder()).to.throw();
      expect(() => optionBuilder(null)).to.throw();
      expect(() => optionBuilder(undefined)).to.throw();
      expect(() => optionBuilder(NaN)).to.throw();
      expect(() => optionBuilder('')).to.throw();
      expect(() => optionBuilder(true)).to.throw();
      expect(() => optionBuilder(5)).to.throw();
      expect(() => optionBuilder(5.5)).to.throw();
      expect(() => optionBuilder([])).to.throw();
      expect(() => optionBuilder({ name: 'Adrien' })).to.throw();
      expect(() => optionBuilder({ name: 'Adrien', email: 'adrienvalcke@icloud.com' })).to.throw();
    });
  });
});
