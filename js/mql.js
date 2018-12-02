import {inputGravity} from './calcy-mql.js';

let width;
let height;
let ctx;
let canvas;

const floor = {
    y: 450,
    height: 150,
    color: 'black',
    draw: function() {
        ctx.fillStyle = floor.color;
        ctx.fillRect(0, floor.y, width, floor.height);
    },
};

export const cube = {
    x: 280,
    y: 0,
    width: 40,
    height: 40,
    color: 'gray',
    gravity: 0,
    velocity: 0,
    update: function() {
        cube.velocity += cube.gravity;
        cube.y += cube.velocity;

        if (cube.y > floor.y - cube.height) {
            cube.y = floor.y - cube.height;
        }
    },
    draw: function() {
        ctx.fillStyle = cube.color;
        ctx.fillRect(cube.x, cube.y, cube.width, cube.height);
    }
};

const createCanvas = function() {
    let frame;
    width = window.innerWidth;
    height = window.innerHeight;

    if (width >= 500) {
        width = 600;
        height = 600;

        canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');
        document.querySelector('div.align-canvas').appendChild(canvas);
            run();
    }
    function run() {
        update();
        draw();

        window.requestAnimationFrame(run);
    }
    function update() {
        frame++;
        cube.update();
    }
    function draw() {
        ctx.fillStyle = 'cyan';
        ctx.fillRect(0, 0, width, height);
        floor.draw();
        cube.draw();
    }
};
createCanvas();
