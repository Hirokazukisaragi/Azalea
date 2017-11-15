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
      myctx.drawImage(img, i*32, j*32);
    }
  }
}
