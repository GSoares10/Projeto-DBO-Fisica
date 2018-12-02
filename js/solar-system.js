function toRad(deg) {
    return deg * (Math.PI / 180);
}

export const sun = {
    radius: 25,
    color: 'yellow'
};

export const planets = [{
    name: 'mercury',
    color: '#B7B5B5',
    radius: 5,
    orbit: 60,
    speed: 0.05,
    pos: toRad(5)
},
{
    name: 'venus',
    color: '#BA6714',
    radius: 8,
    orbit: 95,
    speed: 0.02,
    pos: toRad(60)
},
{
    name: 'earth',
    color: 'blue',
    radius: 14,
    orbit: 140,
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
    radius: 12,
    orbit: 190,
    speed: 0.005,
    pos: toRad(130)
},
{
    name: 'jupiter',
    color: '#DFD48B',
    radius: 18,
    orbit: 260,
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
    radius: 16,
    orbit: 330,
    speed: 0.001,
    pos: toRad(315)
},
{
    name: 'uranus',
    color: '#9CDCE3',
    radius: 10,
    orbit: 390,
    speed: 0.0005,
    pos: toRad(155)
},
{
    name: 'neptune',
    color: '#2E73B9',
    radius: 12,
    orbit: 440,
    speed: 0.0003,
    pos: toRad(130)
}
];
