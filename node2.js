globalThis.__proto__.log = console.log;
let kim = 0;

function wolfTest(param1) {
  if (param1) {
    param1();
  }
  kim += 1;
}

wolfTest(function () {
  wolfTest(function () {
    wolfTest(function () {
      wolfTest(function () {
        wolfTest(function () {
          wolfTest(function () {
            wolfTest();
          });
        });
      });
    });
  });
});

// wolfTest(() =>
//   wolfTest(() => wolfTest(() => wolfTest(() => wolfTest(() => wolfTest()))))
// );

log(`node2: ${kim}`);
