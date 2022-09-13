globalThis.__proto__.log = console.log;
let kim = 0;

function M3(param1) {
  param1 && param1();
 
  kim += 1;
}

M3(function () {
  M3(function () {
    M3(function () {
      M3(function () {
        M3(function () {
          M3(function () {
            M3();
          });
        });
      });
    });
  });
});

// M3(() =>
//   M3(() => M3(() => M3(() => M3(() => M3()))))
// );

let testWolf = () =>{
    return 'kim22'
}
log(testWolf.toString())

log(`node2: ${kim}`);
