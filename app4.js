let wolfTimeout = (func, time = 500) => {
  setTimeout(func, time);
};
function first(callbackS, massage) {
  log(massage);
  wolfTimeout(callbackS);
}
function second(callbackT, massage) {
  log(massage);
  wolfTimeout(callbackT);
}

let third = (callbackF, message) => {
  log(message);
  wolfTimeout(callbackF);
};

let Fourth = (callbackFi, message) => {
  wolfTimeout(callbackFi, 2000);
  log(message);
};
let fifth = (massage) => {
  log(massage);
};

wolfTimeout(() =>
  first(
    () =>
      second(
        () => third(() => Fourth(() => fifth('EEEEE'), 'DDDD'), 'CCC'),
        'BB'
      ),
    'A'
  )
);

export let app4 = () => {};
