/**
 * Object helper library
 *
 * Exports :
 *   - exists(thing) -> Boolean
 *   - is(Type, thing) -> Boolean
 *   - hasOwn(thing, prop) -> Boolean
 */
const exists = function exists(thing) {
  return !(thing === undefined || thing === null || Number.isNaN(thing));
};

const is = function is(Type, thing) {
  return exists(Type)
  && exists(thing)
  && (thing.constructor === Type
  || thing instanceof Type);
};

const hasOwn = function hasOwn(thing, prop) {
  return exists(thing) && Reflect.ownKeys(thing).indexOf(prop) !== -1;
  // return exists(thing) && Object.prototype.hasOwnProperty.call(thing, prop);
};

module.exports = {
  exists,
  is,
  hasOwn,
};
