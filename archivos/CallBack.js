/**
 * Definicion de Callback: Una funcion que es pasada como parametro a otra funcion
 * la funcion callback invoca ala funcion que se pase como parametro cuando realiza algun trabajo
 * 
 */

 function saludo(callback){
     console.log('Hola');

     let data = {
         name: 'Pablo'
     };

     callback(data);
 }

 function saludo2(callback){
    console.log('Hola');

    let data = {
        name: 'Pedro'
    };

    callback(data);
}
 

 saludo(function(data){
    console.log('La funcion callback fue invocada');
    console.log(data);
 });

 saludo2(function(data){
      console.log('Otra invocacion de callback');
      console.log(data)
 } );



