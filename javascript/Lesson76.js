// Setup
function abTest(a, b) {
  // Only change code below this line
if(a>0 && b>0){
  

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
else if(a<0 ||b<0){
  console.log("undefined");
}
else{
  return 0;
}
}
abTest(2,2);
