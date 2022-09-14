globalThis.__proto__.log = console.log;
let kim = 0;

function M3(param1) {
  param1 && param1();

  kim += 1;
  return;
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



log(`node2: ${kim}`);
