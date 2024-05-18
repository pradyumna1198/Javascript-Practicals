var arr = new Array("pic/702300.png","pic/code.jpg","pic/Github-Mark.png","pic/hello.jpg" );
var i=1;
var ref;

function picLibrary(){
    document.images[0].src = arr[i];
   
   if(i < 3)
    i++;
  else
    i = 0;
  
}

function start() {
    ref = setInterval("picLibrary()", 1000);
}

function stop() {
     clearInterval(ref);
}