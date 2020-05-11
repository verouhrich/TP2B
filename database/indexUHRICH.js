const mongoClient = require('mongodb').MongoClient;
const chalk = require('chalk'); 

const uriDatabase = "mongodb+srv://admin:Vero1234@cluster0-ayp7a.mongodb.net/test";

async function conectarADB(cliente){
  console.log('Conectando...'); 
  return cliente.connect();
}

async function buscarInventores(coleccion) {
  console.log('Buscando inventores...'); 
  return coleccion.find().toArray();
}

async function insertarInventor(coleccion, inventor) {
  console.log('Insertando inventor...');
  return coleccion.insertOne(inventor);
}

async function actualizarInventor(coleccion, inventor) {
  console.log('Actualizando inventor...');
  return coleccion.updateOne(
      {_id: inventor._id},
      { $set: {
          first: inventor.first,
          last: inventor.last,
          year: inventor.year
          }
      }
  )
}

async function borrarInventor(coleccion, id) {
  console.log('Borrando inventor...');
  return coleccion.deleteOne({_id:id});
} 

function desconectar(cliente){
  console.log('Desconectando...');
  return cliente.close()
}

async function desafio2(uriDatabase){
  const cliente = new mongoClient(uriDatabase, { useNewUrlParser: true, useUnifiedTopology: true });

  let nuevoInventor = {
    _id: 26,
    first : "Veronica",
    last : "Uhrich",
    year : 1989
  }

  let coleccion = await conectarADB(cliente)
    .then((resultado) => {
      console.log(chalk.green('Conexion exitosa'));
      return resultado.db('sample_betp2').collection('inventors');;
    })
    .catch((error) => {
        console.log(chalk.red(`Error al intentar conectar: ${error}`));            
    });

  let inventores = await buscarInventores(coleccion)
    .then((resultado) => {
        console.log(chalk.green('Inventores encontrados'))
    })
    .catch((error) => {
        console.log(`Error al buscar inventores: ${error}`);
    });

  await insertarInventor(coleccion, nuevoInventor)
    .then(resultado => {
      console.log(chalk.green(`Se agrego el inventorcon id ${nuevoInventor._id}`));
    })
    .catch(error => {
        console.log(chalk.red(`Error al intentar insertar el inventor: ${error}`));
    });

  nuevoInventor = {
    _id: 26,
    first : "Veronica",
    last : "Uhrich",
    year : 1988
  }

  await actualizarInventor(coleccion, nuevoInventor)
    .then(() => {
      console.log(chalk.green(`Se actualizo el inventor con id ${nuevoInventor._id}`));      
    })
    .catch((error) => {
        console.log(chalk.red(`Error al intentar actualizar el inventor: ${error}`));
    }); 
    
  await borrarInventor(coleccion, nuevoInventor._id)
  .then(() => {
      console.log(chalk.green(`Se borro el inventor con id ${nuevoInventor._id}`));
  })
  .catch((error) => {
      console.log(chalk.red(`Error al intentar borrar el inventor: ${error}`));
  });

  desconectar(cliente)
    .then((resultado) => {
        console.log(chalk.green('Desconexion exitosa'));
    })
    .catch((error) => {
        console.log(chalk.red(`Error al intentar desconectar: ${error}`));            
    });
}

desafio2(uriDatabase);
