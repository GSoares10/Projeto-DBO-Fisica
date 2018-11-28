const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const centerX = width / 2;
const centerY = height / 2;

function toRad(deg) {
    return deg * (Math.PI / 180);
}

const sun = {
    radius: 45,
    color: 'yellow'
};

const planets = [{
    name: 'mercury',
    color: '#B7B5B5',
    radius: 10,
    orbit: 80,
    speed: 0.05,
    pos: toRad(5)
},
{
    name: 'venus',
    color: '#BA6714',
    radius: 12,
    orbit: 130,
    speed: 0.02,
    pos: toRad(60)
},
{
    name: 'earth',
    color: 'blue',
    radius: 18,
    orbit: 180,
    speed: 0.01,
    pos: toRad(90),
    sats: [{
        name: 'moon',
        color: 'white',
        radius: 2,
        orbit: 26,
        speed: 0.1,
        pos: 0
    }]
},
{
    name: 'mars',
    color: '#9E8B56',
    radius: 16,
    orbit: 240,
    speed: 0.005,
    pos: toRad(130)
},
{
    name: 'jupiter',
    color: '#DFD48B',
    radius: 30,
    orbit: 310,
    speed: 0.001,
    pos: toRad(300),
    sats: [{
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
    name: 'saturn',
    color: '#F9F6B3',
    radius: 28,
    orbit: 390,
    speed: 0.001,
    pos: toRad(315)
},
{
    name: 'uranus',
    color: '#9CDCE3',
    radius: 18,
    orbit: 460,
    speed: 0.0005,
    pos: toRad(155)
},
{
    name: 'neptune',
    color: '#2E73B9',
    radius: 19,
    orbit: 520,
    speed: 0.0003,
    pos: toRad(130)
}
];


function drawSun() {
    ctx.beginPath();
    ctx.fillStyle = sun.color;
    ctx.arc(centerX, centerY, sun.radius, Math.PI * 2, false);
    ctx.fill();
    ctx.closePath();
}

function drawPlanet(planet) {
    ctx.beginPath();
    ctx.strokeStyle = '#fff';
    ctx.arc(centerX, centerY, planet.orbit, Math.PI * 2, false);
    ctx.stroke();
    ctx.closePath();

    const x = centerX + Math.cos(planet.pos) * planet.orbit;
    const y = centerY + Math.sin(planet.pos) * planet.orbit;
    ctx.beginPath();
    ctx.fillStyle = planet.color;
    ctx.arc(x, y, planet.radius, Math.PI * 2, false);
    ctx.fill();
    ctx.closePath();

    if (planet.sats) {
        planet.sats.forEach(function(sat) {
            drawSatellite(x, y, sat);
            sat.pos += sat.speed;
        });
    }
}

function drawSatellite(planetX, planetY, sat) {
    ctx.beginPath();
    const x = planetX + Math.cos(sat.pos) * sat.orbit;
    const y = planetY + Math.sin(sat.pos) * sat.orbit;
    ctx.fillStyle = sat.color;
    ctx.arc(x, y, sat.radius, Math.PI * 2, false);
    ctx.fill();
    ctx.closePath();
}

function render() {
    ctx.clearRect(0, 0, width, height);
    drawSun();
    planets.forEach(function(planet) {
        drawPlanet(planet);
        planet.pos += planet.speed;
    });

    requestAnimationFrame(render);
}

render();
