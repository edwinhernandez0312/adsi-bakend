import express from 'express';
import cors from 'cors';
import dbconecction from '../database/config.js';
import categoria from '../routes/categoria.js';
import usuario from '../routes/usuario.js'

class server{
    constructor(){
        this.PORT=process.env.PORT;
       // crear servidor
        this.app = express();
        // el puerto
        this.PORT=process.env.PORT;
       //conertar base de datos
        this.conectarBD();
     
        this.middleware();
        
        this.routes()
    }

     routes(){
         //rutas que va a utilizar nuestro servidor las cuales estan definidas en nuestro archivo categoria.js en routes
         // primer parametro de use es la ruta del ordenador la segunda es el archivo
      this.app.use('/api/categoria',categoria)
      this.app.use('/api/usuario',usuario)
     }

   async conectarBD(){
       await dbconecction();
    }


middleware(){
    this.app.use(express.json());
    this.app.use(cors());
   
    this.app.use(express.static('public')) // el nos conecta con el fronted 
}

listen(){
    this.app.listen(this.PORT,()=>{   
        console.log(`servidor corriendo en el puerto ${this.PORT}`);
    
    })
}


}

export  {server};