function first(callbackS, massage) {
    log(massage);
    setTimeout(callbackS, 1000);
  }
  function second(callbackT, massage) {
    log(massage);
    setTimeout(callbackT, 1000);
  }
  
  let third = (message, callbackF) => {
    log(message);
    setTimeout(callbackF, 1000);
  };
  
  let Fourth = (message, fifth) => {
      setTimeout(fifth , 1000);
    log(message);
  };
  let fifth = (massage) => {
    log(massage);
  };
  
  setTimeout(
    () =>
      first(() => second(() => third('CCC', () => Fourth('DDDD', ()=>fifth('EEEEE'))), 'BB'), 'A'),
    1000
  );


export let app4 = ()=>{}