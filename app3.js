let kim = 0 || 1;

const M3 = (param4 = M3) => {
    kim += 1;
  if (kim < 50){
    param4();
  }
   
 
 
};

M3(() =>
  M3(() => M3(() => M3(() => M3(() => M3(() => M3())))))
);

log(`app3: ${kim}`);
export let app3 = () => {};

let testWolf = () =>{
    return 'kim22'
}

log(testWolf.toString())