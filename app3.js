let kim = 0;

let mich3 = (param4) => {
  if (param4) {
    param4();
  }
  kim += 1;
};

mich3(() =>
  mich3(() => mich3(() => mich3(() => mich3(() => mich3(() => mich3)))))
);

log(`kimTest: ${kim}`);
export let app3 = () => {};
