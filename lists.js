function arrayToList(arr){
  var list = {};
  var tmp = list;
  for(var i = 0; i < arr.length; i++){
    tmp.value = arr[i];
    if(arr[i+1] == null)
      tmp.rest = null;
    else
      tmp.rest = {};
    tmp = tmp.rest;
  }
  return list;
}

function listToArray(lst){
  var i = 0;
  var arr = [];
  var tmp = lst;
  for(var i = 0; tmp != null; i++){
    arr[i] = tmp.value;
    tmp = tmp.rest;
  }
  return arr;
}

function prepend(x, obj){
  var list = {};
  list.value = x;
  list.rest = obj;
  return list;
}

function nth(obj, x){
  var tmp = obj;
  for(var i = 0; i < x; i++){
    if(tmp == null)
      return undefined;
    tmp = tmp.rest;
  }
  return tmp.value;
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20