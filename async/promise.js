
// const doWorkPromise = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         //resolve([7,3,1]);
//         reject("Algo malo paso");
//     }, 2000);
// });

// doWorkPromise.then(result => console.log("Success", result))
// .catch(error => console.log("Error!", error));

function resolver2segundos(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Listo!');
        }, 2*1000);
    });
}

async function asyncCall() {
    console.log('llamando...');
    const resultado = await resolver2segundos();
    console.log(resultado);
}

asyncCall();