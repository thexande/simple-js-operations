module.exports = {
  stringToArray: function(str){
    return str.split(" ");
  },
  swapInPlace: function(arr, pos1, pos2){
    var holder = arr[pos1];
    arr[pos1] = arr[pos2];
    arr[pos2] = holder;
    return arr;
  },
  arrayToString: function(arr){
    return arr.join(', ');
  },
  keys: function(obj){
    return Object.keys(obj)
  }
};
