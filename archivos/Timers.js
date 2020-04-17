

setTimeout(() => {
    console.log('Termino el tiempo');
}, 2 * 1000);

// frenar despues de 3 veces
let i = 0;
let timerid = setInterval(() => {
    console.log('Hola mundo cada 4 segundos');
    i++;
    if(i === 3){
        clearInterval(timerid);
    }
}, 4 * 1000);

