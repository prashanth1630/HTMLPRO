function rangeOfNumbers(startNum, endNum) {
if(startNum==endNum){
  return [startNum];
}
else{
  var a= rangeOfNumbers(startNum, endNum-1);
  a.push(endNum);
  return a;
}
}
console.log(rangeOfNumbers(1,5));

