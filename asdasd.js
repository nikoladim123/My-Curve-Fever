var RAF = setInterval(update, 1000 / 60);

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var w = canvas.width
var h = canvas.height
var keys = []

window.addEventListener("keydown", function(e) {
  keys[e.keyCode] = true
})
window.addEventListener("keyup", function(e) {
  keys[e.keyCode] = false
})

var player = {
  x: w / 2, //player position X
  y: h / 2, //player position Y
  r: 3,
  a: 0,
  t: 3 * (Math.PI / 180),
  s: 1.5,
  c: "#8E35EF",
  h: 250, //isprekidana linija
  ht: 1
}


function getCIDCol(ctx) {
  next.x = player.x + Math.cos(player.a) * (player.r + 1);
  next.y = player.y + Math.sin(player.a) * (player.r + 1);

  var id = ctx.getImageData(next.x, next.y, 1, 1);
  //console.log(id);
  console.log(id.data[1]);
  return (id.data[1]);
}

var next = {
  x: 0,
  y: 0
};

//update function
function update() {

  if (keys[39]) {
    player.a += player.t
  }
  if (keys[37]) {
    player.a -= player.t
  }

  player.x += Math.cos(player.a) * player.s
  player.y += Math.sin(player.a) * player.s


  if (Math.floor(Math.random() * 100) == 1) {
    player.ht = setTimeout(function() {
      player.ht = 1;
    }, player.h)
  }

  // draw collision status
  if (getCIDCol(ctx)) {
    ctx.fillStyle = '#F00';
    //clearInterval(RAF);

  } else ctx.fillStyle = '#0F0';
  ctx.fillRect(4, 4, 16, 16);

  if (getCIDCol(ctx) >= 51 && getCIDCol(ctx) <= 53) {
    clearInterval(RAF);
  }

  render()
}

var image = new Image();
image.src = 'https://42works.net/wp-content/uploads/2015/02/How-to-Create-Short-URLs-For-Your-Blog-Using-Google-Shortener.png';
ctx.drawImage(image, 0, 0, 400, 400)

function render() {
  if (player.ht == 1) {
    ctx.beginPath()
    ctx.arc(player.x, player.y, player.r, 1, Math.PI * 2, false)
    ctx.fillStyle = player.c
    //ctx.strokeStyle="yellow";
    //ctx.stroke();
    ctx.fill();
    ctx.closePath()
  }
  image.src = 'https://42works.net/wp-content/uploads/2015/02/How-to-Create-Short-URLs-For-Your-Blog-Using-Google-Shortener.png';
  ctx.drawImage(image, player.x, player.y, 10, 10)
}
