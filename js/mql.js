let frame;
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

const cube = {
    x: 280,
    y: 0,
    width: 40,
    height: 40,
    color: 'gray',
    gravity: 10,
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

const form = document.querySelector('.formNumber');
const gravity = document.querySelector('.gravity');
const time = document.querySelector('.time');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const g = gravity.value; // gravity
    const t = time.value; // time

    const s = (g*Math.pow(t, 2))/2;

    const output = document.createElement('ouput');
    document.querySelector('.result').appendChild(output);
    // let dados = gravity.value;

    // return console.dir(dados);
    // cube.velocity = gravity.value;
    // cube.update();
    // return console.dir();
});

const createCanvas = function() {
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

        document.addEventListener('keyup', function(e) {
            e.preventDefault();
            if (e.keyCode === 38) {
                cube.velocity = -20;
            }
        }, false);

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

