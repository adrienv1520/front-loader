/**
 * Option builder from a contact object
 *
 * optionBuilder(contact) -> String / Throw
 */

const { object: { is, hasOwn } } = require('../helpers');

const optionBuilder = function optionBuilder(contact) {
  if (is(Object, contact)
  && hasOwn(contact, 'name')
  && hasOwn(contact, 'phone')
  && hasOwn(contact, 'email')) {
    const contactString = `${contact.name}, ${contact.phone}, ${contact.email}`;
    return `<option value="${contactString}">${contactString}</option>`;
  }

  throw new Error(`unable to build option from contact data: ${contact}`);
};

module.exports = optionBuilder;
