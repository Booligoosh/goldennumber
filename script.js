var fibnum = 0;
var phi = 0;
var fibnums = [0,1];
var currentNum = 1;
var a = 0;
var b = 0;

start();

function start() {
  var x = 0;  // 0 Seconds
  cycle();
  setTimeout(start, x*1000);
}

function cycle() {
  currentNum = currentNum + 1;
  a = currentNum - 1;
  b = currentNum - 2;
  fibnum = fibnums[a] + fibnums[b];
  fibnums.push(fibnum);
  phi = fibnums[currentNum] / fibnums[a];
  updateScreen();
}

function updateScreen() {
    var li = document.createElement("LI");
    var t = document.createTextNode(fibnum);
    li.appendChild(t);
    document.getElementById("fibnumsList").appendChild(li);
    document.getElementById("phiDisplay").innerHTML = phi;
}
