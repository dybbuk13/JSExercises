function reverseArray(x){
  var y = [];
  var tmp;
  var k = x.length - 1;
  
  for(var i = 0; i < x.length; i++){
    tmp = x[k];
    y[i] = tmp;
    k--;
  }
  return y;
}

function reverseArrayInPlace(x){
  var tmp;
  
  if(x.length != 1){
    tmp = x.pop();
    //console.log(tmp);
    reverseArrayInPlace(x);
    x.unshift(tmp);
  }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];

reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]