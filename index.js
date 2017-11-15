var mycanvas;
var myctx;
var nowMe;
var dX = false;
var dY = false;
var iX = false;
var iY = false;
var gTime;
var charCount = 0;
var isLock = false;
var mychar = {
  x:0,
  y:0,
  getX:function (){
    return this.x;
  },
  getY:function(){
    return this.y;
  },
  incX:function (x){
    //this.x += x;
    gTime = setInterval(function(){
    if(mychar.getX() > 608){
      mychar.setX(608);
    }
    mychar.x++;
    drawMe(mychar.x,mychar.y);
      charCount++;
    },33);
  },
  decX:function (x){
    //this.x += x;
    gTime = setInterval(function(){
    mychar.x--;
    if(mychar.getX() < 0){
      mychar.setX(0);
    }
    canvasDraw(mychar.x,mychar.y);
      charCount++;
    },33);
  },
  incY:function (y){
    //this.x += x;
    gTime = setInterval(function(){
    mychar.y++;
    if(mychar.getY() > 608){
      mychar.setY(608);
    }
    canvasDraw(mychar.x,mychar.y);
    charCount++
    },33);
  },
  decY:function (y){
    gTime = setInterval(function(){
    mychar.y--;
    if(mychar.getY() < 0){
      mychar.setY(0);
    }
    canvasDraw(mychar.x,mychar.y);
      charCount++;
    },33);
  },
  setX:function(x){
    this.x = x;
  },
  setY:function(y){
    this.y = y;
  }
}

var movex=0;
var movey=0;
  //moveup=-32function drawMe(x,y){
  nowMe = upimg;
function drawMe(x,y){
  myctx.drawImage(nowMe,x,y);
}

function init(){
  var t = 0;
  mycanvas = document.getElementById("mycanvas");
  myctx = mycanvas.getContext("2d");
  nowMe = upimg;
  inter = setInterval(function () {
    var x = mychar.getX();
    var y = mychar.getY();
    canvasDraw(x,y);
  },33);
}

function canvasDraw(x,y){
  var t = 0;

  for(var i = 0;i <= 20;i++){
    for(var j = 0;j <= 20;j++){
      if(charCount >= 32){
        clearInterval(gTime);
        isLock = false;
        charCount = 0;
      }
      myctx.drawImage(bgimg, i*32, j*32);
      drawMe(x,y);
    }
  }
}
function moveUp(){
  if(isLock == false){
    isLock = true;
    nowMe = upimg;
    mychar.decY();
    if(mychar.getY() < 0){
      mychar.setY(0);
    }
    movey = 0;
  }
}
function moveDown(){
  if(isLock == false){
    isLock = true;
    nowMe = downimg;
    mychar.incY();
    if(mychar.getY() >= 608){
      mychar.setY(608);
    }
    movey = 0;
  }
}
function moveLeft(){
  if(isLock == false){
    isLock = true;
    nowMe = leftimg;
    mychar.decX();
    if(mychar.getX() < 0){
      mychar.setX(0);
    }
    movex = 0;
  }
}
function moveRight(){
  if(isLock == false){
    isLock = true;
    nowMe = rightimg;
    mychar.incX();
    if(mychar.getX() >= 608){
      mychar.setX(608);
    }
    movex = 0;
  }
}
