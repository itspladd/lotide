const countOnly = function(arrayToCount, countableItems) {
  if(!arrayToCount || !countableItems) {
    return { };
  }
  
  const result = {};
  //Iterate through each item in the input array
  //If the key for that item has a truthy value, add or increment the appropriate key in the results
  for (let item of arrayToCount) {
    if (countableItems[item]) {
      if (result[item]) {
        result[item]++;
      } else {
        result[item] = 1;
      }
    }
  }

  return result;
};

module.exports = countOnly;