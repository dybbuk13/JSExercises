function range(start, end, step){  
  var arr = [];
  
  if(step == undefined)
    step = 1;

  if(start < end)
    end++;
  else
    end--;
  
  //console.log(numE);
  
  for(var i = 0; start != end; i++){
    arr[i] = start;
    start += step;
    //console.log(arr[i]);
  }
  return arr;
}

function sum(x){
  var value = 0;
  for(var i = 0; i < x.length; i++){
    value += x[i];
  }
  return value;
}

//var rArray = range(1, 10);
console.log(range(1,10));
console.log(sum(range(1,10)));
console.log(sum(range(1,10,2)));
console.log(sum(range(5, 2, -1)));