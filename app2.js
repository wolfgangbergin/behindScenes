let userLeft = 0;
let userWatchingCatMeme = 0;

function testFunc(successFunc, errFunc) {
  switch (true) {
    case !!userLeft:
      errFunc({ message: 'userLeft!', name: 'Apple sucks!' });
      break;
    case !!userWatchingCatMeme:
      log(errFunc);
      errFunc({ message: 'userWatchingCatMeme!', name: 'Apple sucks!' });
      break;
    case !!userLeft === false && !!userWatchingCatMeme === false:
      successFunc({ message: 'Great job', name: 'thumbs up', count: 0 });
      break;
    default:
      log('default');
      break;
  }
}



testFunc((obj, ) => {
  obj.count += 1;
  

}, (err) => {

  log(`${err.message} ${err.name}`);
});

export let B = function () {};


//log(`${obj.message}  ${obj.count} ${obj.name} `);