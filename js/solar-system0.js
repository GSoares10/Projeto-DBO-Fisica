import {sun} from './solar-system.js';
import {planets} from './solar-system.js';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const centerX = width/2;
const centerY = height/2;

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
