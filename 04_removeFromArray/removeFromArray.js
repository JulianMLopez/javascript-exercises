const removeFromArray = function(arr, ...remove) {
    let a = arr;
    let b = remove;
    let c = a.filter(d => !b.includes(d));
    return c;
  };

// Do not edit below this line
module.exports = removeFromArray;
