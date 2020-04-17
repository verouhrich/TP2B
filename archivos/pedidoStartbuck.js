let pedido1 = {
    nombre: "Caffe Vanilla",
    tipo: "bebida caliente",
    tamaño: "grande",
    cliente: "Roberto"
}

let pedido2 = {
    nombre: "Cold Brew",
    tipo: "bebibida fria",
    tamaño: "grande",
    cliente: "Pablo"
}

// Definicion de la funcion que hace el pedido
function pedidoStarbuck(pedido, callbackCliente){
    switch (pedido.nombre) {
        case 'Caffe Vanilla':
            setTimeout(() => {
                callbackCliente(null, pedido);
            }, 4 * 1000);
            break;
        case 'Cold Brew':
            setTimeout(() => {
                callbackCliente(null, pedido)
            }, 2 * 1000);
            break;
        default:
            break;
    }
}

pedidoStarbuck(pedido1, (error, result) => {
    if(!error){
        console.log(`pedido 1 finalizado llamar a: ${result.cliente}`);
    }
    else
    {
        console.log(`pedido 1 con error avisar a: ${result.cliente}`);
    }
});

pedidoStarbuck(pedido2, (error, result) => {
    if(!error){
        console.log(`pedido 2 finalizado llamar a: ${result.cliente}`);
    }
    else
    {
        console.log(`pedido 2 con error avisar a: ${result.cliente}`);
    }
});


