const without = function(source, itemsToRemove) {
  if(!source || !itemsToRemove) {
    return [];
  }
  
  let resultArray = [];
  for (let sourceIndex in source) {
    let removeItem = false;
    for (let itemToRemove of itemsToRemove) {
      if (source[sourceIndex] === itemToRemove) {
        removeItem = true;
      }
    }
    removeItem ? null : resultArray.push(source[sourceIndex]);
  }
  return resultArray;
};

module.exports = without;