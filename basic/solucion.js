let str = require('./data.js');

function getTotalSeg(tipoVideo, str){

    return str
        .replace('<ul>','')
        .replace('</ul>','')
        .split('</li>')
        .slice(0,-1)
        .map(video => (
            {
                duracion: video
                            .split('>')[0]
                            .split('=')[1]
                            .split('"')
                            .join('')
                            .split(':')
                ,
                tipo: video.split('>')[1]
            }
        ))
        .map(video => (
            {
                duracion: parseInt(video.duracion[1]) + parseInt(video.duracion[0])*60,
                tipo: video.tipo
            }
        ))
        .filter(video => video.tipo == tipoVideo)
        .reduce((total, actual) => (
            {
                duracion: total.duracion + actual.duracion
            }
        ))
        .duracion;
}
console.log(getTotalSeg('Redux Video', str));