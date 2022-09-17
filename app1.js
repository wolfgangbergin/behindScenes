import { B } from './app2.js';
let buttonKim22 = document.getElementById('kim22');

const keyBoard = document.querySelector('.keyboard');

buttonKim22.addEventListener('click', () => log('kim22'));

let testKim = async (param1) => {
  let x = 0;

  for (let i = 0; i < 1500000000; ++i) {
    x += i;
  }
  return param1;
};
let wolf = 0;

async function testWolf() {
  log('1');

  if (!!wolf) {
    setTimeout(() => log(testKim('blog post 33')), 0);
  } else if (!wolf) {
    let worker = new Worker(testKim('blog post 22'));

    log(worker);
  }

  log('3');
  log('4');

  log('5');
}

function newFunc() {
  testWolf();
}

newFunc();
 