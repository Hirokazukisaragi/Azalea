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

function moveup(){
  var y = -1;
  mychar.setY(y * 32);
  if(mychar.getY() < 0){
    mychar.setY(0);
  }
}
function movedown(){
  var y = 1;
  mychar.setY(y * 32);
  if(mychar.getY()*32 > 608){
    mychar.setY(608);
  }
}
function moveleft(){
  var x = -1;
  mychar.setX(x * 32);
  if(mychar.getX() < 0){
    mychar.setX(0);
  }
}
function moveright(){
  var x = 1
  mychar.setX(x * 32);
  if(mychar.getX()*32 > 608){
    mychar.setX(608);
  }
}
function init(){
  var mycanvas = document.getElementById("mycanvas");
  var myctx = mycanvas.getContext("2d");
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
