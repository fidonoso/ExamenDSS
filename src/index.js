import app from './app.js'
import {sequelize} from './database/database.js'


async function main(){
 try {   
     app.listen(3000, ()=>{ console.log('Escuchando en el puerto 3000')})
 } catch (error) {
      console.log('error en la conexion', error)
    }
  }
  main();
  
 