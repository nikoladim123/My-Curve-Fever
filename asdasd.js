
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

var w = canvas.width
var h = canvas.height
var keys = []


var player = {
  x: w / 2, //player position X
  y: h / 2, //player position Y
  r: 7,
  a: 0,
  t: 3 * (Math.PI / 180),
  s: 1,
  c: "#8E35EF",
  h: 250, //isprekidana linija
  ht: 1
}


function getCIDCol(ctx) {
  next.x = player.x + Math.cos(player.a) * (player.r + 1);
  next.y = player.y + Math.sin(player.a) * (player.r + 1);

  var id = ctx.getImageData(next.x, next.y, 1, 1);
  //console.log(id);
  console.log(id.data);
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


  if (Math.floor(Math.random() * player.h) == 1) {
    player.ht = setTimeout(function() {
      player.ht = 1;
    }, player.h)
  }

  // draw collision status
  if (getCIDCol(ctx)) {
    ctx.fillStyle = '#F00';
    clearInterval(myInterval);
  } else ctx.fillStyle = '#0F0';
  ctx.fillRect(4, 4, 16, 16);

  if (getCIDCol(ctx) >= 51 && getCIDCol(ctx) <= 53) {
    clearInterval(myInterval);
  }
  render();
}



function render() {
  if (player.ht == 1) {
    ctx.save();
    ctx.translate(player.x , player.y )
    ctx.rotate(player.a);
    ctx.fillStyle = player.c;
    ctx.fillRect(-1, 0, player.r,player.r);
    ctx.restore();
  }
  var image = new Image();
  image.src = 'https://42works.net/wp-content/uploads/2015/02/How-to-Create-Short-URLs-For-Your-Blog-Using-Google-Shortener.png';


ctxTwo.save();
ctxTwo.translate(player.x, player.y);
ctxTwo.rotate(player.a);
ctxTwo.drawImage(image, -5 , 0, 10, 10);
ctxTwo.restore();
//ctxTwo.fillRect(20,20,20,20);
//ctxTwo.fillStyle = '#0F0'

        //ctxTwo.rotate(player.t);
}
