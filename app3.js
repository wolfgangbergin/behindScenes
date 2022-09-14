import { app4 } from './app4.js';
let kim = 12;

const M3 = (param4 = M3) => {
  kim += 1;

  if (kim < 20) {
    param4();
  }

  return kim;
};

// log(M3(() => M3(() => M3(() => M3(() => M3(() => M3(() => M3())))))));

export let app3 = () => {};
