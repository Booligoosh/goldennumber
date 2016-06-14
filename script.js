var fibnum = 0;
var phi = 0;
var fibnums = [];
var currentNum = 0;


while (1 === 1) {
  currentNum = currentNum + 1;
  fibnum = fibnums[currentNum - 1] + fibnums[currentNum - 2];
  fibnums.push(fibnum);
  phi = fibnums[currentNum] / fibnums[currentNum - 1];
}
