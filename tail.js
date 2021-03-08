const tail = function(array) {
  if(!Array.isArray(array)) {
    return undefined;
  }
  return (array.length <= 1) ? Array() : array.slice(1);
};

module.exports = tail;