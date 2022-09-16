import { app5 } from './app5.js';

const WOLFGANG = 'wolfgang bergin';

let count = -1;

const M3 = (param, callback) => {
  count += 1;

  if (count < WOLFGANG.length) {
    return callback(param + WOLFGANG[count], callback);
  }

  return param;
};

console.log(M3('', M3));

export let app4 = () => {};
