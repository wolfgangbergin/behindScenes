globalThis.__proto__.log = console.log;
let userLeft = 0;
let userWatchingCatMeme = 1;

function testPromise() {
  return new Promise((successFunc, errFunc) => {
    switch (true) {
      case !!userLeft:
        errFunc({ message: 'userLeft!', name: 'Apple sucks!', count: 0 });
        break;
      case !!userWatchingCatMeme:
        errFunc({
          message: 'userWatchingCatMeme!',
          name: 'Apple sucks!',
          count: 0,
        });
        break;
      case !!userLeft === false && !!userWatchingCatMeme === false:
        successFunc({ message: 'Great job', name: 'thumbs up', count: 0 });
        break;
      default:
        log('default');
        break;
    }
  });
}

testPromise()
  .then((obj) => {
    obj.count += 1;
    return obj;
  })
  .then((obj) => {
    obj.count += 1;
    return obj;
  })
  .then((obj) => {
    obj.count += 1;
    return obj;
  })
  .then((obj) => {
    log(`${obj.message}  ${obj.count} ${obj.name} `);
  })
  .catch((err) => {
    log(`${err.message} ${err.name}`);
  });
