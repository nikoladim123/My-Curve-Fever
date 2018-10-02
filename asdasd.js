var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var canvasTwo = document.getElementById("canvasTwo");
var ctxTwo = canvasTwo.getContext("2d");

window.addEventListener("keydown", function(e) {
  keys[e.keyCode] = true
});
window.addEventListener("keyup", function(e) {
  keys[e.keyCode] = false
});

//seting canvas width as width of screen
canvas.width = window.innerWidth;
canvasTwo.width =window.innerWidth;
canvas.height = window.innerHeight;
canvasTwo.height =window.innerHeight;
//canvas widht/height variables
var w = canvas.width;
var h = canvas.height;
var keys = []


var player = {
  x: w / 2, //player position X
  y: h / 2, //player position Y
  r: 10, //snake thicknes
  a: 0, //angle in percent for starting angle, and changed on event listener
  t: 3 * (Math.PI / 180), //calculate percent and adds to player.a (corner radius)
  s: 2, //snake speed
  c: "#8E35EF",
  h: 200, //duzina prekida na liniji
  hc: 4, //sansa
  ht: 1
}


function getCIDCol(ctx) {
  next.x = player.x + Math.cos(player.a) * (player.r + 2);
  next.y = player.y + Math.sin(player.a) * (player.r + 2);
  var id = ctx.getImageData(next.x, next.y, 5, 5);
  //console.log(id);
  //console.log(id.data);
  return (id.data[1]);
}

var next = {
  x: 0,
  y: 0
};
//interval for fps
var myInterval = setInterval(update, 1000 / 60);
//update function
function update() {
  ctxTwo.clearRect(0, 0, canvas.width, canvas.height);

  if (keys[39]) {
    player.a += player.t
  }
  if (keys[37]) {
    player.a -= player.t
  }

  player.x += Math.cos(player.a) * player.s
  player.y += Math.sin(player.a) * player.s

  //dashed line case
  if (Math.floor(Math.random() * 1000) <= player.hc) {
    player.ht = setTimeout(function() {
      player.ht = 1;
    }, player.h)
  }
  console.log(player.ht)

  // draw collision status
  if (getCIDCol(ctx) && player.ht == 1) {
    ctx.fillStyle = '#F00';
    clearInterval(myInterval);
    console.log('draw collison stoped it')
  } else {ctx.fillStyle = '#0F0';
  ctx.fillRect(4, 4, 16, 16);
}

  if (getCIDCol(ctx) >= 51 && getCIDCol(ctx) <= 53 || next.x > w || next.x < 0 || next.y > h || next.y < 0) {
    clearInterval(myInterval);
    console.log('stoped!!!');
  }
  render();
  test++;
}


var test = 1;
function render() {
  if (player.ht == 1) {
    ctx.save();
    ctx.translate(player.x, player.y)
    ctx.rotate(player.a);
    ctx.fillStyle = player.c;
    ctx.fillRect(0, -(player.r/2), player.r, player.r);
    ctx.restore();
  }



  var image = new Image();
  image.src = './custom.png';
  ctxTwo.save();
  ctxTwo.translate(player.x, player.y);
  ctxTwo.rotate(player.a);
  ctxTwo.drawImage(image, -7, -(player.r/2), player.r , player.r );
  ctxTwo.restore();

}
