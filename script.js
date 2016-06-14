var fibnum = 0;
var phi = 0;
var fibnums = [];
var currentNum = 0;

start();

function start() {
  var x = 0;  // 0 Seconds
  cycle();
  setTimeout(start, x*1000);
}

function cycle() {
  currentNum = currentNum + 1;
  fibnum = fibnums[currentNum - 1] + fibnums[currentNum - 2];
  fibnums.push(fibnum);
  phi = fibnums[currentNum] / fibnums[currentNum - 1];
}
