var beam = {
  x:10,
  y:20,
  getX:function (){
    return this.x;
  }
}
function init(){
  var mycanvas = document.getElementById("mycanvas");
  var myctx = mycanvas.getContext("2d");
  for(var i = 0;i <= 20;i++){
    for(var j = 0;j <= 20;j++){
      if(i == 0 && j == 0){
        myctx.drawImage(upimg,0,0);
      }
      else if(((i) % 2) == 0){
        myctx.drawImage(bgimg, i*32, j*32);
      }else{
        myctx.drawImage(mtimg,i*32,j*32);
      }
    }
  }
}
