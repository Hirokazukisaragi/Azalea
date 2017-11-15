var mycanvas;
var myctx;
var mychar = {
  x:0,
  y:0,
  getX:function (){
    return this.x;
  },
  getY:function(){
    return this.y;
  },
  setX:function (x){
    this.x += x;
  },
  setY:function(y){
    this.y += y;
  }
}

var moveup=-32;
var movedown=32;
var moveleft=-32;
var moveright=32;

function init(){
  mycanvas = document.getElementById("mycanvas");
  myctx = mycanvas.getContext("2d");
  inter = setInterval(function () {
    canvasDraw();
  }, 33);
}
function canvasDraw(){
  for(var i = 0;i <= 20;i++){
    for(var j = 0;j <= 20;j++){
      if(mychar.getX() == i*32 && mychar.getY() == j*32){
        myctx.drawImage(upimg,mychar.getX(),mychar.getY());
      }
      else if(((i) % 2) == 0){
        myctx.drawImage(bgimg, i*32, j*32);
      }else{
        myctx.drawImage(mtimg,i*32,j*32);
      }
    }
  }
}
function moveUp(){
  var y = moveup;
  mychar.setY(y);
  if(mychar.getY() < 0){
    mychar.setY(0);
  }
}
function moveDown(){
  var y = movedown;
  mychar.setY(y);
  if(mychar.getY() > 608){
    mychar.setY(608);
  }
}
function moveLeft(){
  var x = moveleft;
  mychar.setX(x);
  if(mychar.getX() < 0){
    mychar.setX(0);
  }
}
function moveRight(){
  var x = moveright
  mychar.setX(x);
  if(mychar.getX() > 608){
    mychar.setX(608);
  }
}
