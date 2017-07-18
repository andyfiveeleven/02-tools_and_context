'use strict';

module.exports = exports = {}

//map
exports.map = (arr, callback) => {
  if(!arr) throw new Error('array not provided');
  if(!callback) throw new Error('callback not provided');
  return Array.prototype.map.call(arr, callback);
};

// map([1,2,3,4], function(n){console.log(n*2)})

//filter
exports.filter = (arr, callback) => {
  if(!arr) throw new Error('your filter is broke');
  return Array.prototype.filter.call(arr, callback);
};

// filter([1,2,3,4], function(n){ console.log(n !==3)})

//reduce
exports.reduce = (arr, callback, init) => {
  if(!arr) throw new Error('your reduce is broke');
  return Array.prototype.reduce.call(arr, callback, init);
};

// reduce([1,2,3,4], function(sum, value){ return sum + value}, 0);



//concat
exports.concat = (arr1, arr2) => {
  if(!arr1) throw new Error('your concat is broke');
  return Array.prototype.concat.apply(arr1, arr2);
};

// concat([1,2,3], [4,5,6]);

//splice

exports.splice = (arr, start, deleteCount, added) => {
  if(!arr) throw new Error('your splice is broke without an arr');
  if(!start) throw new Error('your splice start is broke');
  return Array.prototype.splice.call(arr, start, deleteCount, added);
  //i could return the array by putting return arr here, but i didn't know what you wanted.
};

// splice([1,2,3, 'nick sucks', 5], 3, 1, 4);
