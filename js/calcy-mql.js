import {cube} from './mql.js';

export const inputGravity = document.querySelector('.gravity');
const form = document.querySelector('.formNumber');
const time = document.querySelector('.time');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const output = document.createElement('ouput');
    document.querySelector('div.result').appendChild(output);

    const output0 = document.createElement('ouput.output_v');
    document.querySelector('div.result').appendChild(output0);

    cube.gravity = inputGravity.value; // gravity
    const t = time.value;
    let v = cube.gravity*t;
    cube.velocity = v;

    let s = (cube.gravity*Math.pow(t, 2))/2;
    const s_mql = `${'S = (g x t²)/2'}`;
    s = `${'( '+ cube.gravity +' / '+ t +'²' + ')' + ' / '+ 2 +' = '+ s}`;

    const v_mql = `${'v = g x t'}`;
    v = `${cube.gravity + 'x' + t + ' = ' + v}`;

    output0.innerHTML += `${'<h>Formula MQL (velocidade): </h>' + v_mql + ' = ' + v}`;
    output.innerHTML += `${'<h>Formula MQL (altura): </h>' + s_mql + ' = ' + s}`;

    console.log(s);
});
