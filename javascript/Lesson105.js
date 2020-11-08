// Only change code below this line
function countdown(n){
  if(n<1){
return [];
  }
  else{
//return [n,...countdown(n-1)];
var arr=countdown(n-1);
arr.unshift(n);
return arr;
}
}
console.log(countdown(5));
// Only change code above this line
