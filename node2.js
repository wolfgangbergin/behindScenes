globalThis.__proto__.log = console.log;
let kim = 0;

function M3(param1) {
  if (param1) {
    param1();
  }
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

log(`node2: ${kim}`);
