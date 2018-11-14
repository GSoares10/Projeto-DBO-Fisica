let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
let centerX = width / 2;
let centerY = height / 2;


function toDeg (rad) {
  return rad * (180 / Math.PI);
}

function toRad (deg) {
  return deg * (Math.PI / 180);
}

let sun = {
  radius: 50,
  color: 'yellow'
};

let planets = [
  {
    name: 'mercury',
    color: 'brown',
    radius: 10,
    orbit: 80,
    speed: 0.03,
    pos: toRad(45)
  },
  {
    name: 'venus',
    color: 'red',
    radius: 15,
    orbit: 120,
    speed: 0.02,
    pos: toRad(60)
  },
  {
    name: 'earth',
    color: 'blue',
    radius: 17,
    orbit: 160,
    speed: 0.01,
    pos: toRad(90),
    sats: [
      {
        name: 'moon',
        color: 'white',
        radius: 2,
        orbit: 20,
        speed: 0.1,
        pos: 0
      }
    ]
  },
  {
    name: 'mars',
    color: 'darkred',
    radius: 16,
    orbit: 200,
    speed: 0.005,
    pos: toRad(130)
  },
  {
    name: 'jupiter',
    color: 'darkblue',
    radius: 45,
    orbit: 300,
    speed: 0.001,
    pos: toRad(300),
    sats: [
      {
        name: 'io',
        color: 'gray',
        radius: 5,
        orbit: 55,
        speed: 0.02,
        pos: 0
      },
      {
        name: 'europe',
        color: '#666',
        radius: 4,
        orbit: 59,
        speed: 0.02,
        pos: toRad(90)
      }
    ]
  },
  
  {
    name: '',
    color: 'green',
    radius: 6,
    orbit: 60,
    speed: 0.05,
    pos: toRad(5)
  }
];


function drawSun () {
  ctx.beginPath();
  ctx.fillStyle = sun.color;
  ctx.arc(centerX, centerY, sun.radius, Math.PI * 2, false);
  ctx.fill();
  ctx.closePath();
}

function drawPlanet (planet) {
  ctx.beginPath();
  ctx.strokeStyle = '#fff';
  ctx.arc(centerX, centerY, planet.orbit, Math.PI * 2, false);
  ctx.stroke();
  ctx.closePath();
  
  let x = centerX + Math.cos(planet.pos) * planet.orbit;
  let y = centerY + Math.sin(planet.pos) * planet.orbit;
  ctx.beginPath();
  ctx.fillStyle = planet.color;
  ctx.arc(x, y, planet.radius, Math.PI * 2, false);
  ctx.fill();
  ctx.closePath();

  if (planet.sats) {
    planet.sats.forEach(function (sat) {
      drawSatellite(x, y, sat);
      sat.pos += sat.speed;
    });
  }
}

function drawSatellite (planetX, planetY, sat) {
  ctx.beginPath();
  let x = planetX + Math.cos(sat.pos) * sat.orbit;
  let y = planetY + Math.sin(sat.pos) * sat.orbit;
  ctx.fillStyle = sat.color;
  ctx.arc(x, y, sat.radius, Math.PI * 2, false);
  ctx.fill();
  ctx.closePath();
}

function render () {
  ctx.clearRect(0, 0, width, height);
  drawSun();
  planets.forEach(function (planet) {
    drawPlanet(planet);
    planet.pos += planet.speed;
  });
  
  requestAnimationFrame(render);
}

render();