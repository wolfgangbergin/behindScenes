let userLeft = 0;
let userWatchingCatMeme = 0;

function testFunc(successFunc, errFunc) {
  switch (true) {
    case !!userLeft:
      errFunc({ message: 'userLeft!', name: 'Apple sucks!' });
      break;
    case !!userWatchingCatMeme:
      errFunc({ message: 'userWatchingCatMeme!', name: 'Apple sucks!' });
      break;
    case !!userLeft === false && !!userWatchingCatMeme === false:
      successFunc({ message: 'Great job', name: 'two thumbs up' });
      break;
    default:
      log('default');
      break;
  }
}

testFunc(
  (obj) => {
    log(`${obj.message} ${obj.name}`);
  },
  (err) => {
    log(`${err.message} ${err.name}`);
  }
);

export let B = function () {};
