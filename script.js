function double(x) {
  return x + x;
}

function halve(x) {
  return x/2;
}

function c(x) {
  return x * x;
}

var result = double(halve(c( 12 ) ) );

console.log(result);
