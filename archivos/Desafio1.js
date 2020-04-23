// Desafio 1
// imprimir "Hola mundo" por siempre, en intervalos de 1 segundo, incrementando 1 cada vez
// La segunda vez demorarà 2 segundos
// La tercera vez 3 segundos 

// Hola mundo 1
// Hola mundo 2
// Hola mundo 3
//......

// function saludo(timeout){
//     setTimeout(() => {
//         console.log('Hola mundo ', timeout);
//         saludo( timeout + 1);
//     }, timeout * 1000);
// }

// saludo(1);
// Restriccion: solo se puede utilizar const (no let ni var)

// Desafio 2
// Imprimir "Hola mundo" 5 veces con retardo de 100ms
// Imprimir 5 veces con retardo de 200ms
//.....

// Restriccion: Utilizar solo setInterval()

function saludo(intervalo){
    let counter = 0;
    const intervalId =  setInterval(() => {
        console.log('Hola mundo ' + intervalo * 100);
        counter += 1;
        if(counter === 5){
            // reiniciar
            clearInterval(intervalId);
            saludo(intervalo + 1);
        }
    }, intervalo * 100);
}

saludo(1)
