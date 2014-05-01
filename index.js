
'use strict';

module.exports = function* stringIterator(string) {
  for (let i = 0, len = string.length; i < len; i++)
    yield string[i];
}
