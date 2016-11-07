async function wait(seconds) {
  await setTimeout(function(){
    console.log('Console log after async await:', new Date());
  }, seconds * 1000);
}

console.log('Console log before calling wait:', new Date());

wait(3);

console.log('Console log after calling wait:', new Date());