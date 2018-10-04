var canvas = document.getElementById("canvas");
var canvasTwo = document.getElementById("canvasTwo");
var ctx = canvas.getContext("2d");
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
  a: 1.5*Math.PI, //angle in percent for starting angle, and changed on event listener
  t: 3 * (Math.PI / 180), //calculate percent and adds to player.a (corner radius)
  s: 2, //snake speed
  c: "#8E35EF",
  h: 200, //duzina prekida na liniji
  hc: 4, //sansa
  ht: 1,
  score:0
}


function getCIDCol(ctxParam) {
  next.x = player.x + Math.cos(player.a) * (player.r + 2);
  next.y = player.y + Math.sin(player.a) * (player.r + 2);
  var id = ctxParam.getImageData(next.x, next.y, 1, 1);
  //console.log(id);
  //console.log(id.data[1]);
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

  player.x += Math.cos(player.a) * player.s;
  player.y += Math.sin(player.a) * player.s;

  //dashed line case
  if (Math.floor(Math.random() * 1000) <= player.hc) {
    player.ht = setTimeout(function() {
      player.ht = 1;
    }, player.h)
  }

  // draw collision status
  // CHECK CANVAS.IMAGEDATA;
/*  if (getCIDCol(ctx) && player.ht == 1) {
    ctx.fillStyle = '#F00';
    clearInterval(myInterval);
    console.log('draw collison stoped it')
  } else {ctx.fillStyle = '#0F0';
  ctx.fillRect(4, 4, 16, 16);
}*/

  if (getCIDCol(ctx) >= 51 && getCIDCol(ctx) <= 53 || next.x > w || next.x < 0 || next.y > h || next.y < 0) {
    clearInterval(myInterval);
    console.log('stoped!!!');
  }

  if (getCIDCol(ctx)) {
    clearInterval(myInterval);
    console.log('stoped by secund layer');
  }
  render();
  //console.log(imgdata);
  test+=2;
}

var test=0;
function render() {
  if (player.ht == 1) {
    ctx.save();
    ctx.translate(player.x, player.y)
    ctx.rotate(player.a);
    ctx.fillStyle = player.c;
    ctx.fillRect(0, -(player.r/2), player.r, player.r);
    ctx.restore();
  }


  /*var image = new Image();
  image.crossOrigin = "Anonymous";
  image.src = './custom.png';
  ctxTwo.save();
  ctxTwo.translate(player.x, player.y);
  ctxTwo.rotate(player.a);
  ctxTwo.drawImage(image, -7, -(player.r/2), player.r , player.r );
  ctxTwo.restore();*/
var muu = -20;
  ctxTwo.save();
  ctxTwo.translate(player.x, player.y);
  ctxTwo.rotate((0.5 *Math.PI) +player.a);


//
//
//
//
//
//





// #path1979
	ctxTwo.beginPath();
	ctxTwo.lineWidth = 0.010680;
	ctxTwo.fillStyle = 'rgb(254, 254, 254)';
	ctxTwo.moveTo(-7.745940, 2.139752);
	ctxTwo.lineTo(-7.745940, -9.824680);
	ctxTwo.lineTo(0.101981, -9.824680);
	ctxTwo.lineTo(7.949902, -9.824680);
	ctxTwo.lineTo(7.949902, 2.139752);
	ctxTwo.lineTo(7.949902, 14.104185);
	ctxTwo.lineTo(0.101981, 14.104185);
	ctxTwo.lineTo(-7.745940, 14.104185);
	ctxTwo.fill();

// #path1977
	ctxTwo.beginPath();
	ctxTwo.lineWidth = 0.010680;
	ctxTwo.fillStyle = 'rgb(234, 234, 234)';
	ctxTwo.moveTo(-0.424264, 12.294564);
	ctxTwo.lineTo(-0.424264, 10.484944);
	ctxTwo.lineTo(-1.874299, 10.484754);
	ctxTwo.lineTo(-3.324334, 10.484565);
	ctxTwo.lineTo(-3.458236, 10.223032);
	ctxTwo.bezierCurveTo(-3.744928, 9.663072, -3.998238, 9.126857, -4.220762, 8.608890);
	ctxTwo.bezierCurveTo(-4.334727, 8.343613, -4.393581, 8.200692, -4.544434, 7.822883);
	ctxTwo.lineTo(-4.594187, 7.698278);
	ctxTwo.lineTo(-4.662828, 7.676780);
	ctxTwo.bezierCurveTo(-4.806843, 7.631674, -4.928505, 7.638935, -5.062029, 7.700604);
	ctxTwo.bezierCurveTo(-5.143668, 7.738309, -5.314891, 7.890430, -5.396716, 7.997953);
	ctxTwo.bezierCurveTo(-5.833371, 8.571743, -6.176946, 9.762219, -6.400778, 11.476995);
	ctxTwo.bezierCurveTo(-6.492295, 12.178103, -6.563687, 12.986743, -6.600863, 13.743307);
	ctxTwo.bezierCurveTo(-6.606333, 13.854653, -6.612673, 13.947260, -6.614950, 13.949102);
	ctxTwo.bezierCurveTo(-6.625352, 13.957502, -6.972455, 13.984562, -6.979726, 13.977532);
	ctxTwo.bezierCurveTo(-6.988116, 13.969432, -6.999835, 13.926062, -7.117988, 13.466085);
	ctxTwo.bezierCurveTo(-7.390181, 12.406425, -7.584149, 11.365038, -7.682538, 10.435095);
	ctxTwo.bezierCurveTo(-7.731165, 9.975485, -7.739342, 9.800327, -7.739784, 9.208741);
	ctxTwo.bezierCurveTo(-7.740230, 8.611960, -7.735144, 8.505052, -7.688421, 8.130182);
	ctxTwo.bezierCurveTo(-7.506927, 6.673867, -6.904627, 5.680389, -5.952624, 5.267032);
	ctxTwo.bezierCurveTo(-5.796556, 5.199267, -5.621803, 5.147132, -5.460495, 5.120212);
	ctxTwo.bezierCurveTo(-5.403270, 5.110662, -5.389824, 5.104966, -5.394193, 5.092129);
	ctxTwo.bezierCurveTo(-5.423371, 5.006381, -5.557591, 4.338838, -5.616946, 3.984271);
	ctxTwo.bezierCurveTo(-5.844532, 2.624741, -5.894038, 1.237718, -5.760538, -0.038769);
	ctxTwo.bezierCurveTo(-5.470333, -2.813637, -4.363502, -5.362295, -2.499186, -7.548561);
	ctxTwo.bezierCurveTo(-1.783080, -8.388332, -0.902159, -9.209590, -0.143257, -9.744925);
	ctxTwo.lineTo(-0.030198, -9.824678);
	ctxTwo.lineTo(0.097301, -9.824678);
	ctxTwo.lineTo(0.224800, -9.824678);
	ctxTwo.lineTo(0.377893, -9.713583);
	ctxTwo.bezierCurveTo(1.206835, -9.112043, 2.076166, -8.289955, 2.786100, -7.436246);
	ctxTwo.bezierCurveTo(3.372892, -6.730619, 3.812526, -6.098484, 4.248835, -5.333031);
	ctxTwo.bezierCurveTo(4.749790, -4.454164, 5.114789, -3.617952, 5.415953, -2.659166);
	ctxTwo.bezierCurveTo(5.741680, -1.622183, 5.929859, -0.573786, 6.007093, 0.634230);
	ctxTwo.bezierCurveTo(6.025681, 0.924959, 6.025699, 1.914536, 6.007093, 2.209547);
	ctxTwo.bezierCurveTo(5.957465, 2.997696, 5.878663, 3.635712, 5.741100, 4.363145);
	ctxTwo.bezierCurveTo(5.698746, 4.587110, 5.599865, 5.054438, 5.586940, 5.091729);
	ctxTwo.bezierCurveTo(5.582620, 5.104197, 5.597434, 5.109952, 5.658854, 5.119666);
	ctxTwo.bezierCurveTo(6.197702, 5.204885, 6.736989, 5.534638, 7.101594, 6.001848);
	ctxTwo.bezierCurveTo(7.572491, 6.605258, 7.831160, 7.376805, 7.929384, 8.470933);
	ctxTwo.bezierCurveTo(7.949338, 8.693207, 7.949369, 9.707273, 7.929384, 9.951532);
	ctxTwo.bezierCurveTo(7.825472, 11.224444, 7.641713, 12.238456, 7.222912, 13.849943);
	ctxTwo.bezierCurveTo(7.205810, 13.915743, 7.188125, 13.973161, 7.183612, 13.977531);
	ctxTwo.bezierCurveTo(7.176542, 13.984331, 6.829450, 13.957641, 6.819261, 13.949471);
	ctxTwo.bezierCurveTo(6.817221, 13.947871, 6.813231, 13.904581, 6.810401, 13.853351);
	ctxTwo.bezierCurveTo(6.757848, 12.902064, 6.717044, 12.401383, 6.639083, 11.751180);
	ctxTwo.bezierCurveTo(6.416061, 9.891159, 6.062593, 8.612324, 5.602177, 7.999684);
	ctxTwo.bezierCurveTo(5.508723, 7.875331, 5.348146, 7.736346, 5.249959, 7.694827);
	ctxTwo.bezierCurveTo(5.108841, 7.635156, 5.003046, 7.631955, 4.848076, 7.682670);
	ctxTwo.lineTo(4.783677, 7.703745);
	ctxTwo.lineTo(4.717691, 7.870483);
	ctxTwo.bezierCurveTo(4.404401, 8.662142, 4.066184, 9.409740, 3.686001, 10.150937);
	ctxTwo.bezierCurveTo(3.607244, 10.304480, 3.537109, 10.442445, 3.530146, 10.457525);
	ctxTwo.lineTo(3.517485, 10.484945);
	ctxTwo.lineTo(2.067098, 10.484945);
	ctxTwo.lineTo(0.616711, 10.484945);
	ctxTwo.lineTo(0.616711, 12.294565);
	ctxTwo.lineTo(0.616711, 14.104186);
	ctxTwo.lineTo(0.096186, 14.104186);
	ctxTwo.lineTo(-0.424340, 14.104186);
	ctxTwo.lineTo(-0.424340, 12.294564);
	ctxTwo.moveTo(-4.844267, 3.859698);
	ctxTwo.bezierCurveTo(-4.566704, 3.758625, -4.137560, 3.131001, -3.610287, 2.055004);
	ctxTwo.bezierCurveTo(-2.811126, 0.424166, -1.939223, -1.965079, -1.562424, -3.556680);
	ctxTwo.bezierCurveTo(-1.525196, -3.713930, -1.515694, -3.771885, -1.523334, -3.795101);
	ctxTwo.bezierCurveTo(-1.570180, -3.937458, -1.838194, -4.058693, -2.237522, -4.118164);
	ctxTwo.bezierCurveTo(-2.398149, -4.142086, -2.753301, -4.142048, -2.923929, -4.118094);
	ctxTwo.bezierCurveTo(-3.323116, -4.062047, -3.664183, -3.940731, -3.963392, -3.748362);
	ctxTwo.bezierCurveTo(-4.040752, -3.698625, -4.043192, -3.695624, -4.132518, -3.540312);
	ctxTwo.bezierCurveTo(-4.520806, -2.865191, -4.801856, -2.081584, -4.987873, -1.155452);
	ctxTwo.bezierCurveTo(-5.229965, 0.049859, -5.291232, 1.477950, -5.159610, 2.847648);
	ctxTwo.bezierCurveTo(-5.107536, 3.389542, -5.027720, 3.839684, -4.979347, 3.864287);
	ctxTwo.bezierCurveTo(-4.951101, 3.878652, -4.890680, 3.876600, -4.844267, 3.859697);
	ctxTwo.moveTo(0.291541, 1.070431);
	ctxTwo.bezierCurveTo(0.631032, 0.772940, 1.018966, 0.432209, 1.153616, 0.313251);
	ctxTwo.lineTo(1.398434, 0.096964);
	ctxTwo.lineTo(1.361011, 0.019126);
	ctxTwo.bezierCurveTo(1.255945, -0.199410, 1.079036, -0.385482, 0.849976, -0.518381);
	ctxTwo.bezierCurveTo(0.752539, -0.574913, 0.622205, -0.631180, 0.538796, -0.652722);
	ctxTwo.lineTo(0.489405, -0.665478);
	ctxTwo.lineTo(0.326097, -0.521621);
	ctxTwo.bezierCurveTo(0.236278, -0.442499, -0.147030, -0.105591, -0.525699, 0.227065);
	ctxTwo.lineTo(-1.214188, 0.831894);
	ctxTwo.lineTo(-1.186747, 0.895432);
	ctxTwo.bezierCurveTo(-1.054605, 1.201397, -0.788246, 1.444296, -0.439264, 1.577079);
	ctxTwo.bezierCurveTo(-0.390116, 1.595779, -0.344462, 1.611135, -0.337810, 1.611202);
	ctxTwo.bezierCurveTo(-0.331159, 1.611302, -0.047951, 1.367922, 0.291541, 1.070431);
	ctxTwo.moveTo(0.759788, -0.871297);
	ctxTwo.bezierCurveTo(0.755899, -0.876781, 0.746586, -0.881199, 0.739093, -0.881115);
	ctxTwo.bezierCurveTo(0.730906, -0.881025, 0.732317, -0.877105, 0.742628, -0.871297);
	ctxTwo.bezierCurveTo(0.764605, -0.858918, 0.768566, -0.858918, 0.759788, -0.871297);
	ctxTwo.moveTo(-3.565630, -5.238315);
	ctxTwo.bezierCurveTo(-3.136453, -5.641517, -2.566774, -6.207327, -1.964803, -6.828272);
	ctxTwo.bezierCurveTo(-0.622927, -8.212440, 0.133154, -9.117013, 0.085765, -9.281566);
	ctxTwo.bezierCurveTo(0.079777, -9.302359, 0.071883, -9.306222, 0.035377, -9.306222);
	ctxTwo.bezierCurveTo(-0.053376, -9.306222, -0.299130, -9.179404, -0.555825, -9.001140);
	ctxTwo.bezierCurveTo(-0.711577, -8.892977, -1.163893, -8.500000, -1.340787, -8.319156);
	ctxTwo.bezierCurveTo(-1.894471, -7.753112, -2.461304, -7.047842, -3.055631, -6.185499);
	ctxTwo.bezierCurveTo(-3.297513, -5.834539, -3.680461, -5.245217, -3.787740, -5.058848);
	ctxTwo.lineTo(-3.813567, -5.013981);
	ctxTwo.lineTo(-3.787765, -5.033922);
	ctxTwo.bezierCurveTo(-3.773574, -5.044889, -3.673613, -5.136866, -3.565630, -5.238315);
	ctxTwo.fill();

// #path1975
	ctxTwo.beginPath();
	ctxTwo.lineWidth = 0.010680;
	ctxTwo.fillStyle = 'rgb(203, 203, 203)';
	ctxTwo.moveTo(-0.424264, 12.294602);
	ctxTwo.lineTo(-0.424264, 10.485021);
	ctxTwo.lineTo(-1.874052, 10.482521);
	ctxTwo.lineTo(-3.323840, 10.480021);
	ctxTwo.lineTo(-3.442289, 10.250775);
	ctxTwo.bezierCurveTo(-3.845138, 9.471036, -4.230862, 8.621936, -4.520287, 7.877695);
	ctxTwo.bezierCurveTo(-4.595652, 7.683898, -4.595095, 7.684468, -4.735580, 7.657229);
	ctxTwo.bezierCurveTo(-4.839882, 7.637005, -4.921898, 7.643947, -5.016687, 7.681020);
	ctxTwo.bezierCurveTo(-5.546414, 7.888205, -5.995050, 8.962299, -6.291965, 10.734203);
	ctxTwo.bezierCurveTo(-6.428400, 11.548410, -6.543609, 12.636107, -6.590300, 13.550830);
	ctxTwo.bezierCurveTo(-6.608586, 13.909065, -6.613103, 13.954629, -6.630333, 13.954629);
	ctxTwo.bezierCurveTo(-6.638533, 13.954629, -6.718695, 13.961429, -6.808469, 13.969639);
	ctxTwo.bezierCurveTo(-6.898243, 13.977939, -6.974686, 13.982039, -6.978343, 13.978839);
	ctxTwo.bezierCurveTo(-6.991152, 13.967679, -7.162283, 13.300372, -7.254311, 12.902736);
	ctxTwo.bezierCurveTo(-7.500860, 11.837449, -7.642285, 10.962599, -7.719308, 10.026287);
	ctxTwo.bezierCurveTo(-7.744856, 9.715714, -7.748613, 8.740641, -7.725278, 8.475896);
	ctxTwo.bezierCurveTo(-7.614516, 7.219073, -7.276294, 6.349272, -6.662986, 5.744017);
	ctxTwo.bezierCurveTo(-6.349434, 5.434582, -5.908586, 5.203163, -5.483510, 5.124862);
	ctxTwo.bezierCurveTo(-5.407981, 5.110949, -5.390081, 5.104290, -5.394436, 5.091726);
	ctxTwo.bezierCurveTo(-5.397436, 5.083076, -5.422954, 4.970566, -5.451148, 4.841699);
	ctxTwo.bezierCurveTo(-5.797448, 3.258851, -5.909232, 1.702569, -5.783437, 0.215452);
	ctxTwo.bezierCurveTo(-5.562995, -2.390578, -4.612430, -4.822522, -2.983389, -6.948252);
	ctxTwo.bezierCurveTo(-2.174448, -8.003836, -1.168697, -9.000078, -0.211230, -9.694203);
	ctxTwo.lineTo(-0.031222, -9.824701);
	ctxTwo.lineTo(0.094177, -9.824701);
	ctxTwo.lineTo(0.219577, -9.824701);
	ctxTwo.lineTo(0.300923, -9.767893);
	ctxTwo.bezierCurveTo(0.815279, -9.408693, 1.520316, -8.795823, 2.070736, -8.229443);
	ctxTwo.bezierCurveTo(3.242939, -7.023251, 4.231027, -5.564674, 4.883881, -4.076788);
	ctxTwo.bezierCurveTo(6.027576, -1.470248, 6.313680, 1.369113, 5.736327, 4.383062);
	ctxTwo.bezierCurveTo(5.689366, 4.628212, 5.599189, 5.056238, 5.587133, 5.091212);
	ctxTwo.bezierCurveTo(5.583003, 5.103186, 5.603172, 5.110206, 5.681948, 5.124210);
	ctxTwo.bezierCurveTo(6.124571, 5.202901, 6.563449, 5.437596, 6.895467, 5.773151);
	ctxTwo.bezierCurveTo(7.520939, 6.405288, 7.857257, 7.334950, 7.939590, 8.659360);
	ctxTwo.bezierCurveTo(7.956726, 8.935002, 7.946550, 9.732851, 7.922026, 10.036257);
	ctxTwo.bezierCurveTo(7.827520, 11.205562, 7.625523, 12.306424, 7.222254, 13.849920);
	ctxTwo.bezierCurveTo(7.205062, 13.915720, 7.187828, 13.972857, 7.183958, 13.976882);
	ctxTwo.bezierCurveTo(7.180088, 13.980882, 7.096378, 13.976782, 6.997935, 13.967782);
	ctxTwo.lineTo(6.818946, 13.951402);
	ctxTwo.lineTo(6.812876, 13.880702);
	ctxTwo.bezierCurveTo(6.809535, 13.841873, 6.801267, 13.697893, 6.794501, 13.560800);
	ctxTwo.bezierCurveTo(6.740911, 12.475119, 6.596473, 11.226595, 6.416596, 10.294161);
	ctxTwo.bezierCurveTo(6.100922, 8.657791, 5.618086, 7.697526, 5.086193, 7.648247);
	ctxTwo.bezierCurveTo(5.007705, 7.640977, 4.889305, 7.660202, 4.819003, 7.691635);
	ctxTwo.bezierCurveTo(4.778365, 7.709805, 4.776124, 7.714125, 4.677999, 7.963393);
	ctxTwo.bezierCurveTo(4.392750, 8.688008, 4.065972, 9.406917, 3.665920, 10.189958);
	ctxTwo.bezierCurveTo(3.598923, 10.321093, 3.536557, 10.441111, 3.527328, 10.456665);
	ctxTwo.lineTo(3.510549, 10.484945);
	ctxTwo.lineTo(2.063668, 10.484945);
	ctxTwo.lineTo(0.616787, 10.484945);
	ctxTwo.lineTo(0.616787, 12.294565);
	ctxTwo.lineTo(0.616787, 14.104186);
	ctxTwo.lineTo(0.096261, 14.104186);
	ctxTwo.lineTo(-0.424264, 14.104186);
	ctxTwo.moveTo(-0.424264, 6.716148);
	ctxTwo.lineTo(-0.424264, 5.031157);
	ctxTwo.lineTo(0.096261, 5.031157);
	ctxTwo.lineTo(0.616787, 5.031157);
	ctxTwo.lineTo(0.616787, 5.071038);
	ctxTwo.lineTo(0.616787, 5.110919);
	ctxTwo.lineTo(0.702002, 5.110919);
	ctxTwo.bezierCurveTo(0.896599, 5.110919, 1.171598, 5.157650, 1.370027, 5.224438);
	ctxTwo.bezierCurveTo(1.693304, 5.333248, 1.973423, 5.496418, 2.253483, 5.739051);
	ctxTwo.bezierCurveTo(2.427975, 5.890225, 2.562474, 6.032713, 2.707577, 6.220119);
	ctxTwo.lineTo(2.806003, 6.347240);
	ctxTwo.lineTo(2.867460, 6.225105);
	ctxTwo.bezierCurveTo(2.901262, 6.157931, 2.974432, 5.999777, 3.030061, 5.873652);
	ctxTwo.bezierCurveTo(3.757975, 4.223271, 4.209614, 1.970141, 4.363096, -0.776578);
	ctxTwo.bezierCurveTo(4.399480, -1.427693, 4.423942, -2.308271, 4.429709, -3.174450);
	ctxTwo.lineTo(4.432069, -3.528398);
	ctxTwo.lineTo(4.531384, -3.269168);
	ctxTwo.bezierCurveTo(4.935093, -2.215413, 5.183098, -1.128919, 5.289242, 0.050962);
	ctxTwo.bezierCurveTo(5.327767, 0.479197, 5.335644, 0.689444, 5.335566, 1.287286);
	ctxTwo.bezierCurveTo(5.335451, 1.880266, 5.329196, 2.050561, 5.289547, 2.533581);
	ctxTwo.bezierCurveTo(5.178284, 3.888866, 4.869490, 5.342971, 4.403452, 6.706177);
	ctxTwo.bezierCurveTo(4.247085, 7.163566, 3.976307, 7.843495, 3.846569, 8.104520);
	ctxTwo.lineTo(3.827986, 8.141909);
	ctxTwo.lineTo(3.732481, 8.141909);
	ctxTwo.bezierCurveTo(3.663722, 8.141909, 3.636969, 8.145399, 3.636946, 8.154372);
	ctxTwo.bezierCurveTo(3.636923, 8.161222, 3.650782, 8.219653, 3.667732, 8.284209);
	ctxTwo.lineTo(3.698550, 8.401583);
	ctxTwo.lineTo(3.899174, 8.398873);
	ctxTwo.lineTo(4.099798, 8.396163);
	ctxTwo.lineTo(4.148671, 8.281504);
	ctxTwo.bezierCurveTo(4.250972, 8.041495, 4.451639, 7.526299, 4.558441, 7.229444);
	ctxTwo.bezierCurveTo(5.859414, 3.613424, 5.995767, 0.271330, 4.968670, -2.825487);
	ctxTwo.bezierCurveTo(4.839005, -3.216445, 4.551151, -3.939340, 4.414532, -4.217114);
	ctxTwo.lineTo(4.392839, -4.261219);
	ctxTwo.lineTo(0.096261, -4.261219);
	ctxTwo.lineTo(-4.200316, -4.261219);
	ctxTwo.lineTo(-4.222234, -4.216656);
	ctxTwo.bezierCurveTo(-4.345050, -3.966949, -4.598838, -3.340974, -4.725621, -2.975042);
	ctxTwo.bezierCurveTo(-5.469395, -0.828285, -5.645513, 1.463315, -5.252039, 3.874595);
	ctxTwo.bezierCurveTo(-5.054945, 5.082422, -4.722814, 6.296779, -4.246200, 7.552203);
	ctxTwo.bezierCurveTo(-4.134255, 7.847073, -3.957926, 8.286725, -3.918719, 8.368735);
	ctxTwo.lineTo(-3.903228, 8.401139);
	ctxTwo.lineTo(-2.163747, 8.401139);
	ctxTwo.lineTo(-0.424265, 8.401139);
	ctxTwo.moveTo(0.061941, 2.826793);
	ctxTwo.bezierCurveTo(-0.397704, 2.785451, -0.862330, 2.620733, -1.225072, 2.370527);
	ctxTwo.bezierCurveTo(-1.322741, 2.303158, -1.641837, 2.037742, -1.754242, 1.930375);
	ctxTwo.bezierCurveTo(-2.097297, 1.602698, -2.317024, 1.179329, -2.380231, 0.724222);
	ctxTwo.bezierCurveTo(-2.397673, 0.598635, -2.394458, 0.333892, -2.373791, 0.193954);
	ctxTwo.bezierCurveTo(-2.266790, -0.530590, -1.741736, -1.161019, -0.979108, -1.480633);
	ctxTwo.bezierCurveTo(-0.631352, -1.626376, -0.301533, -1.690850, 0.096263, -1.690850);
	ctxTwo.bezierCurveTo(0.505161, -1.690850, 0.831906, -1.625160, 1.194514, -1.470052);
	ctxTwo.bezierCurveTo(1.501927, -1.338554, 1.700732, -1.205225, 2.002607, -0.928103);
	ctxTwo.bezierCurveTo(2.283171, -0.670545, 2.404014, -0.531215, 2.524994, -0.325799);
	ctxTwo.bezierCurveTo(2.725307, 0.014319, 2.812384, 0.353362, 2.798447, 0.738917);
	ctxTwo.bezierCurveTo(2.791293, 0.936785, 2.773069, 1.049910, 2.720544, 1.222479);
	ctxTwo.bezierCurveTo(2.605363, 1.600912, 2.395621, 1.916461, 2.070443, 2.200534);
	ctxTwo.bezierCurveTo(1.538790, 2.664984, 0.805386, 2.893662, 0.061941, 2.826793);
	ctxTwo.moveTo(1.724922, 2.134646);
	ctxTwo.bezierCurveTo(1.877050, 2.023200, 2.027482, 1.880325, 2.115485, 1.763705);
	ctxTwo.bezierCurveTo(2.157387, 1.708177, 2.137381, 1.727262, 2.038949, 1.836719);
	ctxTwo.bezierCurveTo(1.957563, 1.927221, 1.764226, 2.096977, 1.663016, 2.166802);
	ctxTwo.bezierCurveTo(1.517672, 2.267074, 1.509041, 2.273785, 1.570480, 2.238752);
	ctxTwo.bezierCurveTo(1.601085, 2.221301, 1.670584, 2.174453, 1.724922, 2.134646);
	ctxTwo.moveTo(0.540745, 0.858303);
	ctxTwo.bezierCurveTo(1.340581, 0.155044, 1.396559, 0.103590, 1.389285, 0.078330);
	ctxTwo.bezierCurveTo(1.385001, 0.063455, 1.364239, 0.018733, 1.343147, -0.021053);
	ctxTwo.bezierCurveTo(1.223012, -0.247665, 1.000519, -0.454968, 0.752182, -0.571675);
	ctxTwo.bezierCurveTo(0.656662, -0.616565, 0.531444, -0.661919, 0.503029, -0.661919);
	ctxTwo.bezierCurveTo(0.486914, -0.661919, 0.174894, -0.391793, -0.875708, 0.531699);
	ctxTwo.lineTo(-1.218446, 0.832969);
	ctxTwo.lineTo(-1.180451, 0.915558);
	ctxTwo.bezierCurveTo(-1.085740, 1.121436, -0.931957, 1.297886, -0.734285, 1.427488);
	ctxTwo.bezierCurveTo(-0.607627, 1.510529, -0.393288, 1.608259, -0.332743, 1.610574);
	ctxTwo.bezierCurveTo(-0.323305, 1.610933, 0.069765, 1.272413, 0.540745, 0.858303);
	ctxTwo.moveTo(0.759788, -0.871297);
	ctxTwo.bezierCurveTo(0.755899, -0.876781, 0.746586, -0.881199, 0.739093, -0.881115);
	ctxTwo.bezierCurveTo(0.730906, -0.881025, 0.732317, -0.877105, 0.742628, -0.871297);
	ctxTwo.bezierCurveTo(0.764605, -0.858918, 0.768566, -0.858918, 0.759788, -0.871297);
	ctxTwo.moveTo(1.474795, 8.390969);
	ctxTwo.bezierCurveTo(1.474795, 8.371413, 1.368261, 8.196045, 1.307528, 8.115627);
	ctxTwo.bezierCurveTo(1.148889, 7.905570, 0.920719, 7.742139, 0.689146, 7.672702);
	ctxTwo.bezierCurveTo(0.653670, 7.662065, 0.622877, 7.653361, 0.620716, 7.653361);
	ctxTwo.bezierCurveTo(0.618555, 7.653361, 0.616787, 7.821611, 0.616787, 8.027249);
	ctxTwo.lineTo(0.616787, 8.401139);
	ctxTwo.lineTo(1.045791, 8.401139);
	ctxTwo.bezierCurveTo(1.329770, 8.401139, 1.474795, 8.397699, 1.474795, 8.390968);
	ctxTwo.moveTo(-3.519919, -5.278196);
	ctxTwo.bezierCurveTo(-2.996393, -5.770921, -2.077269, -6.696802, -1.441422, -7.371972);
	ctxTwo.bezierCurveTo(-0.642997, -8.219775, -0.146833, -8.804715, 0.018164, -9.092716);
	ctxTwo.bezierCurveTo(0.092580, -9.222608, 0.107818, -9.287491, 0.068242, -9.305951);
	ctxTwo.bezierCurveTo(-0.005160, -9.340188, -0.288386, -9.196753, -0.611022, -8.961951);
	ctxTwo.bezierCurveTo(-1.352763, -8.422140, -2.278361, -7.350989, -3.237879, -5.922012);
	ctxTwo.bezierCurveTo(-3.380504, -5.709606, -3.671352, -5.256271, -3.769275, -5.093744);
	ctxTwo.lineTo(-3.823340, -5.004011);
	ctxTwo.lineTo(-3.764324, -5.053863);
	ctxTwo.bezierCurveTo(-3.731865, -5.081281, -3.621883, -5.182232, -3.519920, -5.278197);
	ctxTwo.fill();

// #path1973
	ctxTwo.beginPath();
	ctxTwo.lineWidth = 0.010680;
	ctxTwo.fillStyle = 'rgb(126, 227, 253)';
	ctxTwo.moveTo(-0.424264, 12.294602);
	ctxTwo.lineTo(-0.424264, 10.485021);
	ctxTwo.lineTo(-1.874103, 10.482521);
	ctxTwo.lineTo(-3.323942, 10.480021);
	ctxTwo.lineTo(-3.496937, 10.141028);
	ctxTwo.bezierCurveTo(-3.879413, 9.391488, -4.229498, 8.617786, -4.507909, 7.906683);
	ctxTwo.lineTo(-4.590244, 7.696384);
	ctxTwo.lineTo(-4.660856, 7.674828);
	ctxTwo.bezierCurveTo(-4.900757, 7.601593, -5.108770, 7.671098, -5.311896, 7.892354);
	ctxTwo.bezierCurveTo(-5.802184, 8.426410, -6.186887, 9.725271, -6.423815, 11.646491);
	ctxTwo.bezierCurveTo(-6.499831, 12.262894, -6.559770, 12.942662, -6.590414, 13.535874);
	ctxTwo.bezierCurveTo(-6.597074, 13.664741, -6.605378, 13.810970, -6.608875, 13.860829);
	ctxTwo.lineTo(-6.615235, 13.951479);
	ctxTwo.lineTo(-6.793751, 13.967819);
	ctxTwo.bezierCurveTo(-6.891935, 13.976819, -6.974545, 13.982169, -6.977330, 13.979749);
	ctxTwo.bezierCurveTo(-7.003979, 13.956519, -7.289677, 12.774433, -7.401487, 12.224776);
	ctxTwo.bezierCurveTo(-7.623442, 11.133646, -7.730053, 10.236092, -7.742557, 9.353312);
	ctxTwo.bezierCurveTo(-7.756071, 8.399225, -7.671861, 7.732460, -7.454195, 7.070099);
	ctxTwo.bezierCurveTo(-7.109809, 6.022128, -6.420276, 5.326458, -5.539229, 5.138088);
	ctxTwo.bezierCurveTo(-5.421322, 5.112879, -5.390612, 5.102883, -5.394727, 5.091052);
	ctxTwo.bezierCurveTo(-5.405876, 5.058981, -5.505249, 4.585594, -5.548571, 4.358157);
	ctxTwo.bezierCurveTo(-5.871520, 2.662707, -5.919435, 1.008925, -5.691705, -0.582156);
	ctxTwo.bezierCurveTo(-5.322026, -3.164994, -4.201172, -5.582732, -2.421505, -7.636143);
	ctxTwo.bezierCurveTo(-1.966843, -8.160739, -1.560175, -8.567056, -1.008611, -9.047816);
	ctxTwo.bezierCurveTo(-0.643123, -9.366388, -0.480096, -9.497948, -0.189848, -9.708547);
	ctxTwo.lineTo(-0.029792, -9.824680);
	ctxTwo.lineTo(0.094194, -9.824680);
	ctxTwo.lineTo(0.218181, -9.824680);
	ctxTwo.lineTo(0.305943, -9.762718);
	ctxTwo.bezierCurveTo(0.875372, -9.360686, 1.553907, -8.766775, 2.125997, -8.169655);
	ctxTwo.bezierCurveTo(3.705044, -6.521520, 4.854587, -4.562379, 5.472341, -2.466554);
	ctxTwo.bezierCurveTo(6.047939, -0.513753, 6.174169, 1.553204, 5.849857, 3.715069);
	ctxTwo.bezierCurveTo(5.787721, 4.129260, 5.693723, 4.626633, 5.610718, 4.980424);
	ctxTwo.bezierCurveTo(5.594750, 5.048487, 5.582997, 5.105148, 5.584601, 5.106336);
	ctxTwo.bezierCurveTo(5.586201, 5.107526, 5.630630, 5.116026, 5.683325, 5.125220);
	ctxTwo.bezierCurveTo(6.115588, 5.200664, 6.561573, 5.437547, 6.884002, 5.762955);
	ctxTwo.bezierCurveTo(7.521802, 6.406648, 7.858313, 7.335128, 7.939538, 8.675323);
	ctxTwo.bezierCurveTo(7.956408, 8.953675, 7.946588, 9.708394, 7.922030, 10.021322);
	ctxTwo.bezierCurveTo(7.852939, 10.901633, 7.714099, 11.774884, 7.479759, 12.803053);
	ctxTwo.bezierCurveTo(7.381634, 13.233575, 7.195476, 13.967381, 7.181233, 13.979795);
	ctxTwo.bezierCurveTo(7.178413, 13.982295, 7.095791, 13.976695, 6.997621, 13.967495);
	ctxTwo.lineTo(6.819131, 13.950735);
	ctxTwo.lineTo(6.812861, 13.860455);
	ctxTwo.bezierCurveTo(6.809410, 13.810803, 6.798460, 13.624361, 6.788527, 13.446141);
	ctxTwo.bezierCurveTo(6.712416, 12.080589, 6.530224, 10.707305, 6.295800, 9.732182);
	ctxTwo.bezierCurveTo(6.009261, 8.540277, 5.621001, 7.810898, 5.198671, 7.671131);
	ctxTwo.bezierCurveTo(5.102243, 7.639220, 4.964454, 7.640877, 4.861749, 7.675185);
	ctxTwo.bezierCurveTo(4.821223, 7.688722, 4.783930, 7.706175, 4.778872, 7.713968);
	ctxTwo.bezierCurveTo(4.773816, 7.721762, 4.722828, 7.847036, 4.665568, 7.992354);
	ctxTwo.bezierCurveTo(4.381909, 8.712234, 4.006051, 9.532127, 3.605179, 10.305477);
	ctxTwo.lineTo(3.514735, 10.479959);
	ctxTwo.lineTo(2.065760, 10.482459);
	ctxTwo.lineTo(0.616786, 10.484959);
	ctxTwo.lineTo(0.616786, 12.294540);
	ctxTwo.lineTo(0.616786, 14.104123);
	ctxTwo.lineTo(0.096261, 14.104123);
	ctxTwo.lineTo(-0.424264, 14.104123);
	ctxTwo.moveTo(-2.323471, 10.143459);
	ctxTwo.bezierCurveTo(-2.323818, 10.114099, -2.549004, 8.739528, -2.554210, 8.734991);
	ctxTwo.bezierCurveTo(-2.557370, 8.732241, -2.830502, 8.731141, -3.161168, 8.732561);
	ctxTwo.lineTo(-3.762379, 8.735141);
	ctxTwo.lineTo(-3.682788, 8.909622);
	ctxTwo.bezierCurveTo(-3.517158, 9.272720, -3.319009, 9.684881, -3.169902, 9.976451);
	ctxTwo.bezierCurveTo(-3.143261, 10.028547, -3.111951, 10.090238, -3.100324, 10.113544);
	ctxTwo.lineTo(-3.079184, 10.155914);
	ctxTwo.lineTo(-2.701254, 10.155914);
	ctxTwo.bezierCurveTo(-2.406458, 10.155914, -2.323356, 10.153214, -2.323471, 10.143454);
	ctxTwo.moveTo(-0.424264, 6.716148);
	ctxTwo.lineTo(-0.424264, 5.031157);
	ctxTwo.lineTo(0.096261, 5.031157);
	ctxTwo.lineTo(0.616787, 5.031157);
	ctxTwo.lineTo(0.616787, 6.716148);
	ctxTwo.lineTo(0.616787, 8.401139);
	ctxTwo.lineTo(2.358805, 8.401139);
	ctxTwo.lineTo(4.100823, 8.401139);
	ctxTwo.lineTo(4.212061, 8.129446);
	ctxTwo.bezierCurveTo(5.026170, 6.141045, 5.490397, 4.246026, 5.615867, 2.398982);
	ctxTwo.bezierCurveTo(5.740525, 0.563887, 5.514392, -1.226123, 4.947037, -2.895280);
	ctxTwo.bezierCurveTo(4.823602, -3.258428, 4.589995, -3.842389, 4.440495, -4.161516);
	ctxTwo.lineTo(4.396122, -4.256234);
	ctxTwo.lineTo(0.098720, -4.258744);
	ctxTwo.bezierCurveTo(-4.029302, -4.261154, -4.199117, -4.260544, -4.209702, -4.243305);
	ctxTwo.bezierCurveTo(-4.215762, -4.233435, -4.257779, -4.142574, -4.303071, -4.041392);
	ctxTwo.bezierCurveTo(-5.748327, -0.812705, -5.836298, 2.795889, -4.563981, 6.661306);
	ctxTwo.bezierCurveTo(-4.410931, 7.126285, -4.183743, 7.737054, -3.991915, 8.199235);
	ctxTwo.lineTo(-3.908117, 8.401134);
	ctxTwo.lineTo(-2.166191, 8.401134);
	ctxTwo.lineTo(-0.424265, 8.401134);
	ctxTwo.moveTo(-0.138261, 2.642218);
	ctxTwo.bezierCurveTo(-0.749537, 2.579655, -1.240592, 2.376856, -1.654957, 2.015846);
	ctxTwo.bezierCurveTo(-1.860119, 1.837103, -1.995303, 1.678107, -2.114911, 1.474874);
	ctxTwo.bezierCurveTo(-2.292950, 1.172357, -2.376871, 0.888326, -2.388806, 0.547872);
	ctxTwo.bezierCurveTo(-2.398736, 0.264650, -2.361873, 0.043722, -2.260632, -0.220330);
	ctxTwo.bezierCurveTo(-1.988002, -0.931396, -1.285054, -1.480662, -0.439922, -1.642986);
	ctxTwo.bezierCurveTo(-0.188126, -1.691348, 0.180449, -1.704264, 0.432935, -1.673572);
	ctxTwo.bezierCurveTo(1.436847, -1.551539, 2.259872, -0.913159, 2.508790, -0.063433);
	ctxTwo.bezierCurveTo(2.560762, 0.113982, 2.584487, 0.282268, 2.584487, 0.473504);
	ctxTwo.bezierCurveTo(2.584487, 1.064805, 2.333396, 1.592934, 1.853460, 2.011098);
	ctxTwo.bezierCurveTo(1.475750, 2.340195, 1.019651, 2.545315, 0.490946, 2.623858);
	ctxTwo.bezierCurveTo(0.386887, 2.639318, -0.043815, 2.651886, -0.138261, 2.642218);
	ctxTwo.moveTo(0.541174, 0.857925);
	ctxTwo.lineTo(1.397931, 0.104619);
	ctxTwo.lineTo(1.384607, 0.065861);
	ctxTwo.bezierCurveTo(1.361046, -0.002674, 1.269856, -0.150549, 1.201880, -0.230450);
	ctxTwo.bezierCurveTo(1.039371, -0.421467, 0.823970, -0.562426, 0.564418, -0.647606);
	ctxTwo.lineTo(0.494890, -0.670424);
	ctxTwo.lineTo(-0.019040, -0.219998);
	ctxTwo.bezierCurveTo(-0.301702, 0.027736, -0.686960, 0.365789, -0.875170, 0.531229);
	ctxTwo.lineTo(-1.217369, 0.832031);
	ctxTwo.lineTo(-1.191481, 0.895147);
	ctxTwo.bezierCurveTo(-1.093393, 1.134294, -0.874600, 1.363882, -0.612573, 1.502617);
	ctxTwo.bezierCurveTo(-0.522681, 1.550212, -0.371800, 1.609642, -0.338463, 1.610584);
	ctxTwo.bezierCurveTo(-0.322859, 1.611023, -0.043129, 1.371674, 0.541174, 0.857925);
	ctxTwo.moveTo(0.763337, -0.877462);
	ctxTwo.bezierCurveTo(0.753137, -0.886352, 0.738645, -0.890269, 0.731064, -0.886186);
	ctxTwo.bezierCurveTo(0.715046, -0.877558, 0.736841, -0.861736, 0.765100, -0.861479);
	ctxTwo.bezierCurveTo(0.779067, -0.861351, 0.778774, -0.864008, 0.763338, -0.877462);
	ctxTwo.moveTo(-3.485663, -5.308107);
	ctxTwo.bezierCurveTo(-3.128710, -5.645344, -2.582471, -6.187923, -2.070357, -6.713928);
	ctxTwo.bezierCurveTo(-0.737942, -8.082486, 0.063192, -9.021787, 0.087712, -9.244188);
	ctxTwo.bezierCurveTo(0.097019, -9.328605, 0.051029, -9.335612, -0.098689, -9.272587);
	ctxTwo.bezierCurveTo(-0.379863, -9.154223, -0.781694, -8.861699, -1.155010, -8.503608);
	ctxTwo.bezierCurveTo(-1.771414, -7.912342, -2.398842, -7.148765, -3.063886, -6.180514);
	ctxTwo.bezierCurveTo(-3.323243, -5.802912, -3.692718, -5.233840, -3.798612, -5.048878);
	ctxTwo.lineTo(-3.824299, -5.004011);
	ctxTwo.lineTo(-3.742046, -5.073804);
	ctxTwo.bezierCurveTo(-3.696807, -5.112190, -3.581435, -5.217626, -3.485663, -5.308107);
	ctxTwo.fill();

// #path1971
	ctxTwo.beginPath();
	ctxTwo.lineWidth = 0.010680;
	ctxTwo.fillStyle = 'rgb(172, 172, 172)';
	ctxTwo.moveTo(-0.424264, 12.294602);
	ctxTwo.lineTo(-0.424264, 10.485021);
	ctxTwo.lineTo(-1.874103, 10.482521);
	ctxTwo.lineTo(-3.323942, 10.480021);
	ctxTwo.lineTo(-3.496937, 10.141028);
	ctxTwo.bezierCurveTo(-3.879413, 9.391488, -4.229498, 8.617786, -4.507909, 7.906683);
	ctxTwo.lineTo(-4.590244, 7.696384);
	ctxTwo.lineTo(-4.660856, 7.674828);
	ctxTwo.bezierCurveTo(-4.900757, 7.601593, -5.108770, 7.671098, -5.311896, 7.892354);
	ctxTwo.bezierCurveTo(-5.802184, 8.426410, -6.186887, 9.725271, -6.423815, 11.646491);
	ctxTwo.bezierCurveTo(-6.499831, 12.262894, -6.559770, 12.942662, -6.590414, 13.535874);
	ctxTwo.bezierCurveTo(-6.597074, 13.664741, -6.605378, 13.810970, -6.608875, 13.860829);
	ctxTwo.lineTo(-6.615235, 13.951479);
	ctxTwo.lineTo(-6.793751, 13.967819);
	ctxTwo.bezierCurveTo(-6.891935, 13.976819, -6.974545, 13.982169, -6.977330, 13.979749);
	ctxTwo.bezierCurveTo(-7.003979, 13.956519, -7.289677, 12.774433, -7.401487, 12.224776);
	ctxTwo.bezierCurveTo(-7.623442, 11.133646, -7.730053, 10.236092, -7.742557, 9.353312);
	ctxTwo.bezierCurveTo(-7.756071, 8.399225, -7.671861, 7.732460, -7.454195, 7.070099);
	ctxTwo.bezierCurveTo(-7.109809, 6.022128, -6.420276, 5.326458, -5.539229, 5.138088);
	ctxTwo.bezierCurveTo(-5.421322, 5.112879, -5.390612, 5.102883, -5.394727, 5.091052);
	ctxTwo.bezierCurveTo(-5.405876, 5.058981, -5.505249, 4.585594, -5.548571, 4.358157);
	ctxTwo.bezierCurveTo(-5.871520, 2.662707, -5.919435, 1.008925, -5.691705, -0.582156);
	ctxTwo.bezierCurveTo(-5.322026, -3.164994, -4.201172, -5.582732, -2.421505, -7.636143);
	ctxTwo.bezierCurveTo(-1.966843, -8.160739, -1.560175, -8.567056, -1.008611, -9.047816);
	ctxTwo.bezierCurveTo(-0.643123, -9.366388, -0.480096, -9.497948, -0.189848, -9.708547);
	ctxTwo.lineTo(-0.029792, -9.824680);
	ctxTwo.lineTo(0.094194, -9.824680);
	ctxTwo.lineTo(0.218181, -9.824680);
	ctxTwo.lineTo(0.305943, -9.762718);
	ctxTwo.bezierCurveTo(0.875372, -9.360686, 1.553907, -8.766775, 2.125997, -8.169655);
	ctxTwo.bezierCurveTo(3.705044, -6.521520, 4.854587, -4.562379, 5.472341, -2.466554);
	ctxTwo.bezierCurveTo(6.047939, -0.513753, 6.174169, 1.553204, 5.849857, 3.715069);
	ctxTwo.bezierCurveTo(5.787721, 4.129260, 5.693723, 4.626633, 5.610718, 4.980424);
	ctxTwo.bezierCurveTo(5.594750, 5.048487, 5.582997, 5.105148, 5.584601, 5.106336);
	ctxTwo.bezierCurveTo(5.586201, 5.107526, 5.630630, 5.116026, 5.683325, 5.125220);
	ctxTwo.bezierCurveTo(6.115588, 5.200664, 6.561573, 5.437547, 6.884002, 5.762955);
	ctxTwo.bezierCurveTo(7.521802, 6.406648, 7.858313, 7.335128, 7.939538, 8.675323);
	ctxTwo.bezierCurveTo(7.956408, 8.953675, 7.946588, 9.708394, 7.922030, 10.021322);
	ctxTwo.bezierCurveTo(7.852939, 10.901633, 7.714099, 11.774884, 7.479759, 12.803053);
	ctxTwo.bezierCurveTo(7.381634, 13.233575, 7.195476, 13.967381, 7.181233, 13.979795);
	ctxTwo.bezierCurveTo(7.178413, 13.982295, 7.095791, 13.976695, 6.997621, 13.967495);
	ctxTwo.lineTo(6.819131, 13.950735);
	ctxTwo.lineTo(6.812861, 13.860455);
	ctxTwo.bezierCurveTo(6.809410, 13.810803, 6.798460, 13.624361, 6.788527, 13.446141);
	ctxTwo.bezierCurveTo(6.712416, 12.080589, 6.530224, 10.707305, 6.295800, 9.732182);
	ctxTwo.bezierCurveTo(6.009261, 8.540277, 5.621001, 7.810898, 5.198671, 7.671131);
	ctxTwo.bezierCurveTo(5.102243, 7.639220, 4.964454, 7.640877, 4.861749, 7.675185);
	ctxTwo.bezierCurveTo(4.821223, 7.688722, 4.783930, 7.706175, 4.778872, 7.713968);
	ctxTwo.bezierCurveTo(4.773816, 7.721762, 4.722828, 7.847036, 4.665568, 7.992354);
	ctxTwo.bezierCurveTo(4.381909, 8.712234, 4.006051, 9.532127, 3.605179, 10.305477);
	ctxTwo.lineTo(3.514735, 10.479959);
	ctxTwo.lineTo(2.065760, 10.482459);
	ctxTwo.lineTo(0.616786, 10.484959);
	ctxTwo.lineTo(0.616786, 12.294540);
	ctxTwo.lineTo(0.616786, 14.104123);
	ctxTwo.lineTo(0.096261, 14.104123);
	ctxTwo.lineTo(-0.424264, 14.104123);
	ctxTwo.moveTo(-2.323471, 10.143459);
	ctxTwo.bezierCurveTo(-2.323818, 10.114099, -2.549004, 8.739528, -2.554210, 8.734991);
	ctxTwo.bezierCurveTo(-2.557370, 8.732241, -2.830502, 8.731141, -3.161168, 8.732561);
	ctxTwo.lineTo(-3.762379, 8.735141);
	ctxTwo.lineTo(-3.682788, 8.909622);
	ctxTwo.bezierCurveTo(-3.517158, 9.272720, -3.319009, 9.684881, -3.169902, 9.976451);
	ctxTwo.bezierCurveTo(-3.143261, 10.028547, -3.111951, 10.090238, -3.100324, 10.113544);
	ctxTwo.lineTo(-3.079184, 10.155914);
	ctxTwo.lineTo(-2.701254, 10.155914);
	ctxTwo.bezierCurveTo(-2.406458, 10.155914, -2.323356, 10.153214, -2.323471, 10.143454);
	ctxTwo.moveTo(-0.424264, 6.716148);
	ctxTwo.lineTo(-0.424264, 5.031157);
	ctxTwo.lineTo(0.096261, 5.031157);
	ctxTwo.lineTo(0.616787, 5.031157);
	ctxTwo.lineTo(0.616787, 6.716148);
	ctxTwo.lineTo(0.616787, 8.401139);
	ctxTwo.lineTo(2.358805, 8.401139);
	ctxTwo.lineTo(4.100823, 8.401139);
	ctxTwo.lineTo(4.212061, 8.129446);
	ctxTwo.bezierCurveTo(5.026170, 6.141045, 5.490397, 4.246026, 5.615867, 2.398982);
	ctxTwo.bezierCurveTo(5.740525, 0.563887, 5.514392, -1.226123, 4.947037, -2.895280);
	ctxTwo.bezierCurveTo(4.823602, -3.258428, 4.589995, -3.842389, 4.440495, -4.161516);
	ctxTwo.lineTo(4.396122, -4.256234);
	ctxTwo.lineTo(0.098720, -4.258744);
	ctxTwo.bezierCurveTo(-4.029302, -4.261154, -4.199117, -4.260544, -4.209702, -4.243305);
	ctxTwo.bezierCurveTo(-4.215762, -4.233435, -4.257779, -4.142574, -4.303071, -4.041392);
	ctxTwo.bezierCurveTo(-5.748327, -0.812705, -5.836298, 2.795889, -4.563981, 6.661306);
	ctxTwo.bezierCurveTo(-4.410931, 7.126285, -4.183743, 7.737054, -3.991915, 8.199235);
	ctxTwo.lineTo(-3.908117, 8.401134);
	ctxTwo.lineTo(-2.166191, 8.401134);
	ctxTwo.lineTo(-0.424265, 8.401134);
	ctxTwo.moveTo(-0.138261, 2.642218);
	ctxTwo.bezierCurveTo(-0.749537, 2.579655, -1.240592, 2.376856, -1.654957, 2.015846);
	ctxTwo.bezierCurveTo(-1.860119, 1.837103, -1.995303, 1.678107, -2.114911, 1.474874);
	ctxTwo.bezierCurveTo(-2.292950, 1.172357, -2.376871, 0.888326, -2.388806, 0.547872);
	ctxTwo.bezierCurveTo(-2.398736, 0.264650, -2.361873, 0.043722, -2.260632, -0.220330);
	ctxTwo.bezierCurveTo(-1.988002, -0.931396, -1.285054, -1.480662, -0.439922, -1.642986);
	ctxTwo.bezierCurveTo(-0.188126, -1.691348, 0.180449, -1.704264, 0.432935, -1.673572);
	ctxTwo.bezierCurveTo(1.436847, -1.551539, 2.259872, -0.913159, 2.508790, -0.063433);
	ctxTwo.bezierCurveTo(2.560762, 0.113982, 2.584487, 0.282268, 2.584487, 0.473504);
	ctxTwo.bezierCurveTo(2.584487, 1.064805, 2.333396, 1.592934, 1.853460, 2.011098);
	ctxTwo.bezierCurveTo(1.475750, 2.340195, 1.019651, 2.545315, 0.490946, 2.623858);
	ctxTwo.bezierCurveTo(0.386887, 2.639318, -0.043815, 2.651886, -0.138261, 2.642218);
	ctxTwo.moveTo(0.326375, 1.655711);
	ctxTwo.bezierCurveTo(0.757781, 1.590146, 1.123163, 1.353826, 1.319937, 1.013102);
	ctxTwo.bezierCurveTo(1.550705, 0.613514, 1.503342, 0.123897, 1.199356, -0.233417);
	ctxTwo.bezierCurveTo(0.799307, -0.703645, 0.066385, -0.852153, -0.531968, -0.584227);
	ctxTwo.bezierCurveTo(-0.875384, -0.430454, -1.133678, -0.147733, -1.232397, 0.182439);
	ctxTwo.bezierCurveTo(-1.268193, 0.302162, -1.281519, 0.526403, -1.260339, 0.652641);
	ctxTwo.bezierCurveTo(-1.191226, 1.064582, -0.878808, 1.417225, -0.439113, 1.579600);
	ctxTwo.bezierCurveTo(-0.362252, 1.607985, -0.164841, 1.655424, -0.086780, 1.664268);
	ctxTwo.bezierCurveTo(0.004056, 1.674560, 0.233638, 1.669808, 0.326375, 1.655708);
	ctxTwo.moveTo(0.763337, -0.877462);
	ctxTwo.bezierCurveTo(0.753137, -0.886352, 0.738645, -0.890269, 0.731064, -0.886186);
	ctxTwo.bezierCurveTo(0.715046, -0.877558, 0.736841, -0.861736, 0.765100, -0.861479);
	ctxTwo.bezierCurveTo(0.779067, -0.861351, 0.778774, -0.864008, 0.763338, -0.877462);
	ctxTwo.moveTo(-3.485663, -5.308107);
	ctxTwo.bezierCurveTo(-3.128710, -5.645344, -2.582471, -6.187923, -2.070357, -6.713928);
	ctxTwo.bezierCurveTo(-0.737942, -8.082486, 0.063192, -9.021787, 0.087712, -9.244188);
	ctxTwo.bezierCurveTo(0.097019, -9.328605, 0.051029, -9.335612, -0.098689, -9.272587);
	ctxTwo.bezierCurveTo(-0.379863, -9.154223, -0.781694, -8.861699, -1.155010, -8.503608);
	ctxTwo.bezierCurveTo(-1.771414, -7.912342, -2.398842, -7.148765, -3.063886, -6.180514);
	ctxTwo.bezierCurveTo(-3.323243, -5.802912, -3.692718, -5.233840, -3.798612, -5.048878);
	ctxTwo.lineTo(-3.824299, -5.004011);
	ctxTwo.lineTo(-3.742046, -5.073804);
	ctxTwo.bezierCurveTo(-3.696807, -5.112190, -3.581435, -5.217626, -3.485663, -5.308107);
	ctxTwo.fill();

// #path1969
	ctxTwo.beginPath();
	ctxTwo.lineWidth = 0.010680;
	ctxTwo.fillStyle = 'rgb(243, 0, 0)';
	ctxTwo.moveTo(-0.424264, 12.294602);
	ctxTwo.lineTo(-0.424264, 10.485021);
	ctxTwo.lineTo(-1.871741, 10.482521);
	ctxTwo.lineTo(-3.319218, 10.480021);
	ctxTwo.lineTo(-3.422952, 10.280613);
	ctxTwo.bezierCurveTo(-3.816763, 9.523531, -4.250624, 8.568884, -4.519516, 7.867724);
	ctxTwo.lineTo(-4.584517, 7.698228);
	ctxTwo.lineTo(-4.652273, 7.673733);
	ctxTwo.bezierCurveTo(-4.708462, 7.653420, -4.739653, 7.649165, -4.834983, 7.648807);
	ctxTwo.bezierCurveTo(-4.946101, 7.648388, -4.952973, 7.649685, -5.040905, 7.687506);
	ctxTwo.bezierCurveTo(-5.397499, 7.840896, -5.736124, 8.430129, -5.995355, 9.348323);
	ctxTwo.bezierCurveTo(-6.277011, 10.345945, -6.495350, 11.843511, -6.584805, 13.391304);
	ctxTwo.bezierCurveTo(-6.594947, 13.566782, -6.606810, 13.764195, -6.611167, 13.830000);
	ctxTwo.lineTo(-6.619087, 13.949644);
	ctxTwo.lineTo(-6.750648, 13.961344);
	ctxTwo.bezierCurveTo(-6.823007, 13.967744, -6.903813, 13.975054, -6.930217, 13.977504);
	ctxTwo.lineTo(-6.978225, 13.982004);
	ctxTwo.lineTo(-7.008248, 13.871122);
	ctxTwo.bezierCurveTo(-7.124218, 13.442815, -7.291132, 12.746486, -7.373006, 12.349434);
	ctxTwo.bezierCurveTo(-7.611481, 11.192937, -7.725426, 10.269812, -7.742211, 9.358326);
	ctxTwo.bezierCurveTo(-7.765344, 8.102103, -7.564129, 7.103041, -7.140013, 6.368332);
	ctxTwo.bezierCurveTo(-6.757010, 5.704843, -6.163563, 5.258212, -5.496059, 5.131085);
	ctxTwo.bezierCurveTo(-5.442529, 5.120889, -5.396342, 5.110464, -5.393420, 5.107918);
	ctxTwo.bezierCurveTo(-5.390500, 5.105368, -5.409144, 5.009671, -5.434855, 4.895250);
	ctxTwo.bezierCurveTo(-5.723535, 3.610553, -5.860345, 2.254467, -5.823882, 1.039142);
	ctxTwo.bezierCurveTo(-5.800514, 0.260274, -5.739080, -0.345563, -5.611458, -1.055715);
	ctxTwo.bezierCurveTo(-5.125133, -3.761882, -3.800058, -6.275493, -1.779856, -8.324108);
	ctxTwo.bezierCurveTo(-1.250993, -8.860408, -0.644566, -9.383513, -0.123200, -9.753140);
	ctxTwo.lineTo(-0.022339, -9.824647);
	ctxTwo.lineTo(0.095959, -9.824647);
	ctxTwo.lineTo(0.214257, -9.824647);
	ctxTwo.lineTo(0.321141, -9.748833);
	ctxTwo.bezierCurveTo(0.981426, -9.280488, 1.713008, -8.622999, 2.354800, -7.921140);
	ctxTwo.bezierCurveTo(4.228174, -5.872431, 5.432370, -3.414044, 5.849567, -0.786515);
	ctxTwo.bezierCurveTo(6.138623, 1.033982, 6.061040, 2.968852, 5.620545, 4.925084);
	ctxTwo.bezierCurveTo(5.598494, 5.023011, 5.582042, 5.104502, 5.583986, 5.106175);
	ctxTwo.bezierCurveTo(5.585926, 5.107845, 5.644147, 5.120328, 5.713360, 5.133909);
	ctxTwo.bezierCurveTo(5.947926, 5.179933, 6.221201, 5.285364, 6.422381, 5.407452);
	ctxTwo.bezierCurveTo(7.240229, 5.903771, 7.744403, 6.862112, 7.897689, 8.211736);
	ctxTwo.bezierCurveTo(7.929184, 8.489042, 7.939013, 8.649984, 7.946099, 9.004379);
	ctxTwo.bezierCurveTo(7.972317, 10.315839, 7.717754, 12.003893, 7.212141, 13.871380);
	ctxTwo.lineTo(7.182051, 13.982517);
	ctxTwo.lineTo(7.139832, 13.977717);
	ctxTwo.bezierCurveTo(7.116612, 13.975117, 7.035837, 13.967697, 6.960332, 13.961297);
	ctxTwo.lineTo(6.823051, 13.949644);
	ctxTwo.lineTo(6.815488, 13.839970);
	ctxTwo.bezierCurveTo(6.811328, 13.779649, 6.802058, 13.620373, 6.794888, 13.486022);
	ctxTwo.bezierCurveTo(6.751548, 12.673813, 6.648557, 11.674990, 6.531190, 10.928625);
	ctxTwo.bezierCurveTo(6.272878, 9.285942, 5.896077, 8.215925, 5.433733, 7.812136);
	ctxTwo.bezierCurveTo(5.239470, 7.642475, 5.046857, 7.601701, 4.827738, 7.683853);
	ctxTwo.bezierCurveTo(4.777292, 7.702766, 4.771884, 7.708354, 4.753028, 7.761057);
	ctxTwo.bezierCurveTo(4.616000, 8.144041, 4.227033, 9.038954, 3.940215, 9.631130);
	ctxTwo.bezierCurveTo(3.839119, 9.839859, 3.577135, 10.358272, 3.527630, 10.447555);
	ctxTwo.lineTo(3.506899, 10.484945);
	ctxTwo.lineTo(2.061843, 10.484945);
	ctxTwo.lineTo(0.616787, 10.484945);
	ctxTwo.lineTo(0.616787, 12.294565);
	ctxTwo.lineTo(0.616787, 14.104186);
	ctxTwo.lineTo(0.096261, 14.104186);
	ctxTwo.lineTo(-0.424264, 14.104186);
	ctxTwo.moveTo(-0.424264, 9.443041);
	ctxTwo.lineTo(-0.424264, 8.730160);
	ctxTwo.lineTo(-2.095292, 8.730160);
	ctxTwo.lineTo(-3.766320, 8.730160);
	ctxTwo.lineTo(-3.758560, 8.752593);
	ctxTwo.bezierCurveTo(-3.725951, 8.846916, -3.311304, 9.714497, -3.134322, 10.058711);
	ctxTwo.lineTo(-3.084340, 10.155921);
	ctxTwo.lineTo(-1.754300, 10.155921);
	ctxTwo.lineTo(-0.424260, 10.155921);
	ctxTwo.moveTo(3.338162, 10.033599);
	ctxTwo.bezierCurveTo(3.548865, 9.616111, 3.957301, 8.759560, 3.957301, 8.735171);
	ctxTwo.bezierCurveTo(3.957301, 8.732411, 3.205685, 8.730161, 2.287044, 8.730161);
	ctxTwo.lineTo(0.616787, 8.730161);
	ctxTwo.lineTo(0.616787, 9.443041);
	ctxTwo.lineTo(0.616787, 10.155922);
	ctxTwo.lineTo(1.946700, 10.155733);
	ctxTwo.lineTo(3.276614, 10.155543);
	ctxTwo.lineTo(3.338162, 10.033592);
	ctxTwo.moveTo(-0.424264, 6.726118);
	ctxTwo.lineTo(-0.424264, 5.041127);
	ctxTwo.lineTo(0.096261, 5.041127);
	ctxTwo.lineTo(0.616787, 5.041127);
	ctxTwo.lineTo(0.616787, 6.726150);
	ctxTwo.lineTo(0.616787, 8.411173);
	ctxTwo.lineTo(2.358545, 8.408653);
	ctxTwo.lineTo(4.100303, 8.406133);
	ctxTwo.lineTo(4.177889, 8.221681);
	ctxTwo.bezierCurveTo(4.292599, 7.948957, 4.549774, 7.275477, 4.648087, 6.990333);
	ctxTwo.bezierCurveTo(5.115691, 5.634105, 5.407291, 4.387098, 5.552698, 3.121833);
	ctxTwo.bezierCurveTo(5.625703, 2.486573, 5.644684, 2.132663, 5.644405, 1.411916);
	ctxTwo.bezierCurveTo(5.644165, 0.802115, 5.637846, 0.634233, 5.598409, 0.190547);
	ctxTwo.bezierCurveTo(5.465399, -1.305841, 5.091128, -2.731455, 4.471563, -4.101650);
	ctxTwo.bezierCurveTo(4.425702, -4.203074, 4.386041, -4.280469, 4.383428, -4.273638);
	ctxTwo.bezierCurveTo(4.379648, -4.263758, 3.501808, -4.261219, 0.085542, -4.261219);
	ctxTwo.lineTo(-4.207595, -4.261219);
	ctxTwo.lineTo(-4.284911, -4.089231);
	ctxTwo.bezierCurveTo(-5.263432, -1.912524, -5.628383, 0.384557, -5.388600, 2.857618);
	ctxTwo.bezierCurveTo(-5.259255, 4.191654, -4.953764, 5.547659, -4.460920, 6.975377);
	ctxTwo.bezierCurveTo(-4.322983, 7.374967, -4.006069, 8.195110, -3.918655, 8.378705);
	ctxTwo.lineTo(-3.903227, 8.411109);
	ctxTwo.lineTo(-2.163746, 8.411109);
	ctxTwo.lineTo(-0.424264, 8.411109);
	ctxTwo.moveTo(-0.126821, 2.637847);
	ctxTwo.bezierCurveTo(-0.879172, 2.574789, -1.553237, 2.223400, -1.976109, 1.673817);
	ctxTwo.bezierCurveTo(-2.065903, 1.557117, -2.205817, 1.311863, -2.253499, 1.187583);
	ctxTwo.bezierCurveTo(-2.566037, 0.372975, -2.324430, -0.499511, -1.624083, -1.085360);
	ctxTwo.bezierCurveTo(-1.252920, -1.395841, -0.798453, -1.591360, -0.274412, -1.666009);
	ctxTwo.bezierCurveTo(-0.086548, -1.692770, 0.314789, -1.689852, 0.505937, -1.660339);
	ctxTwo.bezierCurveTo(1.426963, -1.518112, 2.165698, -0.966680, 2.454147, -0.206084);
	ctxTwo.bezierCurveTo(2.808179, 0.727444, 2.406938, 1.739677, 1.466651, 2.285132);
	ctxTwo.bezierCurveTo(1.173584, 2.455139, 0.811038, 2.575794, 0.450905, 2.623173);
	ctxTwo.bezierCurveTo(0.305725, 2.642273, 0.014305, 2.649674, -0.126821, 2.637846);
	ctxTwo.moveTo(0.328374, 2.378411);
	ctxTwo.bezierCurveTo(1.062877, 2.308326, 1.696251, 1.931737, 2.039326, 1.361116);
	ctxTwo.bezierCurveTo(2.364492, 0.820285, 2.370992, 0.164655, 2.056564, -0.377761);
	ctxTwo.bezierCurveTo(1.728555, -0.943604, 1.126133, -1.322221, 0.407256, -1.414336);
	ctxTwo.bezierCurveTo(0.243056, -1.435376, -0.051095, -1.435082, -0.219807, -1.413710);
	ctxTwo.bezierCurveTo(-1.199388, -1.289615, -1.959884, -0.608287, -2.082521, 0.255093);
	ctxTwo.bezierCurveTo(-2.122603, 0.537276, -2.071403, 0.893497, -1.952050, 1.162837);
	ctxTwo.bezierCurveTo(-1.815875, 1.470139, -1.568714, 1.764049, -1.270618, 1.973159);
	ctxTwo.bezierCurveTo(-0.965653, 2.187087, -0.546259, 2.338523, -0.149701, 2.377904);
	ctxTwo.bezierCurveTo(-0.024458, 2.390341, 0.200842, 2.390580, 0.328374, 2.378412);
	ctxTwo.moveTo(-0.035300, 1.929895);
	ctxTwo.bezierCurveTo(-0.613392, 1.892464, -1.135043, 1.586252, -1.398406, 1.129744);
	ctxTwo.bezierCurveTo(-1.667956, 0.662511, -1.627314, 0.105345, -1.291589, -0.334589);
	ctxTwo.bezierCurveTo(-1.193034, -0.463735, -0.979241, -0.649051, -0.829749, -0.734911);
	ctxTwo.bezierCurveTo(-0.424358, -0.967745, 0.044821, -1.036143, 0.519210, -0.931566);
	ctxTwo.bezierCurveTo(0.588607, -0.916268, 0.668553, -0.894696, 0.696867, -0.883629);
	ctxTwo.bezierCurveTo(0.725182, -0.872563, 0.784384, -0.849270, 0.828429, -0.831869);
	ctxTwo.bezierCurveTo(1.028955, -0.752642, 1.284765, -0.568167, 1.433847, -0.395275);
	ctxTwo.bezierCurveTo(1.804883, 0.035020, 1.871581, 0.611389, 1.606824, 1.099480);
	ctxTwo.bezierCurveTo(1.310120, 1.646465, 0.660547, 1.974951, -0.035300, 1.929895);
	ctxTwo.moveTo(0.437108, 1.637915);
	ctxTwo.bezierCurveTo(1.176994, 1.468429, 1.610934, 0.825574, 1.424629, 0.174964);
	ctxTwo.bezierCurveTo(1.243110, -0.458929, 0.487616, -0.847424, -0.243488, -0.682827);
	ctxTwo.bezierCurveTo(-0.809112, -0.555485, -1.207360, -0.148054, -1.271182, 0.368564);
	ctxTwo.bezierCurveTo(-1.294007, 0.553325, -1.251347, 0.786617, -1.161806, 0.966692);
	ctxTwo.bezierCurveTo(-1.075408, 1.140450, -0.886981, 1.341699, -0.705971, 1.453546);
	ctxTwo.bezierCurveTo(-0.611065, 1.512190, -0.422699, 1.595379, -0.333795, 1.617913);
	ctxTwo.bezierCurveTo(-0.156078, 1.662958, -0.080915, 1.671045, 0.124862, 1.667261);
	ctxTwo.bezierCurveTo(0.294395, 1.664141, 0.342227, 1.659651, 0.437108, 1.637915);
	ctxTwo.moveTo(-3.585265, -5.211157);
	ctxTwo.bezierCurveTo(-2.708718, -6.035447, -1.387528, -7.394103, -0.674469, -8.204497);
	ctxTwo.bezierCurveTo(-0.036785, -8.929227, 0.211017, -9.316192, 0.037432, -9.316192);
	ctxTwo.bezierCurveTo(-0.005948, -9.316192, -0.112003, -9.274578, -0.227602, -9.212197);
	ctxTwo.bezierCurveTo(-1.035241, -8.776369, -2.050448, -7.677758, -3.171933, -6.025973);
	ctxTwo.bezierCurveTo(-3.400707, -5.689021, -3.821979, -5.032037, -3.821979, -5.012209);
	ctxTwo.bezierCurveTo(-3.821979, -4.996668, -3.740795, -5.064899, -3.585265, -5.211157);
	ctxTwo.fill();

// #path1967
	ctxTwo.beginPath();
	ctxTwo.lineWidth = 0.010680;
	ctxTwo.fillStyle = 'rgb(1, 1, 1)';
	ctxTwo.moveTo(-0.424264, 12.294602);
	ctxTwo.lineTo(-0.424264, 10.485021);
	ctxTwo.lineTo(-1.871741, 10.482521);
	ctxTwo.lineTo(-3.319218, 10.480021);
	ctxTwo.lineTo(-3.422952, 10.280613);
	ctxTwo.bezierCurveTo(-3.816763, 9.523531, -4.250624, 8.568884, -4.519516, 7.867724);
	ctxTwo.lineTo(-4.584517, 7.698228);
	ctxTwo.lineTo(-4.652273, 7.673733);
	ctxTwo.bezierCurveTo(-4.708462, 7.653420, -4.739653, 7.649165, -4.834983, 7.648807);
	ctxTwo.bezierCurveTo(-4.946101, 7.648388, -4.952973, 7.649685, -5.040905, 7.687506);
	ctxTwo.bezierCurveTo(-5.397499, 7.840896, -5.736124, 8.430129, -5.995355, 9.348323);
	ctxTwo.bezierCurveTo(-6.277011, 10.345945, -6.495350, 11.843511, -6.584805, 13.391304);
	ctxTwo.bezierCurveTo(-6.594947, 13.566782, -6.606810, 13.764195, -6.611167, 13.830000);
	ctxTwo.lineTo(-6.619087, 13.949644);
	ctxTwo.lineTo(-6.750648, 13.961344);
	ctxTwo.bezierCurveTo(-6.823007, 13.967744, -6.903813, 13.975054, -6.930217, 13.977504);
	ctxTwo.lineTo(-6.978225, 13.982004);
	ctxTwo.lineTo(-7.008248, 13.871122);
	ctxTwo.bezierCurveTo(-7.124218, 13.442815, -7.291132, 12.746486, -7.373006, 12.349434);
	ctxTwo.bezierCurveTo(-7.611481, 11.192937, -7.725426, 10.269812, -7.742211, 9.358326);
	ctxTwo.bezierCurveTo(-7.765344, 8.102103, -7.564129, 7.103041, -7.140013, 6.368332);
	ctxTwo.bezierCurveTo(-6.757010, 5.704843, -6.163563, 5.258212, -5.496059, 5.131085);
	ctxTwo.bezierCurveTo(-5.442529, 5.120889, -5.396342, 5.110464, -5.393420, 5.107918);
	ctxTwo.bezierCurveTo(-5.390500, 5.105368, -5.409144, 5.009671, -5.434855, 4.895250);
	ctxTwo.bezierCurveTo(-5.723535, 3.610553, -5.860345, 2.254467, -5.823882, 1.039142);
	ctxTwo.bezierCurveTo(-5.800514, 0.260274, -5.739080, -0.345563, -5.611458, -1.055715);
	ctxTwo.bezierCurveTo(-5.125133, -3.761882, -3.800058, -6.275493, -1.779856, -8.324108);
	ctxTwo.bezierCurveTo(-1.250993, -8.860408, -0.644566, -9.383513, -0.123200, -9.753140);
	ctxTwo.lineTo(-0.022339, -9.824647);
	ctxTwo.lineTo(0.095959, -9.824647);
	ctxTwo.lineTo(0.214257, -9.824647);
	ctxTwo.lineTo(0.321141, -9.748833);
	ctxTwo.bezierCurveTo(0.981426, -9.280488, 1.713008, -8.622999, 2.354800, -7.921140);
	ctxTwo.bezierCurveTo(4.228174, -5.872431, 5.432370, -3.414044, 5.849567, -0.786515);
	ctxTwo.bezierCurveTo(6.138623, 1.033982, 6.061040, 2.968852, 5.620545, 4.925084);
	ctxTwo.bezierCurveTo(5.598494, 5.023011, 5.582042, 5.104502, 5.583986, 5.106175);
	ctxTwo.bezierCurveTo(5.585926, 5.107845, 5.644147, 5.120328, 5.713360, 5.133909);
	ctxTwo.bezierCurveTo(5.947926, 5.179933, 6.221201, 5.285364, 6.422381, 5.407452);
	ctxTwo.bezierCurveTo(7.240229, 5.903771, 7.744403, 6.862112, 7.897689, 8.211736);
	ctxTwo.bezierCurveTo(7.929184, 8.489042, 7.939013, 8.649984, 7.946099, 9.004379);
	ctxTwo.bezierCurveTo(7.972317, 10.315839, 7.717754, 12.003893, 7.212141, 13.871380);
	ctxTwo.lineTo(7.182051, 13.982517);
	ctxTwo.lineTo(7.139832, 13.977717);
	ctxTwo.bezierCurveTo(7.116612, 13.975117, 7.035837, 13.967697, 6.960332, 13.961297);
	ctxTwo.lineTo(6.823051, 13.949644);
	ctxTwo.lineTo(6.815488, 13.839970);
	ctxTwo.bezierCurveTo(6.811328, 13.779649, 6.802058, 13.620373, 6.794888, 13.486022);
	ctxTwo.bezierCurveTo(6.751548, 12.673813, 6.648557, 11.674990, 6.531190, 10.928625);
	ctxTwo.bezierCurveTo(6.272878, 9.285942, 5.896077, 8.215925, 5.433733, 7.812136);
	ctxTwo.bezierCurveTo(5.239470, 7.642475, 5.046857, 7.601701, 4.827738, 7.683853);
	ctxTwo.bezierCurveTo(4.777292, 7.702766, 4.771884, 7.708354, 4.753028, 7.761057);
	ctxTwo.bezierCurveTo(4.616000, 8.144041, 4.227033, 9.038954, 3.940215, 9.631130);
	ctxTwo.bezierCurveTo(3.839119, 9.839859, 3.577135, 10.358272, 3.527630, 10.447555);
	ctxTwo.lineTo(3.506899, 10.484945);
	ctxTwo.lineTo(2.061843, 10.484945);
	ctxTwo.lineTo(0.616787, 10.484945);
	ctxTwo.lineTo(0.616787, 12.294565);
	ctxTwo.lineTo(0.616787, 14.104186);
	ctxTwo.lineTo(0.096261, 14.104186);
	ctxTwo.lineTo(-0.424264, 14.104186);
	ctxTwo.moveTo(0.250703, 9.572656);
	ctxTwo.lineTo(0.250703, 5.360179);
	ctxTwo.lineTo(0.096261, 5.360179);
	ctxTwo.lineTo(-0.058180, 5.360179);
	ctxTwo.lineTo(-0.058180, 9.572656);
	ctxTwo.lineTo(-0.058180, 13.785133);
	ctxTwo.lineTo(0.096261, 13.785133);
	ctxTwo.lineTo(0.250703, 13.785133);
	ctxTwo.moveTo(-6.876526, 12.374327);
	ctxTwo.bezierCurveTo(-6.788566, 11.385783, -6.620046, 10.317337, -6.436035, 9.581552);
	ctxTwo.bezierCurveTo(-6.054316, 8.055214, -5.536588, 7.324340, -4.837096, 7.324340);
	ctxTwo.bezierCurveTo(-4.735588, 7.324340, -4.724091, 7.322550, -4.730617, 7.307723);
	ctxTwo.bezierCurveTo(-4.734637, 7.298583, -4.771433, 7.194555, -4.812377, 7.076550);
	ctxTwo.bezierCurveTo(-4.984452, 6.580609, -5.177989, 5.940594, -5.289190, 5.499763);
	ctxTwo.lineTo(-5.305538, 5.434956);
	ctxTwo.lineTo(-5.350267, 5.437896);
	ctxTwo.bezierCurveTo(-5.482947, 5.446626, -5.732539, 5.526712, -5.903846, 5.615521);
	ctxTwo.bezierCurveTo(-6.298946, 5.820349, -6.649924, 6.188499, -6.877090, 6.636381);
	ctxTwo.bezierCurveTo(-7.362239, 7.592908, -7.492877, 8.956898, -7.270043, 10.739185);
	ctxTwo.bezierCurveTo(-7.199498, 11.303422, -7.102539, 11.856113, -6.948431, 12.572455);
	ctxTwo.bezierCurveTo(-6.909735, 12.752325, -6.910299, 12.753880, -6.876526, 12.374324);
	ctxTwo.moveTo(7.172101, 12.479016);
	ctxTwo.bezierCurveTo(7.382521, 11.511584, 7.506483, 10.664972, 7.562622, 9.811944);
	ctxTwo.bezierCurveTo(7.580350, 9.542563, 7.580350, 8.815980, 7.562621, 8.590575);
	ctxTwo.bezierCurveTo(7.494866, 7.729110, 7.337025, 7.108463, 7.051028, 6.578925);
	ctxTwo.bezierCurveTo(6.748031, 6.017910, 6.279342, 5.618247, 5.759120, 5.477280);
	ctxTwo.bezierCurveTo(5.656802, 5.449555, 5.515362, 5.424726, 5.506037, 5.432854);
	ctxTwo.bezierCurveTo(5.502686, 5.435774, 5.464927, 5.567554, 5.422126, 5.725700);
	ctxTwo.bezierCurveTo(5.334794, 6.048389, 5.282464, 6.225625, 5.173841, 6.566592);
	ctxTwo.bezierCurveTo(5.107802, 6.773891, 4.940330, 7.268679, 4.922491, 7.309194);
	ctxTwo.bezierCurveTo(4.916791, 7.322145, 4.933136, 7.324340, 5.035338, 7.324340);
	ctxTwo.bezierCurveTo(5.402277, 7.324340, 5.705628, 7.511855, 5.978909, 7.907606);
	ctxTwo.bezierCurveTo(6.492916, 8.651960, 6.885380, 10.239680, 7.080559, 12.364357);
	ctxTwo.bezierCurveTo(7.105962, 12.640879, 7.115464, 12.719314, 7.121628, 12.703349);
	ctxTwo.bezierCurveTo(7.123748, 12.697849, 7.146459, 12.596915, 7.172102, 12.479016);
	ctxTwo.moveTo(-0.424264, 9.443041);
	ctxTwo.lineTo(-0.424264, 8.730160);
	ctxTwo.lineTo(-2.095292, 8.730160);
	ctxTwo.lineTo(-3.766320, 8.730160);
	ctxTwo.lineTo(-3.758560, 8.752593);
	ctxTwo.bezierCurveTo(-3.725951, 8.846916, -3.311304, 9.714497, -3.134322, 10.058711);
	ctxTwo.lineTo(-3.084340, 10.155921);
	ctxTwo.lineTo(-1.754300, 10.155921);
	ctxTwo.lineTo(-0.424260, 10.155921);
	ctxTwo.moveTo(3.338162, 10.033599);
	ctxTwo.bezierCurveTo(3.548865, 9.616111, 3.957301, 8.759560, 3.957301, 8.735171);
	ctxTwo.bezierCurveTo(3.957301, 8.732411, 3.205685, 8.730161, 2.287044, 8.730161);
	ctxTwo.lineTo(0.616787, 8.730161);
	ctxTwo.lineTo(0.616787, 9.443041);
	ctxTwo.lineTo(0.616787, 10.155922);
	ctxTwo.lineTo(1.946700, 10.155733);
	ctxTwo.lineTo(3.276614, 10.155543);
	ctxTwo.lineTo(3.338162, 10.033592);
	ctxTwo.moveTo(-0.424264, 6.726118);
	ctxTwo.lineTo(-0.424264, 5.041127);
	ctxTwo.lineTo(0.096261, 5.041127);
	ctxTwo.lineTo(0.616787, 5.041127);
	ctxTwo.lineTo(0.616787, 6.726150);
	ctxTwo.lineTo(0.616787, 8.411173);
	ctxTwo.lineTo(2.358545, 8.408653);
	ctxTwo.lineTo(4.100303, 8.406133);
	ctxTwo.lineTo(4.177889, 8.221681);
	ctxTwo.bezierCurveTo(4.292599, 7.948957, 4.549774, 7.275477, 4.648087, 6.990333);
	ctxTwo.bezierCurveTo(5.115691, 5.634105, 5.407291, 4.387098, 5.552698, 3.121833);
	ctxTwo.bezierCurveTo(5.625703, 2.486573, 5.644684, 2.132663, 5.644405, 1.411916);
	ctxTwo.bezierCurveTo(5.644165, 0.802115, 5.637846, 0.634233, 5.598409, 0.190547);
	ctxTwo.bezierCurveTo(5.465399, -1.305841, 5.091128, -2.731455, 4.471563, -4.101650);
	ctxTwo.bezierCurveTo(4.425702, -4.203074, 4.386041, -4.280469, 4.383428, -4.273638);
	ctxTwo.bezierCurveTo(4.379648, -4.263758, 3.501808, -4.261219, 0.085542, -4.261219);
	ctxTwo.lineTo(-4.207595, -4.261219);
	ctxTwo.lineTo(-4.284911, -4.089231);
	ctxTwo.bezierCurveTo(-5.263432, -1.912524, -5.628383, 0.384557, -5.388600, 2.857618);
	ctxTwo.bezierCurveTo(-5.259255, 4.191654, -4.953764, 5.547659, -4.460920, 6.975377);
	ctxTwo.bezierCurveTo(-4.322983, 7.374967, -4.006069, 8.195110, -3.918655, 8.378705);
	ctxTwo.lineTo(-3.903227, 8.411109);
	ctxTwo.lineTo(-2.163746, 8.411109);
	ctxTwo.lineTo(-0.424264, 8.411109);
	ctxTwo.moveTo(-0.126821, 2.637847);
	ctxTwo.bezierCurveTo(-0.879172, 2.574789, -1.553237, 2.223400, -1.976109, 1.673817);
	ctxTwo.bezierCurveTo(-2.065903, 1.557117, -2.205817, 1.311863, -2.253499, 1.187583);
	ctxTwo.bezierCurveTo(-2.566037, 0.372975, -2.324430, -0.499511, -1.624083, -1.085360);
	ctxTwo.bezierCurveTo(-1.252920, -1.395841, -0.798453, -1.591360, -0.274412, -1.666009);
	ctxTwo.bezierCurveTo(-0.086548, -1.692770, 0.314789, -1.689852, 0.505937, -1.660339);
	ctxTwo.bezierCurveTo(1.426963, -1.518112, 2.165698, -0.966680, 2.454147, -0.206084);
	ctxTwo.bezierCurveTo(2.808179, 0.727444, 2.406938, 1.739677, 1.466651, 2.285132);
	ctxTwo.bezierCurveTo(1.173584, 2.455139, 0.811038, 2.575794, 0.450905, 2.623173);
	ctxTwo.bezierCurveTo(0.305725, 2.642273, 0.014305, 2.649674, -0.126821, 2.637846);
	ctxTwo.moveTo(0.328374, 2.378411);
	ctxTwo.bezierCurveTo(1.062877, 2.308326, 1.696251, 1.931737, 2.039326, 1.361116);
	ctxTwo.bezierCurveTo(2.364492, 0.820285, 2.370992, 0.164655, 2.056564, -0.377761);
	ctxTwo.bezierCurveTo(1.728555, -0.943604, 1.126133, -1.322221, 0.407256, -1.414336);
	ctxTwo.bezierCurveTo(0.243056, -1.435376, -0.051095, -1.435082, -0.219807, -1.413710);
	ctxTwo.bezierCurveTo(-1.199388, -1.289615, -1.959884, -0.608287, -2.082521, 0.255093);
	ctxTwo.bezierCurveTo(-2.122603, 0.537276, -2.071403, 0.893497, -1.952050, 1.162837);
	ctxTwo.bezierCurveTo(-1.815875, 1.470139, -1.568714, 1.764049, -1.270618, 1.973159);
	ctxTwo.bezierCurveTo(-0.965653, 2.187087, -0.546259, 2.338523, -0.149701, 2.377904);
	ctxTwo.bezierCurveTo(-0.024458, 2.390341, 0.200842, 2.390580, 0.328374, 2.378412);
	ctxTwo.moveTo(-0.035300, 1.929895);
	ctxTwo.bezierCurveTo(-0.613392, 1.892464, -1.135043, 1.586252, -1.398406, 1.129744);
	ctxTwo.bezierCurveTo(-1.667956, 0.662511, -1.627314, 0.105345, -1.291589, -0.334589);
	ctxTwo.bezierCurveTo(-1.193034, -0.463735, -0.979241, -0.649051, -0.829749, -0.734911);
	ctxTwo.bezierCurveTo(-0.424358, -0.967745, 0.044821, -1.036143, 0.519210, -0.931566);
	ctxTwo.bezierCurveTo(0.588607, -0.916268, 0.668553, -0.894696, 0.696867, -0.883629);
	ctxTwo.bezierCurveTo(0.725182, -0.872563, 0.784384, -0.849270, 0.828429, -0.831869);
	ctxTwo.bezierCurveTo(1.028955, -0.752642, 1.284765, -0.568167, 1.433847, -0.395275);
	ctxTwo.bezierCurveTo(1.804883, 0.035020, 1.871581, 0.611389, 1.606824, 1.099480);
	ctxTwo.bezierCurveTo(1.310120, 1.646465, 0.660547, 1.974951, -0.035300, 1.929895);
	ctxTwo.moveTo(0.437108, 1.637915);
	ctxTwo.bezierCurveTo(1.176994, 1.468429, 1.610934, 0.825574, 1.424629, 0.174964);
	ctxTwo.bezierCurveTo(1.243110, -0.458929, 0.487616, -0.847424, -0.243488, -0.682827);
	ctxTwo.bezierCurveTo(-0.809112, -0.555485, -1.207360, -0.148054, -1.271182, 0.368564);
	ctxTwo.bezierCurveTo(-1.294007, 0.553325, -1.251347, 0.786617, -1.161806, 0.966692);
	ctxTwo.bezierCurveTo(-1.075408, 1.140450, -0.886981, 1.341699, -0.705971, 1.453546);
	ctxTwo.bezierCurveTo(-0.611065, 1.512190, -0.422699, 1.595379, -0.333795, 1.617913);
	ctxTwo.bezierCurveTo(-0.156078, 1.662958, -0.080915, 1.671045, 0.124862, 1.667261);
	ctxTwo.bezierCurveTo(0.294395, 1.664141, 0.342227, 1.659651, 0.437108, 1.637915);
	ctxTwo.moveTo(4.220289, -4.625412);
	ctxTwo.bezierCurveTo(4.084413, -4.901671, 3.759644, -5.468153, 3.551662, -5.791670);
	ctxTwo.bezierCurveTo(3.045333, -6.579263, 2.473586, -7.303044, 1.818931, -7.985149);
	ctxTwo.bezierCurveTo(1.343798, -8.480206, 0.724122, -9.031028, 0.234105, -9.393885);
	ctxTwo.bezierCurveTo(0.117127, -9.480507, 0.094827, -9.493260, 0.079663, -9.482216);
	ctxTwo.bezierCurveTo(-0.100889, -9.350709, -0.170784, -9.298240, -0.281682, -9.210962);
	ctxTwo.bezierCurveTo(-0.354343, -9.153778, -0.450898, -9.081422, -0.496249, -9.050171);
	ctxTwo.bezierCurveTo(-0.824881, -8.823714, -1.219567, -8.469059, -1.587167, -8.069897);
	ctxTwo.bezierCurveTo(-1.895316, -7.735291, -2.451727, -7.064541, -2.749210, -6.669062);
	ctxTwo.bezierCurveTo(-3.112559, -6.186018, -3.411274, -5.733129, -3.706049, -5.218374);
	ctxTwo.bezierCurveTo(-3.842225, -4.980575, -3.984188, -4.719598, -4.035529, -4.612675);
	ctxTwo.lineTo(-4.051088, -4.580271);
	ctxTwo.lineTo(0.095701, -4.580271);
	ctxTwo.lineTo(4.242491, -4.580271);
	ctxTwo.fill();








//
//
//
//
//







/*  ctxTwo.beginPath();
  ctxTwo.fillStyle = 'rgb(120, 150, 150)'
  ctxTwo.moveTo(-20, 40+muu);
  ctxTwo.lineTo(0, 0+muu);
  ctxTwo.lineTo(20, 40+muu);
  ctxTwo.fill();
  ctxTwo.closePath();

  ctxTwo.beginPath()
  ctxTwo.moveTo(-5, 15+muu);
  ctxTwo.lineTo(-15, 35+muu);
  ctxTwo.lineTo(-5, 35+muu);
  ctxTwo.fillStyle = 'rgb(255, 55, 50)'
  ctxTwo.fill();
  ctxTwo.closePath();

  ctxTwo.beginPath()
  ctxTwo.moveTo(5, 15+muu);
  ctxTwo.lineTo(5, 35+muu);
  ctxTwo.lineTo(15, 35+muu);
  ctxTwo.fillStyle = 'rgb(255, 155, 50)'
  ctxTwo.fill();
  ctxTwo.closePath();*/
  ctxTwo.restore();

  ctxTwo.fillStyle = 'red';
/*  ctxTwo.save();
  ctxTwo.beginPath();
  ctxTwo.translate(test%(w+200)-200,0)
	ctxTwo.fillStyle = 'rgb(255, 0, 0)';
	ctxTwo.moveTo(136.827380, 214.601210);
	ctxTwo.lineTo(111.691300, 167.915790);
	ctxTwo.lineTo(42.145221, 195.241440);
	ctxTwo.lineTo(78.778215, 156.909020);
	ctxTwo.lineTo(31.299059, 99.210858);
	ctxTwo.lineTo(79.075573, 122.205540);
	ctxTwo.lineTo(119.277920, 59.220464);
	ctxTwo.lineTo(112.172440, 111.764380);
	ctxTwo.lineTo(184.498010, 130.535620);
	ctxTwo.lineTo(132.330060, 140.014870);
	ctxTwo.fill();
  ctxTwo.restore();*/ //zvezdica

  ctxTwo.fillRect(randomDropX-25,randomDropY-25,50,50);
  ctxTwo.fillRect(randomDropY-25,randomDropX-25,50,50);

  ctxTwo.fillStyle = 'green';
  ctxTwo.font = "20px Arial";
  ctxTwo.fillText('Score:'+player.score,0,20);

  //ctxTwo.fillRect(-(test%w - w),500,50,50);
}

var randomDropX = 200;
var randomDropY = 200;
var getData = setInterval(bla, 1000/60);
function bla(){
var imgdata = ctxTwo.getImageData(next.x,next.y,1,1);
//console.log(imgdata.data[0]);
console.log(player.score);
if(imgdata.data[0] <= 255 && imgdata.data[0] >= 240){
  //console.log(imgdata[1]);
  //clearInterval(myInterval);
  player.score++;
  randomDropX = Math.floor(Math.random() * w);
  randomDropY = Math.floor(Math.random() * h);
}
}
