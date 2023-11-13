function setup() {
  createCanvas(windowWidth, windowHeight);
  //background(0)
}

var x=25;  //宣告一個畫方框的x軸變數(var 宣告變數為一個全域變數)
var y=25;  //宣告一個畫方框的y軸變數
var r_b =50
var w=150;  //宣告一個畫方框的寬度變數
var r_s=20;  //宣告一個畫方框的高度變數
var mw = 50;

function draw() {
  //stroke(255)  //線條為白色
  noFill()  //不要充滿顏色
  x = 25;
  y = 25;
  mw = map(mouseX,0,width,w,w*2)
  r_b = mw;
  r_s = mw/4;
  background(0)
  while (y<=(height)){
    rectMode(CENTER)  //設定方框中心點為座標
    stroke(255)
    ellipse(x,y,r_b)   //畫一個圓
    stroke("#ffca3a")
    rect(x,y,mw)  //畫一個方框
    stroke("#abc4ff")
    ellipse(x+w/2,y+w/2,r_s)  //畫一個小圓
    x = x + w //把下一個要畫的方框，加上方框的寬度與方框間的距離5
    if(x>width+25){  //當x軸的值(x)已經超過視窗寬度(width)
    x = 25  //讓x軸回到最左邊的(0)
    y = y + w   //y軸的值要加上方框的高(h)與框間的距離(s)
    }
  }
}