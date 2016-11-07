var i = 1;

function progressBar(onStart, onProgress, onEnd) {
  onStart();
    while(i <= 100){
      if(i % 10 == 0){
        onProgress(i);
      }
      console.log(i);
      i++;
    }
  onEnd();
  
}
  


progressBar(function(){console.log("Starting")}, function(i){
  console.log("Current Progress", i)}, function(){
    console.log("This is the End")});

            