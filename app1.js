import {B} from './app2.js'
let buttonKim22 = document.getElementById('kim22');

let i;
const keyBoard = document.querySelector('.keyboard');

buttonKim22.addEventListener('click', () => newFunc(10));

let testKim = (param1) => {
  let x = 0;
  for (let i = 0; i < 1000000000; ++i) {
    x += i;
  }
  return param1;
};
let x = 0;
function testWolf(param1) {
 

  log('1');
  log('2');
  log('3');
  setTimeout(() => log(testKim('7')), 1);
  setTimeout(() => log(testKim('6')), 0);
  log( testKim('4'));

  // setTimeout(() => log('4'), 40);
  // setTimeout(() => log('5'), 900);
  // setTimeout(() => log('3'), 0);
  log('5');
}

function newFunc(param1 = 5) {
  i = param1;
  testWolf(i);
}

// newFunc();
