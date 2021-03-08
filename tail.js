const tail = function(array) {
  return (array.length <= 1) ? Array() : array.slice(1);
};

module.exports = tail;