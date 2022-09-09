let buttonKim22 = document.getElementById('kim22');
let i;
buttonKim22.addEventListener('click', ()=>newFunc(10));
log();

let x = 0;
function testWolf(param1 ) {
  log(`wolfTest: ${i}`);
  --i;
  if (i > -2) {
    testWolf(param1);
  }
  return  i;
}


function newFunc(param1 = 5){
    i = param1
    log(testWolf(i));
}

newFunc()
